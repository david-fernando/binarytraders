const cacheName = 'cache-v2';

// Arquivos para armazenar em cache
const filesToCache = [
  '/',
  '/index.html',
  '/js',
  '/css'
];


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});