// Captura de errores de JavaScript globales
window.onerror = function (message, source, lineno, colno, error) {
    const errorDetails = {
      message: message,
      source: source,
      lineno: lineno,
      colno: colno,
      stack: error ? error.stack : null,
      timestamp: new Date().toISOString(),
    };
    
    // Enviar error al servidor
    sendErrorToServer(errorDetails);
  };
  
  // Captura de promesas no manejadas
  window.addEventListener('unhandledrejection', function (event) {
    const errorDetails = {
      message: event.reason.message,
      stack: event.reason.stack,
      timestamp: new Date().toISOString(),
    };
  
    // Enviar error al servidor
    sendErrorToServer(errorDetails);
  });
  
  // Función para enviar los errores al servidor
  function sendErrorToServer(errorDetails) {
    fetch('/log-error', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorDetails),
    })
    .then(response => response.json())
    .catch(err => console.error('Error al enviar error al servidor:', err));
  }  