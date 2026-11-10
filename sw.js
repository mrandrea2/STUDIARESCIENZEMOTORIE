/* Service worker: rende il sito installabile e consultabile anche senza rete.
   Al primo avvio salva la pagina e tutti i file che index.html richiama
   (stile, script, lezioni, dati). Poi risponde subito dalla copia salvata
   e intanto la aggiorna in sottofondo: alla visita successiva vedi le novità.
   Se cambi molti file e vuoi forzare l'aggiornamento, aumenta VERSIONE. */
const VERSIONE = "ssm-v10";
const EXTRA = ["./", "index.html", "manifest.webmanifest", "assets/favicon.svg", "assets/icon-192.png", "assets/icon-512.png", "assets/icon-maskable-512.png", "assets/icon-180.png", "assets/logo-galilei.jpg", "acrosport.html", "assets/fonts/fonts.css", "assets/fonts/archivo-latin-wdth-normal.woff2", "assets/fonts/archivo-latin-ext-wdth-normal.woff2", "assets/fonts/oswald-latin-wght-normal.woff2", "assets/fonts/source-serif-4-latin-opsz-italic.woff2", "assets/fonts/atkinson-hyperlegible-latin-400-normal.woff2", "assets/fonts/atkinson-hyperlegible-latin-700-normal.woff2", "assets/fonts/inter-latin-wght-normal.woff2", "assets/fonts/source-serif-4-latin-opsz-normal.woff2"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSIONE);
    let files = EXTRA.slice();
    try {
      const html = await (await fetch("index.html", { cache: "no-cache" })).text();
      const found = [...html.matchAll(/(?:src|href)="([^"#:]+\.(?:js|css|jpg|png|svg|webmanifest))"/g)].map(m => m[1]);
      files = Array.from(new Set(files.concat(found)));
    } catch (err) { /* offline al primo avvio: si salva quello che si può */ }
    await Promise.all(files.map(f => cache.add(new Request(f, { cache: "no-cache" })).catch(() => null)));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== VERSIONE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin !== location.origin) return; /* video, PDF, modelli 3D: solo online */

  e.respondWith((async () => {
    const cache = await caches.open(VERSIONE);
    const key = req.mode === "navigate" ? "index.html" : req;
    const hit = await cache.match(key, { ignoreSearch: true });
    const net = fetch(req).then(r => { if (r.ok) cache.put(key, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const r = await net;
    return r || (req.mode === "navigate" ? cache.match("index.html") : Response.error());
  })());
});
