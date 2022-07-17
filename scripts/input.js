/* esta funcion toma el dato del input y lo lleva a un contenedor flotante */

function saludar (){
    let nombreUsuario = document.getElementById("nombre").value;
    let containerMensaje = document.getElementById("mensaje");
    containerMensaje.innerText = `Bienvenido ${nombreUsuario} a esta nueva experiencia`;
    containerMensaje.style.visibility = "visible"
}

let botonIngresar = document.getElementById("ingresarNombre");

botonIngresar.onclick = saludar /* aca se le asigna la funcion saludar al boton */

