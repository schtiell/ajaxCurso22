
//La funcion inicializarEventos hace referencia al elemento html con id formulario, e inicia el evento submit invocando a la funcion enviardatos
let inicializarEventos = function () {

    let ref = document.querySelector("#formulario");
    ref.addEventListener("submit", enviarDatos, false);
}

//La funcion enviarDatos previene el comportamiento del evento submit e invoca a la funcion enviarFormulario
let enviarDatos = function (e) {
    e.preventDefault();
    enviarFormulario();
}

//La funcion retornar datos, define una cadena vacia y llama a los valores ingresados en el campo nombre y comentearios y los asigna a una variable. Posterior a esto construye la url con los valores de nombre y comentarios y retorna la misma
let retornarDatos = function () {
    let cadena = '';
    let nombre = document.querySelector("#nombre").value;
    let comentarios = document.querySelector("#comentarios").value;

    //el metodo encodeURIComponent() codifica los caracteres especiales de los valores ingresados por el usuario
    cadena = `nombre=${encodeURIComponent(nombre)}&comentarios=${encodeURIComponent(comentarios)}`;
    return cadena;
}

//La funcion enviarFormulario inicia el objeto XMLHttpRequest y llama a la funcion procesarEventos, mediante el metodo post envia los datos al servidor(archivo php).
let enviarFormulario = function () {

    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open("POST", "../php/07.pasandoDatosMetodoPost.php", true);

    /* setRequestHeader(header, value) debe ser llamado despues de open() y antes del metodo send(). header = El nombre del encabezado cuyo valor se va a establecer.
    value = El valor que se establecerá como el cuerpo del encabezado. */
    conexion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    conexion.send(retornarDatos());

}

//La función procesarEventos es ejecutada cada ves que cambia el estado del objeto XMLHttpRequest, cuando retorna un estado = 4 significa que los datos se han enviado correctamente.
let procesarEventos = function () {

    let resultados = document.querySelector('#resultados');
    console.log(conexion.readyState);

    if(conexion.readyState == 4) {
        resultados.innerHTML = 'Gracias...';
    }else{
        resultados.innerHTML = 'Procesando...';
    }
}

//Variable global de conexión
var conexion;

//Evento load ejecutado al terminar de cargar el sitio. Invoca a la función inicializarEventos
addEventListener("load", inicializarEventos, false);