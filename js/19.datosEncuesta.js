
//
let inicializarEventos = function (){

    let formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", enviarDatos, false);
}

let enviarDatos = function (e) {

    e.preventDefault();

        if (document.querySelector("#radio1").checked){
            enviarSeleccion(1);

        }else if (document.querySelector("#radio2").checked){
            enviarSeleccion(2);

        }else if (document.querySelector("#radio3").checked){
            enviarSeleccion(3);
        }
    
}

let enviarSeleccion = function (opcion){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET", `../php/19.datosEncuesta.php?opcion=${opcion}&aleatorio=aleatorio`, true);
    conexion.send(null);
}

let procesarEventos = function (){

    let encuesta = document.querySelector("#encuesta");
    
    if (conexion.readyState = 4 ) {

        encuesta.innerHTML = `<img src="../img/encuesta.png">`;
        
    } else {
        encuesta.innerHTML = `<img src="../img/loader2.gif">`;
    }
}

var conexion;
addEventListener ("load", inicializarEventos, false);


