document.addEventListener("DOMContentLoaded", function() {
  // Declaración del contador
  let contador = 0;

  const loginForm = document.getElementById("loginForm");
  const usuarioInput = document.getElementById("usuario");
  const claveInput = document.getElementById("clave");
  const programaSelect = document.getElementById("programa");

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const usuario = usuarioInput.value;
      const clave = claveInput.value;
      const programa = programaSelect.value;

      if (usuario === "crhis" && clave === "21345") {
          console.log(`El curso ${programa} ha sido agregado.`);
          // Incrementar el contador
          contador++;
          console.log(`El contador es ahora: ${contador}`);
      } else {
          console.log("Usuario o contraseña incorrectos.");
      }
  });
});


document.addEventListener("DOMContentLoaded", function() {
    const cancelBtn = document.getElementById("cancelBtn");
    const signupBtn = document.getElementById("signupBtn");
  
    cancelBtn.addEventListener("click", function() {
        window.location.href = "index.html";
    });
  
    signupBtn.addEventListener("click", function() {
        window.location.href = "login.html";
    });
});