self.addEventListener("install", (event) => {
  console.log("🔥 Service Worker installed");
  event.waitUntil(
    caches.open("fire-reminder-cache").then((cache) => cache.addAll(["/"]))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});


