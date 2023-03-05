//Evento al dar click al boton con id enviar
let iniciarEventos = function (){
    console.log('Function json_decode para pasar de json a php');

    let boton = document.querySelector('#enviar');
    boton.addEventListener('click', e => {

        //Objeto a enviar al servidor php
        let usuario = {
            nombre: 'joaquin',
            apellido: 'sayago',
            edad: 36,
            correo: 'isc.jsayago@hotmail.com',
            tel: 2281828415,
            sueldos: [7500, 9200, 14000, 15500, 17900]
        };

        //Convirtiendo el objeto js a objeto json
        let cadena = JSON.stringify(usuario);
        enviarDatos(cadena);

    }, false);
}

//Funcion con la instancia ajax XMLHttpRequest()
let enviarDatos = function (cadena) {
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open('GET', `../php/27.functionJson_encode.php?cadena=${cadena}`, true);
    conexion.send(null);
}

//Procesamiento de datos devueltos por el servidor
let procesarEventos = function (){

    let resultados = document.querySelector('#resultados');

    if (conexion.readyState == 4 && conexion.status == 200) {
        
        if (conexion.statusText == 'OK') {
        
            resultados.innerHTML = conexion.responseText;

        } else {
            console.error(`Error de conexión: ${conexion.status}`);
        }
    } else {
        resultados.innerHTML = `<img src='../img/loader2.gif' />`;
    }
}

// Variable global conexion y evento load para iniciar el procesameinto del lado del cliente
let conexion;
addEventListener ('load', iniciarEventos, false);