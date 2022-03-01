if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js", {scope: "/"}).then(registration=>{
        console.log('Service Worker Successfully Registered!');
        console.log(registration);
    })
}