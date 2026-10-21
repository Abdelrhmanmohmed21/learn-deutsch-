/* واجهة برمجة الموقع (Cloudflare Pages Functions + D1)
   الروابط كلها تحت /api/...
   المتغيرات في إعدادات المشروع على Cloudflare:
     DB           ربط قاعدة D1 (Binding)
     ADMIN_EMAIL  إيميل صاحب الموقع: أول ما يسجّل به يبقى مدير تلقائيًا */
const DAY=86400000, SESSION_DAYS=30, PBKDF2_ITER=100000;
const SYNC_KEYS=/^(lessons_done|res_[A-Z0-9.]+|srs|srs_cfg|srs_day|srs_streak|xp|mins|stats|badges|mistakes|placement|onb|dg_done|mock_best|profile)$/;
const LEVELS_OK=["A1","A2","B1","B2","C1","C2"];
const DOCS_OK=["levels","themes","verbs","gex","topics","dialogs","mock","aliases"];

const enc=new TextEncoder();
const b64u=buf=>btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
const rand=n=>b64u(crypto.getRandomValues(new Uint8Array(n)));
async function sha256(s){return b64u(await crypto.subtle.digest("SHA-256",enc.encode(s)))}
async function hashPass(pw,salt){const key=await crypto.subtle.importKey("raw",enc.encode(pw),"PBKDF2",false,["deriveBits"]);
  return b64u(await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:enc.encode(salt),iterations:PBKDF2_ITER},key,256))}
function safeEq(a,b){if(a.length!==b.length)return false;let r=0;for(let i=0;i<a.length;i++)r|=a.charCodeAt(i)^b.charCodeAt(i);return r===0}

