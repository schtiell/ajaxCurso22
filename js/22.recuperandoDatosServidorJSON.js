//Inici los evento al hacer clic en el boton
let inicializarEventos = function (){
    console.info("Recuperando datos del servidor JSON");
    let boton = document.querySelector("#botonEnviar");
    boton.addEventListener('click', presionarBoton, false);
}

//Obtiene el valor seleccionado
let presionarBoton = function (e) {
    let dni = document.querySelector("#dni").value;

    if (dni == 0) {
        let resultados = document.querySelector("#resultados");
        resultados.innerHTML = "Debes elegir una opción valida";
    } else {
        recuperarDatos(dni);
    }
}

// Inicia la peticion asíncrona al servidor para solicitar los datos deacuerdo al dni enviado
let recuperarDatos = function (dni){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open('GET',`../php/22.respuestaJSON.php?dni=${dni}`,true);
    conexion.send();
}

//Imprime en el DOM la respuesta del servidor transformada en formato json
let procesarEventos = function () {
    let resultados = document.querySelector("#resultados");

    if(conexion.readyState == 4){

        let datos = JSON.parse(conexion.responseText);

        console.log(datos);

        resultados.innerHTML = `
                                <strong>    Usuario:    </strong>   ${datos.Usuario}<br>
                                <strong>    Nombre:     </strong>   ${datos.Nombre}<br>
                                <strong>    Sexo:       </strong>   ${datos.Sexo}<br>
                                <strong>    email:      </strong>   ${datos.Correo}<br>
                                <strong>    Telefono:   </strong>   ${datos.Telefono}
                                `;

    }else{
        resultados.innerHTML = "<img src='../img/loader2.gif' />";
    }
}

//Variables global de conexión y inicio de los eventos al cargar el sitio por completo
var conexion;
addEventListener('load', inicializarEventos, false);