//
let iniciarEventos = function (){

    console.log("Utilizando la función stringify");

    let boton = document.querySelector('#enviar');

    boton.addEventListener('click', e => {

        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = procesarEventos;
        conexion.open('GET', "../php/25.function_stringify.php", true);
        conexion.send();

    }, false);
}

let procesarEventos = function () {

    let resultados = document.querySelector('#resultados');
    let responseServer = "";

    if (conexion.readyState == 4) {

        if (conexion.status == 200) {

            //Convirtiendo objeto JSON a objeto Javascript con JSON.parse
            responseServer = JSON.parse(conexion.responseText);
            resultados.innerHTML= mostrarInformacion(responseServer);

        } else {
            console.error(`El estado de la conexion es: ${conexion.status}`);
        }
    } else {

        resultados.innerHTML = `<img  src='../img/loader2.gif' />`;
    }
}

let mostrarInformacion = function (obj) {
    //Convirtiendo objeto Javascript a JSON con JSON.stringify

    let cadena = "";
    for (let i = 0; i < obj.length; i++) {
        cadena = `${cadena} ${JSON.stringify(obj[i],undefined,2)}`;
        console.log(JSON.stringify(obj[i],null,2));

    }

    return cadena;
}


var conexion;
addEventListener ('load', iniciarEventos, false);