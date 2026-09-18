self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Prázdný fetch listener stačí k tomu, aby PWA splnilo podmínku pro instalaci
  event.respondWith(fetch(event.request).catch(() => {
    return caches.match(event.request);
  }));
});
