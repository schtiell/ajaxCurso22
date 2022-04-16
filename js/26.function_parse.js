//
let iniciarEventos = function () {
    console.log("function parse de js");

    let boton = document.querySelector('#enviar');
    boton.addEventListener('click', e => {

        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = procesarEventos;
        conexion.open('GET', '../php/26.function_parse.php', true);
        conexion.send();

    }, false);
}

let procesarEventos = function () {

    let resultados = document.querySelector('#resultados');
    let cadena ='';

    if (conexion.readyState == 4) {

        if (conexion.status == 200) {

            let datos = JSON.parse(conexion.responseText);

            for (let i = 0; i< datos.length; i++) {

                cadena = `${cadena} <br> { <br>
                            id: ${datos[i].id} <br>
                            nombre: ${datos[i].nombre} <br>
                            email: ${datos[i].email} <br> }`;
            }

            resultados.innerHTML = cadena;

        } else {
            console.error(`Conection status: ${conexion.status}`);
        }
    } else {
        resultados.innerHTML == `<img src='../img/loader2.gif' />`;
    }
}

//
let conexion;
addEventListener ('load', iniciarEventos, false);