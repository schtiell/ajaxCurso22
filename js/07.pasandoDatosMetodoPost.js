
let inicializarEventos = function () {

    let ref = document.querySelector("#formulario");
    ref.addEventListener("submit", enviarDatos, false);
}

let enviarDatos = function (e) {
    e.preventDefault();
    enviarFormulario();
}

let retornarDatos = function () {
    let cadena = '';
    let nombre = document.querySelector("#nombre").value;
    let comentarios = document.querySelector("#comentarios").value;
    cadena = `nombre=${encodeURIComponent(nombre)}&comentarios=${encodeURIComponent(comentarios)}`;
    return cadena;
}


let enviarFormulario = function () {

    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open("POST", "../php/07.pasandoDatosMetodoPost.php", true);
    conexion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    conexion.send(retornarDatos());

}

let procesarEventos = function () {

    let resultados = document.querySelector('#resultados');
    console.log(conexion.readyState);

    if(conexion.readyState == 4) {
        resultados.innerHTML = 'Gracias...';
    }else{
        resultados.innerHTML = 'Procesando...';
    }
}

var conexion;
addEventListener("load", inicializarEventos, false);