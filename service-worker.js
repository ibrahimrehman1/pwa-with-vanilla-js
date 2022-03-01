self.addEventListener("install", (e)=>{
    e.waitUntil(caches.open("my-first-cache").then(cache=>{
        return cache.addAll(['index.html', 'styles.css', 'app.js', '/images/lofi_generator.png'])
    }))
})


self.addEventListener("fetch", e=>{
    console.log("Fetched Request Made!")
})