document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar el archivo JSON
    fetch('../../assets/json/package.json')
    .then(response => response.json())  // Convertimos el archivo JSON a un objeto
    .then(data => {
        // Obtenemos el título de la página
        const pageTitle = document.title;

        // Buscamos si el nombre de algún panelista coincide con el título de la página
        const panelista = data.panelistas.find(p => p.nombre === pageTitle);

        if (panelista) {
            // Si encontramos al panelista, cargamos el nombre, cargo e imagen

            // Actualizamos el título del panelista en el h2
            const titulo = document.getElementById('panelista-1-titulo-1');
            titulo.textContent = panelista.nombre;

            // Actualizamos el cargo del panelista en el párrafo
            const cargo = document.getElementById('panelista-1-cargo-1');
            cargo.textContent = panelista.cargo;

            // Actualizamos la imagen del panelista con el prefijo "../../"
            const imagen = document.getElementById('imagen-panelista-1');
            imagen.src = "../../" + panelista.imagen; // Agregamos el prefijo "../../"
            imagen.alt = panelista.nombre; // Alternativa de texto para la imagen
            imagen.title = panelista.nombre; // Título de la imagen
        } else {
            console.log('No se encontró un panelista que coincida con el título de la página');
        }
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
});