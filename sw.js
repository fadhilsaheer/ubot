self.addEventListener("install",e=>{

    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./index.html", "./style.css", "./home.html", "./images/logo64.png", "./images/logo512.png", "./assets/css/main.css"])
        })
    )

})

self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})
