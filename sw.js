/* Service worker: يخلّي الموقع يشتغل من غير نت بعد أول زيارة.
   دايمًا بيجيب أحدث نسخة من السيرفر الأول، ولو مفيش نت بيفتح آخر نسخة محفوظة.
   لما ترفع تحديث، غيّر رقم VERSION. */
const VERSION="v45";
const CACHE="almani-"+VERSION;
const CORE=["./","index.html","config.js","manifest.webmanifest","data/levels.js","data/dict.js","data/themes.js","data/verbs.js","data/grammar-ex.js","data/topics.js","data/content.js","data/aliases.js","icons/icon-192.png","icons/favicon.svg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(CORE.map(u=>fetch(new Request(u,{cache:"reload"})).then(r=>{if(r.ok)return c.put(u,r)}).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("almani-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);
  const isFont=/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if(isFont){e.respondWith(caches.open(CACHE).then(c=>c.match(req).then(hit=>hit||fetch(req).then(r=>{if(r&&(r.ok||r.type==="opaque"))c.put(req,r.clone());return r}))));return}
  if(url.origin!==location.origin)return;
  if(url.pathname.startsWith("/api/")||url.pathname.startsWith("/admin"))return; // بيانات الحساب ولوحة التحكم دائمًا من الخادم
  // من السيرفر الأول دايمًا (أحدث نسخة)، ولو مفيش نت من المحفوظ
  const key=req.mode==="navigate"?"index.html":req;
  e.respondWith(fetch(req.url,{cache:"no-cache",credentials:"same-origin"}).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put(key,cp))}return r}).catch(()=>caches.match(key,{ignoreSearch:true}).then(h=>h||caches.match("index.html"))));
});
