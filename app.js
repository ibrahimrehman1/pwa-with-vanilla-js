if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("/pwa-with-vanilla-js/service-worker.js").then(registration=>{
        console.log('Service Worker Successfully Registered!');
        console.log(registration);
    })
}