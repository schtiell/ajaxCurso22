//La funcion inicializarEventos invoca al elemento html con id estados y queda a la espera del evento change para iniciar la funcion mostrarMunicipios
let inicializarEventos = function (){

    let estado = document.querySelector('#estados');
    estado.addEventListener("change", mostrarMunicipios, false);
}

//La funcion invar nuevamente el elemento html con id estados para optener su valor.
let mostrarMunicipios = function (){

    let opcion = document.querySelector('#estados').value;
    console.log(opcion);

    // Si el valor del elemento con id estado es diferente de cero entonces....
    if (opcion != 0){

        //Asigna el nuevo objeto XMLHttpRequest a la variable global conexion.
        conexion = new XMLHttpRequest();

        //Cuando esta hace un cambio en su estado invoca a la funcion procesarEventos.
        conexion.onreadystatechange = procesarEventos;

        //asando por el metodo GET al backend php 16.municipioPorEstado.php por la url el valor obtenido del elemento html con id estados y definiendo en true el valor asincrono
        conexion.open('GET', '../php/16.municipioPorEstado.php?idEstado='+opcion, true);
        conexion.send();

    }else {

        let municipios = document.querySelector('#municipios');
        //municipios.options.length=0;
        municipios.innerHTML= "<option value='0'> Selecciona un estado primero </option>";
    }
}

let procesarEventos = function(){

    if (conexion.readyState == 4) {

        let esperando = document.querySelector('#espera');
        esperando.style.display = "None";

        if  (conexion.status == 200) {

            // console.log(`Conection status: ${conexion.status}`);

            let municipios = document.querySelector("#municipios");

            municipios.addEventListener("change", e => {
                let valor = document.querySelector('#municipios').value;
                console.log (valor);
            }, false);

            municipios.innerHTML = conexion.responseText;

        }else{
            alert(conexion.statusText);
        }

    } else if (conexion.readyState != 4){

        let esperando = document.querySelector('#espera');
        esperando.innerHTML = "<img src='../img/loading.gif'>";
    }
}

//Variable de conexion globar para ajax y definicion de la espera del evento load para cargar la funcion inicializarEventos
var conexion;
addEventListener("load", inicializarEventos, false)