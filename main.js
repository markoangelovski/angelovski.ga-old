// Make sure service workers are supported
if("serviceWorker" in navigator) {
    window.addEventListener("load", ()=> {
        navigator.serviceWorker
        .register("sw_cached_site.js")
        .then(reg => console.log("SW scope is:",reg.scope))
        .catch(err => console.log(`Service worker: Error: ${err}`));
    });
};