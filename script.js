// Búsqueda de productos con efecto de transición
function buscarProducto() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const productos = document.querySelectorAll(".producto-item");
  
    productos.forEach((producto) => {
      const titulo = producto.querySelector("h3").textContent.toLowerCase();
      // Añadimos una pequeña animación al ocultar/mostrar productos
      if (titulo.includes(input)) {
        producto.style.opacity = 0;
        producto.style.display = "block";
        setTimeout(() => {
          producto.style.opacity = 1;
        }, 100);
      } else {
        producto.style.opacity = 0;
        setTimeout(() => {
          producto.style.display = "none";
        }, 300);
      }
    });
  }
  
  // Ejecutar búsqueda al presionar Enter en el input
  document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      buscarProducto();
    }
  });
  
  // Autenticación de Usuario (Simulada)
  function autenticarUsuario() {
    const usuario = prompt("Ingrese su usuario:");
    const contraseña = prompt("Ingrese su contraseña:");
  
    if (usuario === "admin" && contraseña === "1234") {
      alert("¡Bienvenido, " + usuario + "!");
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }
  
  // Creación dinámica del botón de autenticación
  const authButton = document.createElement("button");
  authButton.textContent = "Iniciar Sesión";
  authButton.className = "auth-button";
  authButton.onclick = autenticarUsuario;
  document.body.insertBefore(authButton, document.body.firstChild);
  
  // Evento para resaltar productos al hacer clic (cambia con transición)
  document.querySelectorAll(".producto-item").forEach((producto) => {
    producto.addEventListener("click", () => {
      producto.classList.toggle("seleccionado");
    });
  });
  