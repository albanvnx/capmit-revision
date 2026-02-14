// Service Worker pour PWA - Fonctionnement hors ligne et notifications

const CACHE_NAME = 'revision-cap-v2.3';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/questions.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
  // Note: Images seront mises en cache dynamiquement via le fetch handler
];

// Installation du Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Stratégie Cache First, Network Fallback
self.addEventListener('fetch', event => {
  // Cache dynamique spécial pour les images
  if (event.request.url.includes('/images/')) {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request).then(fetchResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        }).catch(() => {
          // En cas d'échec réseau, retourner une réponse vide
          return new Response('Image non disponible', { status: 503 });
        });
      })
    );
  } else {
    // Stratégie normale pour les autres ressources
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  }
});

// Gestion des notifications push
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Vous avez des révisions à faire !',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'revision-reminder',
    requireInteraction: false,
    data: {
      url: '/'
    },
    actions: [
      {
        action: 'open',
        title: 'Commencer',
        icon: '/icon-192.png'
      },
      {
        action: 'close',
        title: 'Plus tard'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('🎓 Révision CAP M.I.T FC', options)
  );
});

// Gestion des clics sur les notifications
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Synchronisation en arrière-plan
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

function syncData() {
  // Synchroniser les données si nécessaire
  return Promise.resolve();
}
