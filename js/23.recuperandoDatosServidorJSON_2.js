
//Iniciando los eventos
let iniciarEventos = function () {

    let id = document.querySelector('#dni');

    id.addEventListener('change', e => {

        id = document.querySelector('#dni').value;

        if (id == 0) {

            resultados.innerHTML = 'Debes elegir una opción valida';
        }else{
            recuperarDatos(id);
        }
    }, false);
}

//
let recuperarDatos = function (id) {

    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open('GET', `../php/23.respuestaJSON_2.php?dni=${id}` ,true)
    conexion.send();
}

//
let procesarEventos = function () {

    if (conexion.readyState == 4) {

        if(conexion.status == 200) {

            let datos = JSON.parse(conexion.responseText);
            resultados.innerHTML = `<strong>    Usuario:    </strong>   ${datos.usuario}<br></br>`;

        } else {

            console.error("Status != 200");
            resultados.innerHTML = "<img src='../img/loader2.gif' />";
        }
    } else {
        resultados.innerHTML = "<img src='../img/loader2.gif' />";
    }
}

//
var conexion;
let resultados = document.querySelector('#resultados');
addEventListener('load', iniciarEventos, false);