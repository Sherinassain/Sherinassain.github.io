'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin.json": "9af83a2ee421a3fb09da83740fb3c327",
"assets/assets/images/img_passport_size.jpg": "d923d2283eb1b2cbab82ef0d7a77c5a2",
"assets/assets/images/background1.jpg": "951245d732542f7ae8fe4ba8c727c21a",
"assets/assets/images/img_indian_flag.svg": "0fc433bfe24a5fac6a6661624094131c",
"assets/assets/fonts/SassyFrass-Regular.ttf": "57eec450184e35fd8c76441054c0e2b7",
"assets/assets/fonts/shabnam_fd/Shabnam-FD.ttf": "3f7a15d71d0893f4560782b45cf7a97d",
"assets/assets/fonts/shabnam_fd/Shabnam-Light-FD.ttf": "b603c4f303f98ba3ed23aa373cad20d0",
"assets/assets/fonts/shabnam_fd/Shabnam-Bold-FD.ttf": "f5337a2043ef5fdc49e0b5d2c10fc27b",
"assets/assets/fonts/shabnam/Shabnam-Bold.ttf": "b7f6b7386ee3eb72d8d709f895e7c912",
"assets/assets/fonts/shabnam/Shabnam-Light.ttf": "ecf1c57199b540fb02260ccbe1acc3f1",
"assets/assets/fonts/shabnam/Shabnam.ttf": "69fc335794c0fcfd006f49066c650505",
"assets/assets/icons/english_flag_rounded.svg": "db68882cbf4beac3f3ee3923f1a91b82",
"assets/assets/icons/Loading%2520animation.json": "ab42cdaf6267cd3a7c84d02fc7b4265d",
"assets/assets/icons/linkedin.svg": "17d8ef4edcd1e181ec2508d9bd589bca",
"assets/assets/icons/telegram.svg": "b4fb41c46f8d7f8add6ca3b2488ae9b6",
"assets/assets/icons/Appicon.png": "b92ff9637837644265a7e993f1858923",
"assets/assets/icons/upwork.svg": "a5fc9f36f26e8fc283b84a07c81e2688",
"assets/assets/icons/persian_flag_rounded.svg": "bb442fdf117d8a01a7f4ae4b9995dbf6",
"assets/assets/icons/instagram.svg": "b6c744edbbd685bced0fe1f69d0a0e89",
"assets/assets/icons/img_indian_flag_rounded.svg": "031e5553c70987e84b2ee4fbb4b80f35",
"assets/assets/icons/fiverr.svg": "48f8baae154ef580fb9acf8efc04ba99",
"assets/assets/icons/fiverrRealImage.svg": "df507955ae20aa0d54d15ac6189e8523",
"assets/assets/icons/github.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/customFont/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/customFont/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/customFont/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/customFont/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/customFont/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/customFont/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/customFont/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/customFont/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/FontManifest.json": "bcdf32291b07644109cfbff6c88a793b",
"assets/fonts/MaterialIcons-Regular.otf": "84f0c2f77d2c027aed1c5dad3a0ce6ab",
"assets/AssetManifest.json": "b0947bb3158233fc979d01dfb3fae82f",
"assets/NOTICES": "3fd05336d9f0b4945e2ad7853c1f6ce1",
"assets/AssetManifest.bin": "794ad90611dc5a81e0d89da1f459e460",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"main.dart.js": "8a9829e12f8b697b10d4e194f20bf6a1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b3c4f967c824240ad713784142f55396",
"/": "b3c4f967c824240ad713784142f55396",
"version.json": "9b818ca9511483c901bed1545384376c",
"flutter_bootstrap.js": "85a4d4dfcd70cab390509200ec83185d",
".git/config": "5c319bb8b0c8dd22b626f900bcc5f36e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/index": "9e6c1476f2ebf86666d6ac7baacb9ca3",
".git/logs/HEAD": "72c2b4ea98ce8c7bc5d100aadb0a0084",
".git/logs/refs/heads/main": "5d80166e404649055380a4c881c1cdeb",
".git/logs/refs/remotes/origin/main": "86863825c03aedde0a3fb18c273c9ade",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/04/c3e8fda8874f5d49fc32ba9442963013d7f4a5": "f16d5e54c540aee1c38ea91532ed6369",
".git/objects/04/d8901ed6fd33fc4c39c55fe317a5fa5e456926": "3c3f02c6288a59b0732493f9e9ff4a4b",
".git/objects/a9/7329ef831643233367ec785236f29c99eebe63": "fad7a36370ec5f09ff26fd44ab204ad4",
".git/objects/8e/82c70d1081e2857ada1b73395d4f42c2e8adc9": "26623a433e72cc0c70229cb55963874c",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/b2/a7e89487b42544378eb09edc30a96972d73b62": "ffc99273010e31d1ac97b2acb729b31c",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/29dd5010148923a52f5509a9e3fe7086d3d629": "27cc4528fcd335cc99bd8aa0b640a4d7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/12/e4b743d0eca00faa1e7d60835b04b0aa3d82be": "97627561a93d5a0f19216acfd29c717a",
".git/objects/0f/53f149c3d1d8624527a4c2050bfb4fa43ba717": "d7e47bc577e02c6cd42417999fef8a60",
".git/objects/c6/aeeb16a6d7f754258bc7f3f2101d287976e6e6": "ea0f32909c0e06fc9256a959692bc0d3",
".git/objects/91/7c97a71069bbedda8b5fba02c825ceccbdabeb": "aee8017bd9942e8629a0e05592968fde",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/26/a234ac27b1cab2094873b011792ece6a458837": "6b70c2bb28c91884fe77d5b30ef47aa4",
".git/objects/18/9703445b4a7f01bcd0a6c0723c90c82df49cfb": "4d0b5c09524553c0e51cfa9ef405564e",
".git/objects/02/f37bde033a09f1ca86b7bd708bf3d9dfbb3f19": "d5254e9d107b30a630ced4b8d17da294",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/0d/c03c9477efb2ae22863ee79face626d84ee772": "d8298c60e8d92174755e791b7cb055e7",
".git/objects/4c/4f10c3cd7d463f43b5a553efbe324a93b41afb": "eff18973bc5a36909fa58c396640afa6",
".git/objects/b5/3fb1c4acbe100c7a91f07564b7f1fa2d5bab12": "e811d0b34945c5ebde7da923776bcfd5",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/63/5ffa1d3ae5c38f942a7b6764c15c2c89db10d3": "19f80a15ab784a79c63707b8fd1cb810",
".git/objects/86/a053a9d72faf9966d7ccb659574ba3dd863cf6": "c48dbb6b4100fbc1ca357a893212b602",
".git/objects/9e/6b061db61f79dae59f9fcab29fc05f92bb97db": "40ed588d762ea51c4e37bf7678d3707e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b346cf1ee1229c9ec54277685f9a6f9b57f1fa": "571cc8265187b6a3c5574beb158c59ac",
".git/objects/a7/b560992fabd9187c0ec14cad8ec0c7496ad4cd": "a63b88aa49700b2bc7d19b59554992d1",
".git/objects/ef/30278a30a79fb5f4d4f36f04d840192c6ba21e": "a34f0ab9b4d8c35a573aa7eab16c9fb1",
".git/objects/9c/873604deddb68d82884ec219321e0476a873a4": "1e7c8509d89898178443ffb0ca65cde0",
".git/objects/e0/43e2b51d14642f4c70bfa2747724f2e33e2055": "9b53eb10d6bbba13740d0806fe3ea317",
".git/objects/7b/9f4a04be8309f6723d9837e0189c8eda8a9b77": "3f561cb32fab273f52fa24c8901d67ae",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/09/cb4ab03b7b620f1fd8b71c9e4a56ba8b5354fe": "c519a791ca6a3a5dde1e80b16574e6e5",
".git/objects/2f/329da9eece9821340fabc6849bc08242e6e5b8": "8ad7d0786a77d9e65acf44dd4552d043",
".git/objects/2f/5a7558d4354fe49b36618e8ecc49f7fecf6cfd": "b1a80904213aa0f18cab423666525c92",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/07/4a001d94e4510d31fae12b67704b52fea53a07": "bf85a460ca6c8228229d617a4bcdfe3c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/3c/59f35351f0b0418a46acf980020342139ed66b": "dcffb3b1661015358dd255770ca12a03",
".git/objects/5f/9c2f1c0b491a3ef7b3d6bd797e1be37d32f6ec": "5638648dc8a479816b1034ac5c114caf",
".git/objects/a8/8c66c7f92f29058c088b1fdbdde8843646f0c0": "eeffeeb05622765a22e2df2a1ee1afdb",
".git/objects/a8/240ca527ae9b9f3ae83692f5c0a7dee9e0c093": "4ca885a3434305bba2883c6a557f6d85",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/64/6ea3891a1fde995a65f3d696d137c2ac8f25e7": "6c522cde36e01b94e046367662c0a5c7",
".git/objects/e2/f95826aa48b5ca454b10c4bf0894e0a3706c37": "0ac58b6c3cf3c5fe15943e2a46b04d7f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/84d5ee5878b35f899329a62a58ade19f55ab6f": "26e6b2ff46d4e3c3f69a918d60d24355",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/0c/cd588c73f9b45caf7012679ae618243afdb9c6": "e87e140d65f9cb4f41857a4d92774555",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/d8/ca230034c2a52d35d15188d31bfc7c84882f2e": "a62134c47f77a15decf2c1f668a042ce",
".git/objects/d8/5d160e91637a56e65bd1e7bbeae719ccbc7c74": "a163abba1f2c4652aead2cb7fa65733e",
".git/objects/8d/4eebf20665d5ae746c622a2bd42274b54d2bf1": "1af37619c66ce985101983d9c8fa0fe3",
".git/objects/60/14a7a62823aaa361968ef071739fb024d8274e": "204d51a248ebaa49dbf97dc3fc1d94dd",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/03/bf64d404b8ff5113740a192df028221f962325": "99c854b5f2c592d00051c8ff27b5bf10",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/8b/707abd1a13515f2e5d94bd2de03c61369db46a": "d4429dc747a6e9745917408d4bd2d324",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/bf/e08fb17178b55cdf0f291cff8ba4c24c9e4680": "711d0d9dec102890f445816efbc9f3fa",
".git/objects/b3/8d1617127109f77e1584e34c1bb9b16f5bc8b7": "aa789fafd35c399db0bea10b0269a15c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/f3/e05adce53c6e9c6f9b4276b57444f9105ad54d": "d00dea1212410c1925f0f71cda477e9e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/f7/8df44f3123022cea5928c97adce4b90d8894b5": "837863668b6befd90c96bb082e1d2528",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/37/58f16076ceb429c103a6a1c76869a1d34352c9": "068a8b68f0610c0d70505512f71d0c6b",
".git/objects/37/b96707f0443ffe2423a5e2d6f19fc513fef8b1": "a46a8e7352a8fdb14cc29c1dff7fca4e",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/ed/ef42e18109769897172b4949d2aee0ce5d1400": "91ddb6e8128f5d1c590fa63aee7dee13",
".git/objects/93/8cf0ea191e265de5df02ac533cfb518b4e6d2a": "42b4a53e15acdb8c1e5ec859cf1e213a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/765e3fd3682ca44ff02a7616ccb0a6f6874b9e": "758ee3229aa0a6eb59e23503b345f0fa",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/74/9ae26b0fb58e7116f4e6e0fc8358cb0091fe40": "8d9fa284a4a28ff30771bdf93199bd7a",
".git/refs/heads/main": "f6d12a4a456ca9ee4ef992ccf3bcb065",
".git/refs/remotes/origin/main": "f6d12a4a456ca9ee4ef992ccf3bcb065",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
