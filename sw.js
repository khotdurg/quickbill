const CACHE = 'quickbill-v1';
const ASSETS = ['./index.html','./manifest.json','./config.js','./icons/icon-192.png','./icons/icon-512.png'];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e=>{
  // Never cache Google API / Drive calls — always go to network
  if(e.request.url.includes('googleapis.com') || e.request.url.includes('accounts.google.com')){
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached=> cached || fetch(e.request).then(resp=>{
      const copy = resp.clone();
      caches.open(CACHE).then(c=>c.put(e.request, copy));
      return resp;
    }).catch(()=> cached))
  );
});
