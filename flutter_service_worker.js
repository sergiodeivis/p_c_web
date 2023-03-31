'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8e43a255f0add2d5e1bf7bc9dcacbb3f",
"assets/assets/images/cbd-full-spectrum-tincture-10000mg.jpg": "d3cc736dcf44a1190cace6b89e140861",
"assets/assets/images/cbd-natural-tintcture-3000mg.jpg": "20f79f1816cedbc434e0b77b3e8239a3",
"assets/assets/images/cbd-pain-cream-menthol.jpg": "7621d4ee1f3ac8a619f8a4d1156b8c8d",
"assets/assets/images/cbd-pain-stick-bundle.jpg": "176e8e24767a38b51706263a8fa52029",
"assets/assets/images/cbd-peppermint-tincture-6000mg.jpg": "d30838c22787560a82322c7152cdfe72",
"assets/assets/images/cbd-peppermint-tintcture-1000mg.jpg": "3ddb0fd236d4ad5a96e26d783e022cdf",
"assets/assets/images/cbd-peppermint-tintcture-3000mg.jpg": "e106da6f16f5c178a22547d321c1a8e5",
"assets/assets/images/cbd-salve-pain-management.jpg": "faea1fa780383270dc8c25833302117b",
"assets/assets/images/cbda-cbga-out.jpg": "6fe7a114bee71c8ad75f8253069a824b",
"assets/assets/images/cdb-menthol-lotion.jpg": "c072cce11904b3e80117683e295478d8",
"assets/assets/images/fruit-puch-gummies-out-1.jpg": "a3536fd28e2ec05d4c3f3a218acf245d",
"assets/assets/images/hibiscus-berry-out.jpg": "e9cd55a099cf81127a83e12b6906ba8b",
"assets/assets/images/image001.jpg": "ff51f008fc29c5b5e159b48eabac5ae2",
"assets/assets/images/img.png": "86fff493fd18e51c625ccb1d0eb0cd99",
"assets/assets/images/img_1.png": "5e365a8f477bf1686202483aeefc25c7",
"assets/assets/images/MAX_6385-1-min-scaled-e1630620356491.jpg": "4f36b9b29d9919ed0ca659eb0e5063af",
"assets/assets/images/strawberry-gummies-out.jpg": "cea28b2d5b184c0060fad23b4711b488",
"assets/assets/images/tinctures-file-attrum.png": "2bd4918d6603db937203ae31682085e9",
"assets/assets/images/Watermelon-Gummy-Label-label-mockup-1.jpg": "a6b3b84c7d8d5452e81d3be3178188c7",
"assets/assets/test/comprovante.jpg": "cb923ae2f8fb83eb951f652ac7f42eb2",
"assets/assets/test/receita.jpg": "1907f031ba861b2181337fae8adc053a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "17fdbbc104c7f1021bf40da2b757ecb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6432f96dd9eee56ad86a2e91e9a4fceb",
"/": "6432f96dd9eee56ad86a2e91e9a4fceb",
"index.html.bak": "2dc79e0799f927a15f529d962656ca60",
"main.dart.js": "e1b5e6b7dd132c021717b83fd5362916",
"manifest.json": "e640841e768177b4639d23ba8eb59f97",
"version.json": "4edc33868f4b57f332e264f1a9051d8c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
