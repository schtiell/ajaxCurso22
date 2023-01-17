//console.log('mostrando un gif animado de carga de datos');

let inicializarEventos = function (){

    let referencia = document.querySelector('#formulario');
    referencia.addEventListener('submit', e => {

        e.preventDefault();
        enviarFormulario();
    }, false);
}

let retornarDatos = function (){

    let cadena = '';

    let nombre = document.querySelector('#nombre');
    let comentarios = document.querySelector('#comentarios');

    cadena = `nombre=${encodeURIComponent(nombre.value)}&comentarios=${encodeURIComponent(comentarios.value)}`;
    console.log(cadena);
    return cadena;
}

let enviarFormulario = function(){

    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open('POST', '../php/14.mostrandoGifDeCarga.php', true);
    conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
    conexion.send(retornarDatos());
}


let procesarEventos = function () {

    let resultados = document.querySelector('#resultados');

    if (conexion.readyState == 4 && conexion.status == 200 ) {

        if (conexion.statusText == 'OK') {

            resultados.innerHTML = 'Gracias...';
        } else {
            alert(conexion.statusText);
        }
    } else {
        resultados.innerHTML = "<img src='../img/loading.gif'>";
    }
}

var conexion;
addEventListener('load', inicializarEventos, false);