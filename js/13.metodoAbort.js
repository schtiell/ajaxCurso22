
//La función recorre los 12 enlaces mediante un ciclo for, el cual se encarga de escuchar el evento clic de cada enlace referenciado por su id, se inicia la función anonima recibiendo como parametro el evento del enlace.
let inicializarEventos = function () {

    for (let i = 1; i <= 12; i++) {

        let enlace = document.querySelector(`#enlace${i}`);
        enlace.addEventListener('click', e => {

            //Se evita el comportamiento por default de un enlace, se obtiene el valor del atributo href y se envia como argumento a la función cargarHoroscopo()
            e.preventDefault();
            let url = e.target.getAttribute('href');
            cargarHoroscopo(url);

        }, false);
    }
}

//La función cargarHoroscopo recibe la url, inicia el objeto de conexion XMLHttpRequest, cuando esta listo el cambio de estado llama a la función procesarEventos() mediante el metodo GET le envía al servidor la url y se indica que la actualización del sitio es asíncrona.
let cargarHoroscopo = function (url){

    if (url == ''){

        return;
    }else{

        //Objeto XMLHttpRequest
        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = procesarEventos;
        conexion.open('GET', url, true);
        conexion.send();

        //Cuando se establece la conexión con el servidor se inica un temporizador, si pasan mas de 3 segundos sin que el servidor responda se llama a la función finDeEspera(), la cual aborta la conexión
        tiempo = setTimeout("finDeEspera()", 3000);
    }
}

//La función es ejecutada cuando el servidor tarda más de 3 segundos en responder utilizando el método abort() e imprimi un texto en el DOM informando sobre el tiempo excedido de respuesta del servidor
let finDeEspera = function (){

    conexion.abort();
    detalles.innerHTML = 'Por favor intentalo más tarde, el servidor está sobrecargado en este momento';
}


//La función procesarEventos si el estado de la conexión es 4 devuelto por la propiedad onreadystatechage es 4 y la propiedad status es 200 entonces escribe en el DOM el texto devuelto por el servidor
let procesarEventos = function(){

    let detalles = document.querySelector('#detalles');

    if(conexion.readyState == 4 && conexion.status == 200){

        if (conexion.statusText == 'OK') {

            clearTimeout(tiempo);
            detalles.innerHTML = conexion.responseText;

        } else {

            detalles.innerHTML = '';
            alert(`${conexion.statusText}. The requested URL was not found on this server.`);
        }
    }else{

        detalles.innerHTML = 'Cargando...';
    }
}

//Variables globales para la conexion y para el tiempo de respuesta del servidor php
var conexion;
var tiempo;

//Inicia el evento load al cargar por completo el sitio e instancia la función inicializarEventos()
addEventListener('load', inicializarEventos, false);