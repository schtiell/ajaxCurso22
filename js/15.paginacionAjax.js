//
let inicializarEventos = function (){

    cargarPagina('../php/15.paginacionAjax.php');
}

//
let presionEnlace = function (e) {

    e.preventDefault();
    let url = e.target.getAttribute('href');
    cargarPagina(url);
}

//
let cargarPagina = function (url) {

    if (url == '') {

        return;
    } else {

        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = procesarEventos;
        conexion.open('GET', url, true);
        conexion.send(null);
    }
}

//
let procesarEventos = function () {

    let detalles = document.querySelector('#detalles');

    if (conexion.readyState == 4) {

        detalles.innerHTML = conexion.responseText;

        let objeto1 = document.querySelector('#sig');

        if (objeto1 != null ) {
            objeto1.addEventListener('click', presionEnlace, false);
        }

        let objeto2 = document.querySelector('#ant');

        if (objeto2 != null ) {
            objeto2.addEventListener('click', presionEnlace, false);
        }
    } else {

        detalles.innerHTML = '<img src="../img/loading.gif">';
    }
}

//
var conexion;
addEventListener('load', inicializarEventos, false);