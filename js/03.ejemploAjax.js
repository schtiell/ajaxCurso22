// El manejador de eventos del DOM escucha cuando el evento load se dispara, se invoca a la función inicializarEventos(), y la propación del evento se fija en false
addEventListener("load", inicializarEventos, false);

function inicializarEventos (){

    for (let i = 1; i <= 12; i++) {

        let objeto = document.getElementById(`enlace${i}`);
        objeto.addEventListener("click", presionEnlace, false);
    }
}

function presionEnlace (e) {

    e.preventDefault();
    let url = e.target.getAttribute("href");
    console.log(url);
    cargarHoroscopo(url);
}

var conexion1;
function cargarHoroscopo (url) {

    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open('GET', url, true);
    conexion1.send();
}

function procesarEventos () {

    let detalles = document.getElementById("detalles");
    //console.log(conexion1.readyState);
    if(conexion1.readyState == 4){
        detalles.innerHTML =  conexion1.responseText;
    }else{
        detalles.innerHTML = "cargando...";
    }
}

