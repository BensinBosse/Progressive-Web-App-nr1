self.importScripts("./node_modules/@jsenv/pwa/src/jsenv_service_worker.js");

self.initJsenvServiceWorker({
  cachePrefix: "KennethFall",
  // service worker will cache "/" and the "roboto" font
  urlsConfig: {
    "/": true,
  },
});
