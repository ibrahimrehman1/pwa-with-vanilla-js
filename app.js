if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js", {scope: "/pwa-with-vanilla-js/"}).then(registration=>{
        console.log('Service Worker Successfully Registered!');
        console.log(registration);
    })
}