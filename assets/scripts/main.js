// Script para la pantalla de precarga (dura 3 segundos)
window.addEventListener('load', function() {
    setTimeout(function() {
        // Añadir la transición de opacidad para suavizar la desaparición
        document.getElementById('preload-container').style.transition = 'opacity 1s ease-out';
        document.getElementById('preload-container').style.opacity = '0';
        
        // Después de que la animación termine, escondemos el contenedor de carga
        setTimeout(function() {
            document.getElementById('preload-container').style.display = 'none';
        }, 1000); // Tiempo de la transición (1 segundo)
    }, 3200); // 3 segundos de retraso
});



// Script para el carrusel 1 (panelistas)
const prevButton = document.querySelector('.carrusel-prev');
const nextButton = document.querySelector('.carrusel-next');
const carrusel = document.querySelector('.contenedor-carrusel-1');

// Función para mover el carrusel hacia la izquierda
prevButton.addEventListener('click', () => {
  carrusel.scrollBy({
    left: -300, // El valor negativo mueve el carrusel a la izquierda
    behavior: 'smooth', // Desplazamiento suave
  });
});

// Función para mover el carrusel hacia la derecha
nextButton.addEventListener('click', () => {
  carrusel.scrollBy({
    left: 300, // El valor positivo mueve el carrusel a la derecha
    behavior: 'smooth', // Desplazamiento suave
  });
});



// Script para el carrusel 2 (medios aliados)
const prevButton2 = document.querySelector('#carrusel-prev-2');
const nextButton2 = document.querySelector('#carrusel-next-2');
const carrusel2 = document.querySelector('#contenedor-carrusel-1-2');

// Función para mover el carrusel hacia la izquierda
prevButton2.addEventListener('click', () => {
  carrusel2.scrollBy({
    left: -300, // El valor negativo mueve el carrusel a la izquierda
    behavior: 'smooth', // Desplazamiento suave
  });
});

// Función para mover el carrusel hacia la derecha
nextButton2.addEventListener('click', () => {
  carrusel2.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
});





// Script para el carrusel 2 (medios aliados)
const prevButton3 = document.querySelector('#carrusel-prev-3');
const nextButton3 = document.querySelector('#carrusel-next-3');
const carrusel3 = document.querySelector('#contenedor-carrusel-1-3');

// Función para mover el carrusel hacia la izquierda
prevButton3.addEventListener('click', () => {
  carrusel3.scrollBy({
    left: -300, // El valor negativo mueve el carrusel a la izquierda
    behavior: 'smooth', // Desplazamiento suave
  });
});

// Función para mover el carrusel hacia la derecha
nextButton3.addEventListener('click', () => {
  carrusel3.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
});





// Script para la lista de videos
function cargarListaDeReproduccion() {
  const apiKey = 'AIzaSyAtDHe5TAlLzCdr-BvIHglbX8VKRWHBkDg';
  const playlistId = 'PLcPasP33lrPUsJEwGIRCFPTGLtoekGFZr'; 

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const videos = data.items;
          const contenedorParte2 = document.querySelector('.contenedor-universal-parte-2');
          const contenedorParte1 = document.querySelector('.contenedor-universal-parte-1');

          const ultimoVideo = videos[0];
          mostrarVideo(ultimoVideo, contenedorParte1);

          videos.forEach(video => {
              const videoId = video.snippet.resourceId.videoId;
              const title = video.snippet.title;
              const thumbnail = video.snippet.thumbnails.medium.url;

              const videoElement = document.createElement('div');
              videoElement.classList.add('video-miniatura');
              videoElement.innerHTML = `
                  <img src="${thumbnail}" alt="${title}" data-video-id="${videoId}" loading="lazy">
                  <p>${title}</p>
              `;

              // Agregar evento para cambiar el video al hacer clic
              videoElement.addEventListener('click', function () {
                  mostrarVideo(video, contenedorParte1);
              });

              contenedorParte2.appendChild(videoElement);
          });
      })
      .catch(error => console.error('Error al cargar los videos:', error));
}

// Función para mostrar el video en el contenedor correspondiente
function mostrarVideo(video, contenedor) {
  const videoId = video.snippet.resourceId.videoId;
  const iframe = document.createElement('iframe');
  iframe.classList.add('videogrande');
  iframe.width = '100%';
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  iframe.frameborder = '0';
  iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowfullscreen = true;
  iframe.title = video.snippet.title || 'CUMBRE 200';

  contenedor.innerHTML = '';
  contenedor.appendChild(iframe);
}

// Llamar a la función cuando la página cargue
document.addEventListener('DOMContentLoaded', cargarListaDeReproduccion);

