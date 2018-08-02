console.log('Hello from sw.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');




if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

/*precache index, offline, and issue table page*/
workbox.precaching.precacheAndRoute([
    '/index.html',
    '/',
    'offline.html',
    'issue-table.html',
    'table_STEP3.html'
    
    
]);

/*preserve the style when offline*/
 workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  }),
); 

 workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate(),
); 

 workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
); 

console.log("GG");

/*add offline page*/
self.addEventListener('fetch',event=>{
    event.respondWith(
    caches.match(event.request).then(response=>response||fetch(event.request)).catch(()=>{
        if(event.request.mode=='navigate'){return caches.match('/offline.html');}
    })
    );
});
