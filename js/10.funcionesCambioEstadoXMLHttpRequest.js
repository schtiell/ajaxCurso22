
//La función inicializar eventos, hace referencia al elemento html con id formulario e inicia el evento submit mediante la función anonima que recibe el evento como parametro, evita el comportamiento por default que es ir al sitio que procesara la información del boton sunmit e instancia a la función enviarFormulario
let inicializarEventos = function (){
    
    let referencia = document.querySelector('#formulario');
    referencia.addEventListener('submit', e => {

        e.preventDefault();
        enviarFormulario();

    }, false);
}


//La función enviar formulario llama al valor del elemento html con id numero
let enviarFormulario = function () {
    
    let num = document.querySelector('#numero').value;

    //Inicia el objeto para hacer las peticiones ajax asincronas
    conexion = new XMLHttpRequest();

    //La funcion onreadystatechange llama a la función procesar eventos
    conexion.onreadystatechange = procesarEventos;

    //Muestra en un aler el estatus de la propiedad readyState. En este punto es 0
    alert(`El valor de la propiedad readyState: ${conexion.readyState}`);
    console.log(`${conexion.readyState}: UNSET`)

    //Abre la petición mediante el metodo get, enviando el valor de la variable num mediante al url al archivo php
    conexion.open('GET', `./php/10.funcionesCambioEstadoXMLHttpRequest.php?numero=${num}`, true);
    
    //Se envian los datos al servidor
    conexion.send();
}


//La funcion procesarEventos, imprime el status de la conexion que debe ser de 1 a 4 en este punto, escribe en el elemento con id resultados la respuesta devuelta por el servidor php.
let procesarEventos = function () {
    
    alert(`El status readyState es: ${conexion.readyState}`);
    
    let resultados = document.querySelector('#resultados');
    
    if (conexion.readyState == 4 && conexion.status == 200) {
        
        console.log(conexion.responseText);
        resultados.innerHTML = conexion.responseText;

    } else {
        
        resultados.innerHTML = 'Procesando...';
    }

}

//Variable global de conexion
var conexion;

//Escuchando al evento load, una vez que carga el sitio por completo se instancia a la función inicializarEventos
addEventListener('load', inicializarEventos, false);