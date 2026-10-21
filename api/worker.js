/* Cloudflare Worker: وسيط بين الموقع و Claude API.
   المفتاح السري بيفضل هنا على السيرفر ومبيوصلش لمتصفح الطالب أبدًا.
   المتغيرات المطلوبة في إعدادات الـ Worker:
     ANTHROPIC_API_KEY  (Secret)  مفتاح الـ API بتاعك
     ALLOWED_ORIGIN     (Variable) رابط موقعك بالظبط، مثلًا https://almani.com
   اختياري: MODEL_QUICK و MODEL_DEFAULT لو حبيت تغيّر الموديلات. */
const MAX_BODY=6_000_000, MAX_MESSAGES=40, MAX_TOKENS=1500;
const hits=new Map(); // حد بسيط لكل IP (تقريبي، لكل نسخة من الـ Worker)
function limited(ip){const now=Date.now(),win=60_000,max=20;const a=(hits.get(ip)||[]).filter(t=>now-t<win);a.push(now);hits.set(ip,a);return a.length>max}
function cors(origin,env){return {"Access-Control-Allow-Origin":origin===env.ALLOWED_ORIGIN?origin:env.ALLOWED_ORIGIN,"Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type","Vary":"Origin"}}
function json(obj,status,h){return new Response(JSON.stringify(obj),{status,headers:{...h,"Content-Type":"application/json"}})}
export default {
  async fetch(req,env){
    const origin=req.headers.get("Origin")||"",h=cors(origin,env);
    if(req.method==="OPTIONS")return new Response(null,{status:204,headers:h});
    if(req.method!=="POST")return json({error:"method"},405,h);
    if(origin!==env.ALLOWED_ORIGIN)return json({error:"origin"},403,h);
    if(limited(req.headers.get("CF-Connecting-IP")||"x"))return json({error:"rate"},429,h);
    const len=+req.headers.get("Content-Length")||0;if(len>MAX_BODY)return json({error:"too_large"},413,h);
    let body;try{body=await req.json()}catch(e){return json({error:"bad_json"},400,h)}
    const msgs=Array.isArray(body.messages)?body.messages.slice(-MAX_MESSAGES):[];
    if(!msgs.length)return json({error:"no_messages"},400,h);
    const model=body.tier==="quick"?(env.MODEL_QUICK||"claude-haiku-5-5"):(env.MODEL_DEFAULT||"claude-sonnet-5-5");
    const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"x-api-key":env.ANTHROPIC_API_KEY,"anthropic-version":"2023-06-01","content-type":"application/json"},
      body:JSON.stringify({model,max_tokens:MAX_TOKENS,messages:msgs,...(body.json?{system:"Reply with ONLY valid JSON. No markdown, no explanations."}:{})})});
    if(r.status===429)return json({error:"rate"},429,h);
    if(!r.ok)return json({error:"upstream",status:r.status},502,h);
    const data=await r.json();
    const text=(data.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("\n");
    return json({text},200,h);
  }
};
