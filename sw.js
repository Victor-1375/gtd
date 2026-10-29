const CACHE_NAME = 'gtd-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pasa las peticiones directamente a la red para mantener sincronización continua con GitHub
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
