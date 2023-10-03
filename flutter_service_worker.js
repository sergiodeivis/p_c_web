'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d2e125ae5c1950a66bfaa23fdd1dbccf",
"assets/assets/icon/AddressProfileIcon.png": "f9f9004192b48949c174c588f48fafa7",
"assets/assets/icon/BackIcon.png": "b292f226dcdd04dbe276a30fa519c119",
"assets/assets/icon/CupomIcon.png": "91d7c75000bfbe88ffbd5fd7ffde4969",
"assets/assets/icon/DoctorIcon.png": "ecb2e7e64a156a4c313e5fff510de75e",
"assets/assets/icon/DoctorProfileIcon.png": "f02756faf16048cb2cece16d9272ec8b",
"assets/assets/icon/DocumentsProfileIcon.png": "38a3fb84436809054a6975870f019081",
"assets/assets/icon/EditIcon.png": "28f1e58a9bb8f776e6d06926fb6dd0bb",
"assets/assets/icon/FavoritesProfileIcon.png": "c763d0fd3a4548c88e864dcf791b83fe",
"assets/assets/icon/HomeIcon.png": "d68fa34ad89665a0406099eec2b7e8b9",
"assets/assets/icon/OrderIcon.png": "83028022f85579a9113348fe9eac476b",
"assets/assets/icon/OrderProfileIcon.png": "fc28bef00d9106e7cef7ac648d369725",
"assets/assets/icon/PaymentProfileIcon.png": "13754e569e12aac83bbfaf78de97d176",
"assets/assets/icon/ProfileIcon.png": "12786fca048a0c7fe4c545b58f9cb2c7",
"assets/assets/icon/Search.png": "a1e514829cf54f7fd90fd0a0eaa581ee",
"assets/assets/icon/ShoppingIcon.png": "87d1f22ac87b316e6c0f91bb25f4409c",
"assets/assets/icon/UserIcon.png": "c7e8487fb6460a3cdb2f6c9a1ac2c6b1",
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
"assets/assets/images/end.png": "53067c3529ae14d680c0e7dcde82ceb2",
"assets/assets/images/form.png": "d13c84af104a343f65e17aca97f5a2b6",
"assets/assets/images/fruit-puch-gummies-out-1.jpg": "a3536fd28e2ec05d4c3f3a218acf245d",
"assets/assets/images/hibiscus-berry-out.jpg": "e9cd55a099cf81127a83e12b6906ba8b",
"assets/assets/images/ident.png": "d1aadc389de142ec3747f624d35ce142",
"assets/assets/images/image001.jpg": "ff51f008fc29c5b5e159b48eabac5ae2",
"assets/assets/images/img.png": "86fff493fd18e51c625ccb1d0eb0cd99",
"assets/assets/images/img_1.png": "5e365a8f477bf1686202483aeefc25c7",
"assets/assets/images/MAX_6385-1-min-scaled-e1630620356491.jpg": "4f36b9b29d9919ed0ca659eb0e5063af",
"assets/assets/images/receita.png": "d1e331ea35370f67dc433a7196b9c64f",
"assets/assets/images/strawberry-gummies-out.jpg": "cea28b2d5b184c0060fad23b4711b488",
"assets/assets/images/tinctures-file-attrum.png": "2bd4918d6603db937203ae31682085e9",
"assets/assets/images/Watermelon-Gummy-Label-label-mockup-1.jpg": "a6b3b84c7d8d5452e81d3be3178188c7",
"assets/assets/loading/1.png": "705f3c59e9ffbd8a6ac2f3ff8ebb3365",
"assets/assets/loading/10.png": "2f6e04bfe20930a1e37e2e5bf0170fa4",
"assets/assets/loading/11.png": "0f368e3c916f76e89d3d5334ee47ff32",
"assets/assets/loading/12.png": "2b71f9261ad9dfe4948a339ed96ba2c4",
"assets/assets/loading/2.png": "f99d296515be4cc6a73c126b3a890178",
"assets/assets/loading/3.png": "46ee19d4653bff54e2c04c33ea039933",
"assets/assets/loading/4.png": "f3787803c0092f17b4495d5c175b1075",
"assets/assets/loading/5.png": "b934d055d98cbf024b3159734564020c",
"assets/assets/loading/6.png": "263416ccc911167661302cab19839765",
"assets/assets/loading/7.png": "589942b7f5a54f73c07bdc7a60369afe",
"assets/assets/loading/8.png": "8eef9c222ab7062644c4264350e2d4e6",
"assets/assets/loading/9.png": "0a17807a4366aa0bd4d4803820aef7ea",
"assets/assets/test/comprovante.jpg": "cb923ae2f8fb83eb951f652ac7f42eb2",
"assets/assets/test/receita.jpg": "1907f031ba861b2181337fae8adc053a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7874c05820dd856a5f03feae10fab565",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
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
"index.html": "12f1ce7e5c96f8be22f62620d01ac756",
"/": "12f1ce7e5c96f8be22f62620d01ac756",
"index.html.bak": "a11436680f9344033f228808a4a27fdd",
"main.dart.js": "852528bc5f794d47b17dd42ec6dbd7c0",
"manifest.json": "e640841e768177b4639d23ba8eb59f97",
"version.json": "99eeaccf58ea55e48740054eed75bba2"
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
