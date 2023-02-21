
let iniciarEventos = function () {

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

    if (conexion.readyState == 4 && conexion.status == 200) {

        if (conexion.statusText == 'OK') {

            let datos = JSON.parse(conexion.responseText);
            resultados.innerHTML = generarTabla(datos);

        } else {
            console.log(`El status error es: ${conexion.status}`);
        }

    } else {
        resultados.innerHTML = `<img src='../img/loader2.gif' />`;
    }
}

let generarTabla = function (obj) {

    let cadena = `<table class="table table-striped table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Password</th>
                            <th>Rol_id</th>
                            <th>Creado</th>
                            <th>Actualizado</th>
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