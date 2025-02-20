// Variable para almacenar si la ventana emergente se mostró previamente
let popupShown = false;

// Función para mostrar el popup
function showPopup() {
    if (!popupShown) {
        document.getElementById("popup").style.display = "block";
        popupShown = true; // Para que no se muestre más de una vez

        // Cerrar el popup automáticamente después de 10 segundos
        setTimeout(function() {
            document.getElementById("popup").style.display = "none";
        }, 10000); // 10,000 ms = 10 segundos
    }
}

// Detectar eventos de visibilidad en dispositivos móviles (puede indicar una captura de pantalla)
document.addEventListener("visibilitychange", function() {
    // Si la página pierde visibilidad y luego la gana, es posible que sea una captura de pantalla
    if (document.hidden) {
        setTimeout(function() {
            if (!popupShown) {
                showPopup();
            }
        }, 500); // Esperamos un poco antes de mostrar el popup
    }
});

// Cerrar el popup cuando se haga clic en el botón
document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("contenedor-pop").style.display = "none";
});