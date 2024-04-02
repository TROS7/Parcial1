document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registroForm");
  
    registroForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const nombres = document.getElementById("nombres").value;
      const apellidos = document.getElementById("apellidos").value;
      const email = document.getElementById("email").value;
      const telefono = document.getElementById("telefono").value;
      const estrato = document.getElementById("estrato").value;
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;
      const grupoSanguineo = document.getElementById("grupoSanguineo").value;
      const genero = document.querySelector('input[name="genero"]:checked').value;
      const actividadesFavoritas = [];
      document.querySelectorAll('input[name="actividadesFavoritas"]:checked').forEach(function(checkbox) {
        actividadesFavoritas.push(checkbox.value);
      });
  
      const mensaje = `Nombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}\nEstrato: ${estrato}\nFecha de Nacimiento: ${fechaNacimiento}\nGrupo Sanguíneo: ${grupoSanguineo}\nGénero: ${genero}\nActividades Favoritas: ${actividadesFavoritas.join(", ")}`;
  
      alert(mensaje);
    });
  
    const cancelarBtn = document.getElementById("cancelarBtn");
    cancelarBtn.addEventListener("click", function() {
      window.location.href = "cursos.html";
    });
  });