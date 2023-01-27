
//Iniciando los eventos al cambiar la opciòn el elemento html select con id #dni
let iniciarEventos = function () {

    let opcion = document.querySelector('#dni');

    opcion.addEventListener('change', e => {

        opcion = document.querySelector('#dni').value;

        if (opcion == 0) {

            resultados.innerHTML = 'Debes elegir una opción valida';
        }else{
            recuperarDatos(opcion);
        }
    }, false);
}

//Crea la conexion asincrona con el servidor y le envia por la url el dni contenido en el parametro de la funcion id
let recuperarDatos = function (id) {

    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open('GET', `../php/23.respuestaJSON_2.php?dni=${id}` ,true)
    conexion.send();
}

//Funcion que procesa la respuesta del servidor si el estado de conexion es 4 y el estatus del sitio devuelto es 200
let procesarEventos = function () {

    if (conexion.readyState == 4 && conexion.status == 200) {

        if(conexion.statusText == 'OK') {

            //Analiza la cadena de texto devuelta como JSON y la convierte a javascript
            let datos = JSON.parse(conexion.responseText);

            //Impresion de la respuesta devuelta por el servidor y formateada por la función crearSalida()
            //resultados.innerHTML = crearSalida(datos.id, datos.nombre, datos.usuario, datos.email, datos.telefono, datos.compania);

            resultados.innerHTML = crearSalida(datos);

        } else {

            console.error(conexion.status);
            resultados.innerHTML = "<img src='../img/loader2.gif' />";
        }
    } else {
        //Imagen de carga mientras el servidor responde a la solicitud
        resultados.innerHTML = "<img src='../img/loader2.gif' />";
    }
}

//Funcion que crea la cadena de salida de la respuesta devuelta por el servidor
let crearSalida = function (obj) {

    //Creacion de tabla que será impresa por la función procesarEventos
    return  `<table id="table" class="table table-striped table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Compañia</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope='col'>${obj.id}</td>
                        <td>${obj.nombre}</td>
                        <td>${obj.usuario}</td>
                        <td>${obj.email}</td>
                        <td>${obj.telefono}</td>
                        <td>${obj.compania}</td>
                    </tr>
                </tbody>
            </table>`;
}

//Varible conexion y resultados declaradas en el scope global
var conexion;
let resultados = document.querySelector('#resultados');

//Inicio de los eventos al cargar el sitio web por completo
addEventListener('load', iniciarEventos, false);