if (window.innerWidth >= 0 && window.innerWidth <= 600) {
  document.getElementById('p6-1').innerHTML = "• Mercadotécnica: <br> mariana.guillen@mundoejecutivo.com.mx";
  document.getElementById('p6-2').innerHTML = "• General: <br> araceli.hernandez@mundoejecutivo.com.mx";
} else if(window.innerWidth >= 601 && window.innerWidth <= 4000){
  document.getElementById('p6-1').innerHTML = "• Mercadotécnica: mariana.guillen@mundoejecutivo.com.mx";
  document.getElementById('p6-2').innerHTML = "• General: araceli.hernandez@mundoejecutivo.com.mx";
}





// Esperamos que el contenido esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
  // Función para cargar el archivo JSON
  fetch('assets/json/package.json')
  .then(response => response.json())  // Convertimos el archivo JSON a un objeto
  .then(data => {
      // Obtenemos el contenedor donde se insertarán las tarjetas
      const container = document.getElementById('panelistas-container');
      
      // Iteramos sobre los panelistas para crear las tarjetas
      data.panelistas.forEach(panelista => {
      // Creamos un div para la tarjeta
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-1');

      // Creamos la parte de la imagen
      const imagenDiv = document.createElement('div');
      imagenDiv.classList.add('tarjeta-1-imagen');
      
      const imagen = document.createElement('img');
      imagen.src = panelista.imagen;
      imagen.alt = `${panelista.nombre} | ${panelista.cargo}`;  // Se mantiene cargo en alt
      imagen.title = `${panelista.nombre} | ${panelista.cargo}`;  // Se mantiene cargo en title
      imagen.classList.add('imagen-3');
      imagen.setAttribute('loading', 'lazy');
      imagenDiv.appendChild(imagen);

      // Creamos la parte de texto
      const textoDiv = document.createElement('div');
      textoDiv.classList.add('tarjeta-1-texto');

      const textoParte1 = document.createElement('div');
      textoParte1.classList.add('tarjeta-1-texto-parte-1');
      
      const nombreP = document.createElement('p');
      nombreP.textContent = panelista.nombre;  // Solo mostramos el nombre
      nombreP.classList.add('parrafo-13');  // Añadimos la clase 'parrafo-13'

      const nombreP2 = document.createElement('p');
      nombreP2.textContent = panelista.cargo;  // Nombre también en el segundo párrafo
      nombreP2.classList.add('parrafo-14');  // Añadimos la clase 'parrafo-14'
      
      // Añadimos ambos párrafos a la parte de texto
      textoParte1.appendChild(nombreP);
      textoParte1.appendChild(nombreP2);

      const textoParte2 = document.createElement('div');
      textoParte2.classList.add('tarjeta-1-texto-parte-2');

      // Creamos el enlace <a> con la clase 'circulo' y el href del JSON
      const enlace = document.createElement('a');
      enlace.classList.add('circulo');
      enlace.href = panelista.href;  // Asignamos el href del JSON al enlace
      enlace.title = "VER";  // Asignamos un título al enlace
      
      const icono = document.createElement('i');
      icono.classList.add('fa-solid', 'fa-eye');
      icono.title = "VER";
      enlace.appendChild(icono);  // Añadimos el icono dentro del enlace

      textoParte2.appendChild(enlace);  // Añadimos el enlace dentro de la parte-2

      // Añadimos las partes de texto y la imagen a la tarjeta
      textoDiv.appendChild(textoParte1);
      textoDiv.appendChild(textoParte2);
      tarjeta.appendChild(imagenDiv);
      tarjeta.appendChild(textoDiv);

      // Finalmente, añadimos la tarjeta al contenedor principal
      container.appendChild(tarjeta);
      });
  })
  .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
  });
});





document.addEventListener("DOMContentLoaded", function() {
  // Obtener todas las tarjetas
  const tarjetas = document.querySelectorAll('.tarjeta-1');

  // Inicializamos una variable para la altura máxima
  let maxHeight = 0;

  // Recorrer todas las tarjetas para encontrar la más alta
  tarjetas.forEach(tarjeta => {
  // Obtener la altura de la parte de texto
  const alturaTexto = tarjeta.querySelector('.tarjeta-1-texto').offsetHeight;

  // Si esta tarjeta es más alta que la anterior, la actualizamos
  if (alturaTexto > maxHeight) {
      maxHeight = alturaTexto;
  }
  });

  // Establecer la misma altura para todas las tarjetas
  tarjetas.forEach(tarjeta => {
  tarjeta.querySelector('.tarjeta-1-texto').style.height = `${maxHeight}px`;
  });
});





function initMap() {
  // Ubicación de El Cantoral
  const location = { lat: 19.361981581902388, lng: -99.16887092434175 };

  // Crea el mapa centrado en El Cantoral
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  // Personaliza el marcador
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "El Cantoral",
    icon: {
      url: "https://grupomundoejecutivo.com/cumbre200-2025/assets/images/pin.webp", // Aquí puedes colocar la URL de tu propio ícono
      scaledSize: new google.maps.Size(50, 50), // Ajusta el tamaño
    },
  });
}
