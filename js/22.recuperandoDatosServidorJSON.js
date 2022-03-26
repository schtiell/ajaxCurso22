//
let inicializarEventos = function (){
    console.info("Recuperando datos del servidor JSON");
    let boton = document.querySelector("#boton1");
    boton.addEventListener('click', presionarBoton, false);
}

//
let presionarBoton = function (e) {
    let dni = document.querySelector("#dni");
    recuperarDatos(dni.value);
}

//
let recuperarDatos = function (dni){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open('GET',`../php/22.respuestaJSON.php?dni=${dni}`,true);
    conexion.send();
}

//
let procesarEventos = function () {
    let resultados = document.querySelector("#resultados");

    if(conexion.readyState == 4){
        let datos = JSON.parse(conexion.responseText);
        let salida = `Apellido: ${datos.apellido} <br>`;
        salida = `${salida} Nombre: ${datos.nombre} <br>`;
        salida = `${salida} Dirección donde debe votar: ${datos.direccion}`;
        resultados.innerHTML = salida;

    }else{
        resultados.innerHTML = `../img/loader2.gif`;
    }
}

//
var conexion;
addEventListener('load', inicializarEventos, false);