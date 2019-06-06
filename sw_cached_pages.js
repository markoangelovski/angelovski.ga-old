const cacheName = "v1";

const cacheAssets = [
    "app/bundle.min.js",
    "static/site.webmanifest",
    "style/main.min.css",
    "bookmarker.html",
    "bundle.js",
    "favicon.ico",
    "index.html",
    "main.css",
    "main.js",
    "producter.html"
];

// Call install Event
self.addEventListener("install", e => {
    console.log("Service Worker: Installed");

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log("Service Worker: Caching files");
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

// Call Actvate event
self.addEventListener("activate", e => {
    console.log("Service Worker: Installed");
    // Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log("Service Worker: Clearing old cache");
                        return caches.delete(cache);
                    };
                })
            )
        })
    );
});

// Call fetch event
self.addEventListener("fetch", e => {
    console.log("Service Worker: Fetching");
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});