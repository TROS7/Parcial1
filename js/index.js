document.addEventListener("DOMContentLoaded", function() {
    const cambiarContenidoBtn = document.getElementById("cambiarContenidoBtn");
    const cambiarColorBtn = document.getElementById("cambiarColorBtn");
    const texto = document.getElementById("texto");
  
    cambiarContenidoBtn.addEventListener("click", function() {
      texto.textContent = "hola, este es el nuevo texto";
    });
  
    cambiarColorBtn.addEventListener("click", function() {
      // Cambiar color de fondo y texto de la página
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "red";
    });
  });