// JavaScript para menú móvil
// Eventos y Manipulación de DOM

// Evento para buscar productos en la barra de búsqueda
function buscarProducto() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const productos = document.querySelectorAll(".producto-item");

    productos.forEach((producto) => {
        const titulo = producto.querySelector("h3").textContent.toLowerCase();
        producto.style.display = titulo.includes(input) ? "block" : "none";
    });
}

// Agregar evento para que se ejecute la búsqueda al presionar Enter en el input
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        buscarProducto();
    }
});

// Autenticación de Usuario (Simulada)
function autenticarUsuario() {
    const usuario = prompt("Ingrese su usuario:");
    const contraseña = prompt("Ingrese su contraseña:");

    // Aquí se realiza una autenticación básica simulada.
    if (usuario === "admin" && contraseña === "1234") {
        alert("¡Bienvenido, " + usuario + "!");
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// Botón de autenticación
const authButton = document.createElement("button");
authButton.textContent = "Iniciar Sesión";
authButton.className = "auth-button"; // Aplicar la clase CSS
authButton.onclick = autenticarUsuario;
document.body.insertBefore(authButton, document.body.firstChild);

// Evento para cambiar el color de fondo al hacer clic en los productos
document.querySelectorAll(".producto-item").forEach((producto) => {
    producto.addEventListener("click", () => {
        producto.style.backgroundColor = producto.style.backgroundColor === "lightblue" ? "" : "lightblue";
    });
});
