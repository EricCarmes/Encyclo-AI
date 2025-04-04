const CACHE_NAME = "notre-dame-audio-v1";
const FILES_TO_CACHE = [
  "index.html",
  "AudioBook_NotreDame.html",
  "style.css",
  "lecteur.js",
  "manifest.json",
  "Couverture_resized.jpg",
  "logo.jpg",
  "mentions_legales.mp3",
  "chapitre1.mp3",
  "chapitre2.mp3",
  "chapitre3.mp3",
  "chapitre4.mp3",
  "chapitre5.mp3",
  "chapitre6.mp3",
  "chapitre7.mp3",
  "chapitre8.mp3",
  "chapitre9.mp3",
  "chapitre10.mp3",
  "chapitre11.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
