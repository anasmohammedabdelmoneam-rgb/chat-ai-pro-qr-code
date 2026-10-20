const CACHE_NAME = 'nebulachat-nz87-v1792436607039';
const PRECACHE = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;
    // Never intercept same-origin API/file-proxy calls: the catch-all below
    // caches GET responses (stale data after network blips) and cache.put on
    // POSTs throws. APIs are same-origin since the adblock fix; /whacka-file/
    // always was. The SW's job is static assets + navigations only.
    if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/whacka-file/')) return;

    if (event.request.mode === 'navigate' || event.request.destination === 'document') {
        event.respondWith(
            fetch(event.request)
            .then(res => {
                // Only cache a real page. A navigation fetch also resolves for
                // errors and — since path deep links redirect to their hash route —
                // for opaque redirects, neither of which is a shell worth replaying
                // offline (cache.put on an opaque redirect throws besides).
                if (res.ok) {
                    const clone = res.clone();
                    caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
                }
                return res;
            })
            // Offline: exact cached match first, then the cached app shell — an
            // uncached deep link (e.g. a push-notification tap to /orders) should
            // boot the SPA, not the browser's error page. Mirrors the Worker's
            // online SPA fallback for dotless paths.
            .catch(() => caches.match(event.request).then(r => r || caches.match('/index.html')))
        );
        return;
    }

    // Only successful responses enter the cache (0928): a transient 404/5xx for
    // a hashed chunk used to be stored until the next publish rotated the cache
    // name — a permanent white screen for that one visitor.
    if (url.pathname.startsWith('/assets/')) {
        event.respondWith(
            caches.match(event.request).then(cached => {
                if (cached) return cached;
                return fetch(event.request).then(res => {
                    if (res.ok) {
                        const clone = res.clone();
                        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
                    }
                    return res;
                });
            })
        );
        return;
    }

    event.respondWith(
        fetch(event.request)
        .then(res => {
            if (res.ok) {
                const clone = res.clone();
                caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
            }
            return res;
        })
        .catch(() => caches.match(event.request))
    );
});

self.addEventListener('push', event => {
    if (!event.data) return;
    try {
        const payload = event.data.json();
        const options = {
            body: payload.body || '',
            icon: payload.icon || '/icon-192.png',
            badge: '/icon-192.png',
            data: payload.data || {},
        };
        event.waitUntil(
            self.registration.showNotification(payload.title || 'Notification', options)
        );
        if (typeof payload.badge === 'number' && self.navigator.setAppBadge) {
            event.waitUntil(self.navigator.setAppBadge(payload.badge).catch(() => {}));
        }
        event.waitUntil(
            self.clients.matchAll({
                type: 'window'
            }).then(clients => {
                clients.forEach(client => {
                    client.postMessage({
                        type: 'PUSH_RECEIVED',
                        payload
                    });
                });
            })
        );
    } catch (err) {
        console.error('[sw] Push event error:', err);
    }
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    if (self.navigator.clearAppBadge) {
        self.navigator.clearAppBadge().catch(() => {});
    }
    const url = event.notification.data ? .url || '/';
    event.waitUntil(
        self.clients.matchAll({
            type: 'window'
        }).then(clients => {
            for (const client of clients) {
                if (client.url.includes(self.location.origin) && 'focus' in client) {
                    client.navigate(url);
                    return client.focus();
                }
            }
            return self.clients.openWindow(url);
        })
    );
});