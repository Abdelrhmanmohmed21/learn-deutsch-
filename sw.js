/* Service worker: يخلّي الموقع يفتح بسرعة ويشتغل من غير نت بعد أول زيارة.
   لما ترفع تحديث، غيّر رقم VERSION عشان الكاش القديم يتمسح. */
const VERSION="v1";
const CACHE="almani-"+VERSION;
const CORE=["./","index.html","config.js","manifest.webmanifest","data/levels.js","data/dict.js","data/themes.js","data/verbs.js","data/grammar-ex.js","icons/icon-192.png","icons/favicon.svg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("almani-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);
  const sameOrigin=url.origin===location.origin;
  const isFont=/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if(!sameOrigin&&!isFont)return;
  if(req.mode==="navigate"){ // الصفحة نفسها: من النت الأول، ولو مفيش نت من الكاش
    e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put("index.html",cp));return r}).catch(()=>caches.match("index.html")));return}
  // الباقي: من الكاش فورًا، وبيتحدّث في الخلفية
  e.respondWith(caches.open(CACHE).then(c=>c.match(req).then(hit=>{const net=fetch(req).then(r=>{if(r&&(r.ok||r.type==="opaque"))c.put(req,r.clone());return r}).catch(()=>hit);return hit||net})));
});
