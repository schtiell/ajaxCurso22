
//
let iniciarEventos = function () {

    console.log("Recuperando datos en formato json, utilizando la funcion jscon_encode de php");

    let boton = document.querySelector('#boton');
    boton.addEventListener('click', e => {
        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = procesarEventos;
        conexion.open('GET', `../php/24.functionJson_Encode.php`, true);
        conexion.send();
    }, false);
}

let procesarEventos = function () {

    let resultados = document.querySelector('#resultados');

    if (conexion.readyState == 4) {

        if (conexion.status == 200) {

            let datos = JSON.parse(conexion.responseText);
            resultados.innerHTML = mostrarInformacion(datos);

        } else {
            console.log(`El status error es: ${conexion.status}`);
        }

    } else {
        resultados.innerHTML = `<img src='../img/loader2.gif' />`;
    }
}

let mostrarInformacion = function (obj) {

    let cadena = `<table class="table table-striped table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <td>#</td>
                            <td>Nombre</td>
                            <td>Correo</td>
                            <td>Password</td>
                            <td>Rol_id</td>
                            <td>Creado</td>
                            <td>Actualizado</td>
                        </tr>
                    </thead>
                    <tbody>`;

    for (let i = 0; i < obj.length; i++) {
        cadena = `${cadena} <tr>
                                <td scope="col">${obj[i].id}</td>
                                <td>${obj[i].nombre}</td>
                                <td>${obj[i].email}</td>
                                <td>${obj[i].password}</td>
                                <td>${obj[i].rol_id}</td>
                                <td>${obj[i].creado}</td>
                                <td>${obj[i].actualizado}</td>
                            </tr>`;
    }

    cadena =    `${cadena}
                    </tbody>
                </table>`;

    return cadena;
}

var conexion;
addEventListener('load', iniciarEventos, false);