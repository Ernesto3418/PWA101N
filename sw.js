const CACHE_NAME='v1_cache_bch_pwa';

var urlsToCache=[
    './',
    'css/bootstrap.min.css ',
    'css/style.css',
    'img/16 (1).jpg',
    'img/32 (1).jpg',
    'img/64 (1).jpg',
    'img/94 (1).png',
    'img/icono-16.png ',
    'img/icono-32.png ',
    'img/icono-64.png ',
    'img/icono-96.png ',
    'img/icono-128.png ',
    'img/icono-144.png ',
    'img/icono-192.png ',
    'img/icono-256.png ',
    'img/icono-384.png ',
    'img/icono-512.png ',
    'img/icono-1024.png',
    'img/Sin título.png',
    'img/testimonial-1.jpg',
    'img/testimonial-2.jpg',
    'img/user.jpg',
    'img/Tamaño original/7ac1c22baae379c75a5379f31325f38d.jpg ',
    'img/Tamaño original/16.jpg ',
    'img/Tamaño original/16.png ',
    'img/Tamaño original/32.jpg ',
    'img/Tamaño original/32.png ',
    'img/Tamaño original/64.jpg ',
    'img/Tamaño original/94.png ',
    'img/Tamaño original/icono.png ',
    'img/Tamaño original/nose.jpg',
    'js/main.js',
    'lib/chart/chart.min.js',
    'lib/easing/easing.js',
    'lib/easing/easing.min.js',
    'lib/owlcarousel/assets/ajax-loader.gif ',
    'lib/owlcarousel/assets/owl.carousel.css ',
    'lib/owlcarousel/assets/owl.carousel.min.css ',
    'lib/owlcarousel/assets/owl.theme.default.css ',
    'lib/owlcarousel/assets/owl.theme.default.min.css ',
    'lib/owlcarousel/assets/owl.theme.green.css ',
    'lib/owlcarousel/assets/owl.theme.green.min.css ',
    'lib/owlcarousel/assets/owl.video.play.png',
    'lib/owlcarousel/LICENSE ',
    'lib/owlcarousel/owl.carousel.js ',
    'lib/owlcarousel/owl.carousel.min.js',
    'lib/tempusdominus/css/tempusdominus-bootstrap-4.css ',
    'lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css',
    'lib/tempusdominus/js/moment-timezone.min.js ',
    'lib/tempusdominus/js/moment.min.js ',
    'lib/tempusdominus/js/tempusdominus-bootstrap-4.js ',
    'lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js',
    'lib/waypoints/links.php ',
    'lib/waypoints/waypoints.min.js',
    'scss/bootstrap/scss/_accordion.scss ',
    'scss/bootstrap/scss/_alert.scss ',
    'scss/bootstrap/scss/_badge.scss ',
    'scss/bootstrap/scss/_breadcrumb.scss ',
    'scss/bootstrap/scss/_button-group.scss ',
    'scss/bootstrap/scss/_buttons.scss ',
    'scss/bootstrap/scss/_card.scss ',
    'scss/bootstrap/scss/_carousel.scss ',
    'scss/bootstrap/scss/_close.scss ',
    'scss/bootstrap/scss/_containers.scss ',
    'scss/bootstrap/scss/_dropdown.scss ',
    'scss/bootstrap/scss/_forms.scss ',
    'scss/bootstrap/scss/_functions.scss ',
    'scss/bootstrap/scss/_grid.scss ',
    'scss/bootstrap/scss/_helpers.scss ',
    'scss/bootstrap/scss/_images.scss ',
    'scss/bootstrap/scss/_list-group.scss ',
    'scss/bootstrap/scss/_mixins.scss ',
    'scss/bootstrap/scss/_modal.scss ',
    'scss/bootstrap/scss/_nav.scss ',
    'scss/bootstrap/scss/_navbar.scss ',
    'scss/bootstrap/scss/_offcanvas.scss ',
    'scss/bootstrap/scss/_pagination.scss ',
    'scss/bootstrap/scss/_popover.scss ',
    'scss/bootstrap/scss/_progress.scss ',
    'scss/bootstrap/scss/_reboot.scss ',
    'scss/bootstrap/scss/_root.scss ',
    'scss/bootstrap/scss/_spinners.scss ',
    'scss/bootstrap/scss/_tables.scss ',
    'scss/bootstrap/scss/_toasts.scss ',
    'scss/bootstrap/scss/_tooltip.scss ',
    'scss/bootstrap/scss/_transitions.scss ',
    'scss/bootstrap/scss/_type.scss ',
    'scss/bootstrap/scss/_utilities.scss ',
    'scss/bootstrap/scss/_variables.scss ',
    'scss/bootstrap/scss/bootstrap-grid.scss ',
    'scss/bootstrap/scss/bootstrap-reboot.scss ',
    'scss/bootstrap/scss/bootstrap-utilities.scss',
    'scss/bootstrap/scss/forms/_floating-labels.scss ',
    'scss/bootstrap/scss/forms/_form-check.scss ',
    'scss/bootstrap/scss/forms/_form-control.scss ',
    'scss/bootstrap/scss/forms/_form-range.scss ',
    'scss/bootstrap/scss/forms/_form-select.scss ',
    'scss/bootstrap/scss/forms/_form-text.scss ',
    'scss/bootstrap/scss/forms/_input-group.scss ',
    'scss/bootstrap/scss/forms/_labels.scss ',
    'scss/bootstrap/scss/forms/_validation.scss',
    'scss/bootstrap/scss/helpers/_clearfix.scss ',
    'scss/bootstrap/scss/helpers/_colored-links.scss ',
    'scss/bootstrap/scss/helpers/_position.scss ',
    'scss/bootstrap/scss/helpers/_ratio.scss ',
    'scss/bootstrap/scss/helpers/_stretched-link.scss ',
    'scss/bootstrap/scss/helpers/_text-truncation.scss ',
    'scss/bootstrap/scss/helpers/_visually-hidden.scss',
    'scss/bootstrap/scss/mixins/_alert.scss ',
    'scss/bootstrap/scss/mixins/_border-radius.scss ',
    'scss/bootstrap/scss/mixins/_box-shadow.scss ',
    'scss/bootstrap/scss/mixins/_breakpoints.scss ',
    'scss/bootstrap/scss/mixins/_buttons.scss ',
    'scss/bootstrap/scss/mixins/_caret.scss ',
    'scss/bootstrap/scss/mixins/_clearfix.scss ',
    'scss/bootstrap/scss/mixins/_color-scheme.scss ',
    'scss/bootstrap/scss/mixins/_container.scss ',
    'scss/bootstrap/scss/mixins/_deprecate.scss ',
    'scss/bootstrap/scss/mixins/_forms.scss ',
    'scss/bootstrap/scss/mixins/_gradients.scss ',
    'scss/bootstrap/scss/mixins/_grid.scss ',
    'scss/bootstrap/scss/mixins/_image.scss ',
    'scss/bootstrap/scss/mixins/_list-group.scss ',
    'scss/bootstrap/scss/mixins/_lists.scss ',
    'scss/bootstrap/scss/mixins/_pagination.scss ',
    'scss/bootstrap/scss/mixins/_reset-text.scss ',
    'scss/bootstrap/scss/mixins/_resize.scss ',
    'scss/bootstrap/scss/mixins/_table-variants.scss ',
    'scss/bootstrap/scss/mixins/_text-truncate.scss ',
    'scss/bootstrap/scss/mixins/_transition.scss ',
    'scss/bootstrap/scss/mixins/_utilities.scss ',
    'scss/bootstrap/scss/mixins/_visually-hidden.scss',
    'scss/bootstrap/scss/utilities/_api.scss',
    'scss/bootstrap/scss/vendor/_rfs.scss',
];

// Evento de instalación del Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                // Agrega todas las URL al caché
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                // Finaliza la instalación y activa el Service Worker
                self.skipWaiting();
            })
            .catch(error => {
                console.error('Error durante la instalación:', error);
            })
    );
});

// Evento de activación del Service Worker
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        // Elimina cualquier caché que no esté en la lista blanca
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                // Toma el control de todas las páginas abiertas
                self.clients.claim();
            })
    );
});

// Evento de solicitud (fetch) del Service Worker
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Devuelve la respuesta del caché si está disponible, de lo contrario, realiza la solicitud
                return response || fetch(event.request);
            })
    );
});