document.addEventListener("DOMContentLoaded", function() {
    const botonesVerMas = document.querySelectorAll(".btn-ver-mas");
  
    botonesVerMas.forEach(function(boton) {
      boton.addEventListener("click", function() {
        const programa = this.parentNode;
        const descripcion = programa.querySelector("p").textContent;
  
        // Mostrar modal de alerta con la información del programa
        alert(`Descripción del programa:\n\n${descripcion}`);
      });
    });
  });