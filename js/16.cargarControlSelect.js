console.log("cargarControlSelect.js");

//
let inicializarEventos = function (){

    let estado = document.querySelector('#estados');
    estado.addEventListener("change", mostrarMunicipios, false);
}

//
let mostrarMunicipios = function (){

    let opcion = document.querySelector('#estados').value;
    console.log (opcion);

    if (opcion != 0){

        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = procesarEventos;
        conexion.open('GET', '../php/16.municipioPorEstado.php?idEstado='+opcion, true);
        conexion.send();
    }else{

        let municipios = document.querySelector('#municipios');
        municipios.options.length=0;
    }
}

let listarMunicipios = function (e) {
    e = document.querySelector('#municipios').value;
    console.log (e);
}

let procesarEventos = function(){

    if (conexion.readyState == 4) {

        let municipios = document.querySelector("#municipios");
        municipios.addEventListener("change", listarMunicipios, false);
        municipios.innerHTML = conexion.responseText;

    } else {

        let municipios = document.querySelector("#municipios");
        municipios.innerHTML = "<option value='0'> Selecciona un Estado primero</option>"
    }
}

//
var conexion;
addEventListener("load", inicializarEventos, false)