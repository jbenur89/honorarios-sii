/*
 * sw.js — Service Worker
 * MyS Capacitación · Calculadora Honorarios SII
 *
 * Estrategia: Cache First con fallback a red.
 * Al instalar, almacena todos los assets en cache.
 * En versiones nuevas, el cache se actualiza automáticamente.
 *
 * Sin dependencias externas. Sin datos de usuario almacenados.
 */

"use strict";

// Incrementar CACHE_VERSION al publicar cambios
const CACHE_VERSION = "mys-honorarios-v2.0";

const ASSETS_TO_CACHE = [
  "./index.html",
  "./manifest.json",
  "./icon-192.svg",
  "./icon-512.svg"
];

/* ---- Install: pre-cachear todos los assets ---- */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting()) // activar inmediatamente
  );
});

/* ---- Activate: limpiar caches de versiones anteriores ---- */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

/* ---- Fetch: Cache First, fallback a red ---- */
self.addEventListener("fetch", event => {
  // Solo interceptar requests GET al mismo origen
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        // No está en cache: intentar red
        return fetch(event.request)
          .then(response => {
            // Solo cachear responses válidas
            if (!response || response.status !== 200 || response.type !== "basic") {
              return response;
            }
            const toCache = response.clone();
            caches.open(CACHE_VERSION)
              .then(cache => cache.put(event.request, toCache));
            return response;
          })
          .catch(() => {
            // Sin red y sin cache: no hay fallback para este recurso
            return new Response("Recurso no disponible offline.", {
              status: 503,
              statusText: "Service Unavailable"
            });
          });
      })
  );
});
