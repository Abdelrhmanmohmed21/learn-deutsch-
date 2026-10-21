// يحوّل ملفات المحتوى الحالية (data/*.js) إلى db/seed.sql لتعبئة قاعدة البيانات أول مرة.
// التشغيل:  node tools/build-seed.mjs
import fs from "node:fs";import vm from "node:vm";import path from "node:path";
const root=path.resolve(path.dirname(new URL(import.meta.url).pathname),"..");
const read=f=>fs.readFileSync(path.join(root,"data",f),"utf8");
const ctx={window:{}};vm.createContext(ctx);
const run=(code,expose)=>vm.runInContext(code+";\n"+expose,ctx);
run(read("dict.js"),"");const DICT=ctx.window.__DICT;
const LEVELS=run(read("levels.js"),"LEVELS");const THEMES=run(read("themes.js"),"THEMES");const VERBS=run(read("verbs.js"),"VERBS");
const GEX=run(read("grammar-ex.js"),"GEX");const TOPICS=run(read("topics.js"),"TOPICS");
run(read("content.js"),"0");const DIALOGS=vm.runInContext("DIALOGS",ctx),MOCK=vm.runInContext("MOCK",ctx);
const AR_ALIAS=run(read("aliases.js"),"AR_ALIAS");
const q=s=>"'"+String(s).replace(/'/g,"''")+"'";const now=Date.now();
const out=["-- أُنشئ تلقائيًا بواسطة tools/build-seed.mjs","DELETE FROM words;","DELETE FROM docs;","DELETE FROM meta WHERE key IN ('dict_levels','content_version');"];
const lv=[];
for(const D of DICT){lv.push({id:D.id,title:D.title});D.words.forEach((w,i)=>{out.push(`INSERT INTO words(level,pos,gender,word,meaning,pron,ex_de,ex_ar,plural,updated_at) VALUES(${q(D.id)},${i},${q(w[0]||"")},${q(w[1])},${q(w[2])},${q(w[3]||"")},${q(w[4]||"")},${q(w[5]||"")},${q(w[6]||"")},${now});`)})}
const docs={levels:LEVELS,themes:THEMES,verbs:VERBS,gex:GEX,topics:TOPICS,dialogs:DIALOGS,mock:MOCK,aliases:AR_ALIAS};
for(const [k,v] of Object.entries(docs))out.push(`INSERT INTO docs(name,body,updated_at) VALUES(${q(k)},${q(JSON.stringify(v))},${now});`);
out.push(`INSERT INTO meta(key,value) VALUES('dict_levels',${q(JSON.stringify(lv))});`);
out.push(`INSERT INTO meta(key,value) VALUES('content_version',${q(String(now))});`);
fs.writeFileSync(path.join(root,"db","seed.sql"),out.join("\n")+"\n");
console.log("seed.sql:",DICT.reduce((a,D)=>a+D.words.length,0),"words,",Object.keys(docs).length,"docs");
