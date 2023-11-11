if ('serviceWorker' in navigator) {
    console.log("Andando service worker");
    
    // Corrige la ruta del Service Worker
    navigator.serviceWorker.register("/sw.js")
        .then(res => console.log('Service Worker cargado correctamente', res))
        .catch(err => console.log('Error al registrar el Service Worker', err));
} else {
    console.log("Aun no lo puedes usar");
}
