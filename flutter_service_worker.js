'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "68646ed17b40cb4e11569b5eb68032b2",
"assets/AssetManifest.bin.json": "fd7a2c0dfe568dd900a94fc2b791c673",
"assets/AssetManifest.json": "fd3ef4f8c3d24dd8db3b614dea873ffc",
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
"assets/assets/test/teste.pdf": "d5b798be427f27236fce9c2b8da6a144",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4f3313c7f7b50a674bdddd1fb866e0dc",
"assets/NOTICES": "afee8d44e91765b581171b3470db12d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "992ac01dfbc66e5cba582635de6a93cc",
"/": "992ac01dfbc66e5cba582635de6a93cc",
"index.html.bak": "a1ecc0eecc1e7ea78f22154b1b88c27f",
"main.dart.js": "41fcc3b991d28b4169d4c42842f7b682",
"manifest.json": "e640841e768177b4639d23ba8eb59f97",
"version.json": "99eeaccf58ea55e48740054eed75bba2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
