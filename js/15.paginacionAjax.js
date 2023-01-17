//Es funcion carga el backend de php, llamando a la funcion cargarpagina y mandando como argumento la  ruta relativa del script de php
var conexion;
addEventListener("load", () => cargarPagina('../php/15.paginacionAjax.php'), false);


//La funcion presionEnlace recibe el evento como parametro. Evita el comportamiento por default del elemento html y obtiene su atributo href por ultimo enviar la url obtenida a la función cargarPagina()
let presionEnlace = function (e) {

    e.preventDefault();
    let url = e.target.getAttribute('href');
    cargarPagina(url);
}

//La funcion cargarPagina recibe la url, si esta viene vacia return un false, si no, crea el objeto ajax para la carga asincrona de la respuesta del servidor php, una ves que esta listo el estado llama a la funcion procesarEventos, enviando por el metodo GET, la url.
let cargarPagina = function (url) {

    if (url == '') {

        return false;
    } else {

        //Instancia de la clase XMLHttpRequest()
        conexion = new XMLHttpRequest();

        //El metodo onreadystatechange almacena la función que ejecutará una vez que cambie el estado
        conexion.onreadystatechange = procesarEventos;
        conexion.open('GET', url, true);
        conexion.send(null);
    }
}

//La función procesarEventos, invoca al elemento con id detalles
let procesarEventos = function () {

    let detalles = document.querySelector('#detalles');

    //Cuando el estado de la propiedad readyState se igual a 4 (completado) entonces se escribe en el div con id detalles la respueta del server.
    if (conexion.readyState == 4 && conexion.status == 200) {

        if(conexion.statusText == "OK"){

            detalles.innerHTML = conexion.responseText;

            //Este elemento devuelto por el servidor php es almacenado en una variable
            let objeto1 = document.querySelector('.sig');

            if (objeto1 != null ) {
                objeto1.addEventListener('click', presionEnlace, false);
            }

            let objeto2 = document.querySelector('.ant');

            if (objeto2 != null ) {
                objeto2.addEventListener('click', presionEnlace, false);
            }
        }

    } else {

        detalles.innerHTML = '<img src="../img/loading.gif">';
    }
}