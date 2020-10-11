if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("service worker is enabled")
    }).catch(e =>{
        console.log("service worker err")
        console.log(e)
    })
}else{
    console.log("service worker not working")
}
