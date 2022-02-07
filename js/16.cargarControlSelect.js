//
let inicializarEventos = function (){

    let estado = document.querySelector('#estado');
    estado.addEventListener('change', mostrarMunicipios, false);
}

//
let mostrarMunicipios = function (){

    let opcion = document.querySelector('#estado').value;

    if (opcion != 0){

        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = procesarEventos;
        conexion.open('GET', '../php/', true);
        conexion.send();
    }else{

        let municipios = document.querySelector('#municipios');
        municipios.options.length=0;
    }

}

let procesarEventos = function(){

    if (conexion.readyState == 4) {

        let d = document.querySelector('#espera');
        d.innerHTML = '';

    } else {

        let d = document.querySelector('#espera');
        d.innerHTM
    }
}


//
var conexion;
addEventListener('load', inicializarEventos, false);