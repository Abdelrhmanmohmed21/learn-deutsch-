/* يقدّم ملفات المحتوى (data/*.js) من قاعدة البيانات، عشان أي تعديل من لوحة التحكم يظهر في الموقع على طول.
   لو قاعدة البيانات لسه فاضية، بيرجع الملف الثابت الموجود في مجلد data. */
const MAP={"dict.js":"dict","levels.js":"levels","themes.js":"themes","verbs.js":"verbs","grammar-ex.js":"gex","topics.js":"topics","content.js":"content","aliases.js":"aliases"};
const VAR={levels:"LEVELS",themes:"THEMES",verbs:"VERBS",gex:"GEX",topics:"TOPICS"};
async function build(env,kind){
  if(kind==="dict"){const lv=JSON.parse((await env.DB.prepare("SELECT value FROM meta WHERE key='dict_levels'").first()||{value:"[]"}).value);
    const rows=(await env.DB.prepare("SELECT level,gender,word,meaning,pron,ex_de,ex_ar,plural FROM words ORDER BY level,pos,id").all()).results;
    if(!rows.length)return null;const by={};for(const r of rows)(by[r.level]=by[r.level]||[]).push([r.gender,r.word,r.meaning,r.pron,r.ex_de,r.ex_ar,r.plural]);
    const order=lv.map(x=>x.id).concat(Object.keys(by).filter(k=>!lv.some(x=>x.id===k)).sort());
    const D=order.filter(k=>by[k]).map(k=>({id:k,title:(lv.find(x=>x.id===k)||{}).title||("مفردات "+k),words:by[k]}));
    return "window.__DICT="+JSON.stringify(D)+";\n"}
  if(kind==="content"){const d=await env.DB.prepare("SELECT name,body FROM docs WHERE name IN ('dialogs','mock')").all();const o={};d.results.forEach(r=>o[r.name]=r.body);
    if(!o.dialogs||!o.mock)return null;return "const DIALOGS="+o.dialogs+";\nconst MOCK="+o.mock+";\n"}
  if(kind==="aliases"){const d=await env.DB.prepare("SELECT body FROM docs WHERE name='aliases'").first();return d?"const AR_ALIAS="+d.body+";\n":null}
  const d=await env.DB.prepare("SELECT body FROM docs WHERE name=?").bind(kind).first();return d?"const "+VAR[kind]+"="+d.body+";\n":null}
export async function onRequest(context){
  const {request,env,params}=context;const kind=MAP[params.file];
  if(!kind||!env.DB)return context.next();
  try{
    const ver=(await env.DB.prepare("SELECT value FROM meta WHERE key='content_version'").first()||{}).value;if(!ver)return context.next();
    const etag=`"${kind}-${ver}"`;
    if(request.headers.get("If-None-Match")===etag)return new Response(null,{status:304,headers:{ETag:etag}});
    const cache=typeof caches!=="undefined"?caches.default:null;const key=new Request(new URL("/__data/"+kind+"/"+ver,request.url).toString());
    const H={"Content-Type":"application/javascript; charset=utf-8","Cache-Control":"public, max-age=0, must-revalidate",ETag:etag};
    if(cache){const hit=await cache.match(key);if(hit)return new Response(hit.body,{headers:H})}
    const js=await build(env,kind);if(js===null)return context.next();
    if(cache)context.waitUntil(cache.put(key,new Response(js,{headers:{"Content-Type":"application/javascript; charset=utf-8","Cache-Control":"public, max-age=604800"}})));
    return new Response(js,{headers:H});
  }catch(e){return context.next()}
}
