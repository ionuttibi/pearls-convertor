// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static-cache').then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json',
                './icon-192.png',
                './icon-512.png'
                // Add other files like CSS, JS if separate
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