function json(obj,status=200,extra={}){return new Response(JSON.stringify(obj),{status,headers:{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store",...extra}})}
const err=(code,status=400)=>json({error:code},status);

async function body(req){try{return await req.json()}catch(e){return null}}
async function currentUser(req,env){const h=req.headers.get("Authorization")||"";const t=h.startsWith("Bearer ")?h.slice(7):"";if(!t)return null;
  const row=await env.DB.prepare("SELECT u.id,u.email,u.name,u.role,s.expires_at FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=?").bind(await sha256(t)).first();
  if(!row||row.expires_at<Date.now())return null;return row}
async function newSession(env,uid){const token=rand(32),now=Date.now();
  await env.DB.prepare("INSERT INTO sessions(token_hash,user_id,created_at,expires_at) VALUES(?,?,?,?)").bind(await sha256(token),uid,now,now+SESSION_DAYS*DAY).run();
  await env.DB.prepare("UPDATE users SET last_seen=? WHERE id=?").bind(now,uid).run();return token}
const pub=u=>({id:u.id,email:u.email,name:u.name,role:u.role});
async function bumpVersion(env){await env.DB.prepare("INSERT INTO meta(key,value) VALUES('content_version',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").bind(String(Date.now())).run()}
async function audit(env,uid,action,target){await env.DB.prepare("INSERT INTO audit(user_id,action,target,at) VALUES(?,?,?,?)").bind(uid,action,String(target||""),Date.now()).run()}
const validEmail=e=>typeof e==="string"&&e.length<=120&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
function cleanWord(b){const w={level:String(b.level||""),gender:String(b.gender||""),word:String(b.word||"").trim(),meaning:String(b.meaning||"").trim(),
  pron:String(b.pron||"").trim(),ex_de:String(b.ex_de||"").trim(),ex_ar:String(b.ex_ar||"").trim(),plural:String(b.plural||"").trim()};
  if(!LEVELS_OK.includes(w.level))return [null,"level"];if(!["","m","f","n","p"].includes(w.gender))return [null,"gender"];
  if(!w.word||!w.meaning)return [null,"required"];if(Object.values(w).some(v=>v.length>600))return [null,"too_long"];return [w,null]}

/* ---------- الحسابات ---------- */
async function register(req,env){const b=await body(req);if(!b)return err("bad_json");
  const email=String(b.email||"").trim().toLowerCase(),pw=String(b.password||""),name=String(b.name||"").trim().slice(0,40);
  if(!validEmail(email))return err("email");if(pw.length<8||pw.length>200)return err("password");if(name.length<2)return err("name");
  const exists=await env.DB.prepare("SELECT id FROM users WHERE email=?").bind(email).first();if(exists)return err("exists",409);
  const salt=rand(16),hash=await hashPass(pw,salt),role=env.ADMIN_EMAIL&&email===String(env.ADMIN_EMAIL).toLowerCase()?"admin":"student";
  const r=await env.DB.prepare("INSERT INTO users(email,name,pass_hash,salt,role,created_at) VALUES(?,?,?,?,?,?)").bind(email,name,hash,salt,role,Date.now()).run();
  const id=r.meta.last_row_id;const token=await newSession(env,id);return json({token,user:{id,email,name,role}})}
async function login(req,env){const b=await body(req);if(!b)return err("bad_json");
  const email=String(b.email||"").trim().toLowerCase(),pw=String(b.password||""),now=Date.now();
  const n=await env.DB.prepare("SELECT COUNT(*) AS n FROM login_attempts WHERE email=? AND at>?").bind(email,now-15*60000).first();
  if(n&&n.n>=10)return err("too_many",429);
  const u=await env.DB.prepare("SELECT * FROM users WHERE email=?").bind(email).first();
  if(!u||!safeEq(await hashPass(pw,u.salt),u.pass_hash)){await env.DB.prepare("INSERT INTO login_attempts(email,at) VALUES(?,?)").bind(email,now).run();return err("wrong",401)}
  await env.DB.prepare("DELETE FROM login_attempts WHERE email=?").bind(email).run();
  await env.DB.prepare("DELETE FROM sessions WHERE expires_at<?").bind(now).run();
  return json({token:await newSession(env,u.id),user:pub(u)})}
async function logout(req,env){const h=req.headers.get("Authorization")||"";if(h.startsWith("Bearer "))await env.DB.prepare("DELETE FROM sessions WHERE token_hash=?").bind(await sha256(h.slice(7))).run();return json({ok:true})}
async function changePassword(req,env,u){const b=await body(req);if(!b)return err("bad_json");const pw=String(b.password||"");if(pw.length<8)return err("password");
  const salt=rand(16);await env.DB.prepare("UPDATE users SET pass_hash=?,salt=? WHERE id=?").bind(await hashPass(pw,salt),salt,u.id).run();return json({ok:true})}

/* ---------- التقدّم ---------- */
async function getProgress(env,u){const r=await env.DB.prepare("SELECT key,value,updated_at FROM progress WHERE user_id=?").bind(u.id).all();
  const data={};let updated=0;for(const x of r.results){try{data[x.key]=JSON.parse(x.value)}catch(e){}updated=Math.max(updated,x.updated_at)}
  await env.DB.prepare("UPDATE users SET last_seen=? WHERE id=?").bind(Date.now(),u.id).run();return json({data,updated})}
async function putProgress(req,env,u){const b=await body(req);if(!b||typeof b.data!=="object"||!b.data)return err("bad_json");
  const now=Date.now(),stmts=[];let size=0;
  for(const [k,v] of Object.entries(b.data)){if(!SYNC_KEYS.test(k))continue;const s=JSON.stringify(v);size+=s.length;if(size>4_000_000)return err("too_large",413);
    stmts.push(v===null?env.DB.prepare("DELETE FROM progress WHERE user_id=? AND key=?").bind(u.id,k)
      :env.DB.prepare("INSERT INTO progress(user_id,key,value,updated_at) VALUES(?,?,?,?) ON CONFLICT(user_id,key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at").bind(u.id,k,s,now))}
  if(stmts.length)await env.DB.batch(stmts);return json({ok:true,saved:stmts.length,updated:now})}

/* ---------- لوحة التحكم ---------- */
async function adminStats(env){const one=async(sql,...a)=>(await env.DB.prepare(sql).bind(...a).first())||{};const now=Date.now();
  const users=await one("SELECT COUNT(*) AS n FROM users"),active=await one("SELECT COUNT(*) AS n FROM users WHERE last_seen>?",now-7*DAY);
  const lv=await env.DB.prepare("SELECT level,COUNT(*) AS n FROM words GROUP BY level ORDER BY level").all();
  const docs=await env.DB.prepare("SELECT name,updated_at,length(body) AS size FROM docs ORDER BY name").all();
  const ver=await one("SELECT value FROM meta WHERE key='content_version'");
  const log=await env.DB.prepare("SELECT a.action,a.target,a.at,u.email FROM audit a LEFT JOIN users u ON u.id=a.user_id ORDER BY a.id DESC LIMIT 20").all();
  return json({users:users.n||0,active7:active.n||0,levels:lv.results,docs:docs.results,version:ver.value||"",log:log.results})}
async function listWords(url,env){const lv=url.searchParams.get("level")||"",q=(url.searchParams.get("q")||"").trim(),page=Math.max(0,+url.searchParams.get("page")||0),per=50;
  const where=[],args=[];if(lv){where.push("level=?");args.push(lv)}if(q){where.push("(word LIKE ? OR meaning LIKE ? OR ex_de LIKE ? OR ex_ar LIKE ?)");const l="%"+q+"%";args.push(l,l,l,l)}
  const w=where.length?"WHERE "+where.join(" AND "):"";
  const total=await env.DB.prepare(`SELECT COUNT(*) AS n FROM words ${w}`).bind(...args).first();
  const r=await env.DB.prepare(`SELECT * FROM words ${w} ORDER BY level,pos,id LIMIT ? OFFSET ?`).bind(...args,per,page*per).all();
  return json({total:total.n,page,per,items:r.results})}
async function createWord(req,env,u){const b=await body(req);if(!b)return err("bad_json");const [w,e]=cleanWord(b);if(e)return err(e);
  const mx=await env.DB.prepare("SELECT COALESCE(MAX(pos),-1)+1 AS p FROM words WHERE level=?").bind(w.level).first();
  const r=await env.DB.prepare("INSERT INTO words(level,pos,gender,word,meaning,pron,ex_de,ex_ar,plural,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?)").bind(w.level,mx.p,w.gender,w.word,w.meaning,w.pron,w.ex_de,w.ex_ar,w.plural,Date.now()).run();
  await bumpVersion(env);await audit(env,u.id,"word.create",w.level+":"+w.word);return json({ok:true,id:r.meta.last_row_id})}
async function updateWord(req,env,u,id){const b=await body(req);if(!b)return err("bad_json");const [w,e]=cleanWord(b);if(e)return err(e);
  const r=await env.DB.prepare("UPDATE words SET level=?,gender=?,word=?,meaning=?,pron=?,ex_de=?,ex_ar=?,plural=?,updated_at=? WHERE id=?").bind(w.level,w.gender,w.word,w.meaning,w.pron,w.ex_de,w.ex_ar,w.plural,Date.now(),id).run();
  if(!r.meta.changes)return err("not_found",404);await bumpVersion(env);await audit(env,u.id,"word.update",w.level+":"+w.word);return json({ok:true})}
async function deleteWord(env,u,id){const w=await env.DB.prepare("SELECT level,word FROM words WHERE id=?").bind(id).first();if(!w)return err("not_found",404);
  await env.DB.prepare("DELETE FROM words WHERE id=?").bind(id).run();await bumpVersion(env);await audit(env,u.id,"word.delete",w.level+":"+w.word);return json({ok:true})}
function checkDoc(name,v){const isArr=Array.isArray(v),isObj=v&&typeof v==="object"&&!isArr;
  const need={levels:isArr,themes:isArr,verbs:isArr,dialogs:isArr,gex:isObj,topics:isObj,mock:isObj,aliases:isObj}[name];
  if(!need)return "shape";
  if(name==="levels"&&!v.every(L=>L&&L.id&&Array.isArray(L.words)&&Array.isArray(L.grammar)))return "levels_shape";
  if(name==="dialogs"&&!v.every(d=>d&&d.id&&Array.isArray(d.l)&&Array.isArray(d.q)))return "dialogs_shape";
  return null}
async function getDoc(env,name){if(!DOCS_OK.includes(name))return err("not_found",404);const d=await env.DB.prepare("SELECT body,updated_at FROM docs WHERE name=?").bind(name).first();
  if(!d)return err("not_found",404);return new Response(`{"name":${JSON.stringify(name)},"updated_at":${d.updated_at},"body":${d.body}}`,{headers:{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"}})}
async function putDoc(req,env,u,name){if(!DOCS_OK.includes(name))return err("not_found",404);const b=await body(req);if(!b||!("body" in b))return err("bad_json");
  const e=checkDoc(name,b.body);if(e)return err(e);const s=JSON.stringify(b.body);if(s.length>5_000_000)return err("too_large",413);
  await env.DB.prepare("INSERT INTO docs(name,body,updated_at,updated_by) VALUES(?,?,?,?) ON CONFLICT(name) DO UPDATE SET body=excluded.body,updated_at=excluded.updated_at,updated_by=excluded.updated_by").bind(name,s,Date.now(),u.id).run();
  await bumpVersion(env);await audit(env,u.id,"doc.update",name);return json({ok:true})}
async function listUsers(url,env){const q=(url.searchParams.get("q")||"").trim();const r=q
  ?await env.DB.prepare("SELECT id,email,name,role,created_at,last_seen FROM users WHERE email LIKE ? OR name LIKE ? ORDER BY id DESC LIMIT 200").bind("%"+q+"%","%"+q+"%").all()
  :await env.DB.prepare("SELECT id,email,name,role,created_at,last_seen FROM users ORDER BY id DESC LIMIT 200").all();return json({items:r.results})}
async function setRole(req,env,u,id){const b=await body(req);const role=b&&b.role;if(!["student","editor","admin"].includes(role))return err("role");
  if(id===u.id&&role!=="admin")return err("self");await env.DB.prepare("UPDATE users SET role=? WHERE id=?").bind(role,id).run();await audit(env,u.id,"user.role",id+":"+role);return json({ok:true})}

async function importContent(req,env,u){const b=await body(req);if(!b)return err("bad_json");const now=Date.now(),st=[];
  if(b.reset){const n=await env.DB.prepare("SELECT COUNT(*) AS n FROM words").first();if(n.n&&!b.confirm)return err("not_empty",409);
    st.push(env.DB.prepare("DELETE FROM words"))}
  if(b.docs&&typeof b.docs==="object")for(const [k,v] of Object.entries(b.docs)){if(!DOCS_OK.includes(k))continue;const e=checkDoc(k,v);if(e)return err(e+":"+k);
    st.push(env.DB.prepare("INSERT INTO docs(name,body,updated_at,updated_by) VALUES(?,?,?,?) ON CONFLICT(name) DO UPDATE SET body=excluded.body,updated_at=excluded.updated_at,updated_by=excluded.updated_by").bind(k,JSON.stringify(v),now,u.id))}
  if(Array.isArray(b.dict_levels))st.push(env.DB.prepare("INSERT INTO meta(key,value) VALUES('dict_levels',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").bind(JSON.stringify(b.dict_levels)));
  if(Array.isArray(b.words)){if(b.words.length>1000)return err("too_large",413);
    for(const w of b.words){if(!Array.isArray(w)||!LEVELS_OK.includes(w[0])||!w[3]||!w[4])return err("word_shape");
      st.push(env.DB.prepare("INSERT INTO words(level,pos,gender,word,meaning,pron,ex_de,ex_ar,plural,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?)").bind(w[0],+w[1]||0,w[2]||"",w[3],w[4],w[5]||"",w[6]||"",w[7]||"",w[8]||"",now))}}
  if(st.length)await env.DB.batch(st);if(b.done){await bumpVersion(env);await audit(env,u.id,"import","content")}return json({ok:true,count:st.length})}

export async function onRequest(context){
  const {request:req,env}=context;const url=new URL(req.url);const p=url.pathname.replace(/^\/api\/?/,"").replace(/\/+$/,"");const m=req.method;
  try{
    if(!env.DB)return err("no_db",503);
    if(p==="health")return json({ok:true});
    if(p==="auth/register"&&m==="POST")return register(req,env);
    if(p==="auth/login"&&m==="POST")return login(req,env);
    if(p==="auth/logout"&&m==="POST")return logout(req,env);
    const u=await currentUser(req,env);if(!u)return err("auth",401);
    if(p==="me"&&m==="GET")return json({user:pub(u)});
    if(p==="me/password"&&m==="POST")return changePassword(req,env,u);
    if(p==="progress"&&m==="GET")return getProgress(env,u);
    if(p==="progress"&&m==="PUT")return putProgress(req,env,u);
    if(!p.startsWith("admin/"))return err("not_found",404);
    if(!["admin","editor"].includes(u.role))return err("forbidden",403);
    const a=p.slice(6),seg=a.split("/");
    if(a==="stats"&&m==="GET")return adminStats(env);
    if(a==="words"&&m==="GET")return listWords(url,env);
    if(a==="words"&&m==="POST")return createWord(req,env,u);
    if(seg[0]==="words"&&seg[1]){const id=+seg[1];if(m==="PUT")return updateWord(req,env,u,id);if(m==="DELETE")return deleteWord(env,u,id)}
    if(seg[0]==="docs"&&seg[1]){if(m==="GET")return getDoc(env,seg[1]);if(m==="PUT")return putDoc(req,env,u,seg[1])}
    if(u.role!=="admin")return err("forbidden",403);
    if(a==="users"&&m==="GET")return listUsers(url,env);
    if(seg[0]==="users"&&seg[1]&&m==="PUT")return setRole(req,env,u,+seg[1]);
    if(a==="import"&&m==="POST")return importContent(req,env,u);
    return err("not_found",404);
  }catch(e){return json({error:"server",detail:String(e&&e.message||e).slice(0,200)},500)}
}
