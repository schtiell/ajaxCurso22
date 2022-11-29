//La funcion inicializarEventos() obtiene la referencia del boton y al ejecutarse el evento clic sobre este llama a la función presionarBoton() 
let inicializarEventos = function (){

    let boton = document.querySelector('#boton');
    boton.addEventListener('click', obtenerDatos, false);
}

//La funcion recibe el evento, obtiene la referencia de los elementos con id voto y nombre, para posteriormente enviar como argumentos a la función cargarDatos el valor de cada referencia
let obtenerDatos = function (e) {

    let nombre = document.querySelector('#nombre').value;
    let voto = document.querySelector('#voto').value;

    cargarDatos(nombre, voto);
}

//La funcion cargarDatos recibe el valor de voto y nombre como parametros, e inicia el proceso de asíncrono de js
let cargarDatos = function (nombre, voto) {
    
    //Crea el objeto XMLHttpRequest
    xhttpr = new XMLHttpRequest();

    //La funcion onreadestatechange llama a la función procesarEventos
    xhttpr.onreadystatechange = procesarDatos;

    //Se inicia el envío de datos, mediante el metodo GET, la url con las variable a guardar, y el procedimiento true de asincrono
    xhttpr.open('GET', `../php/05.objectXMLHttprequest.php?puntaje=${voto}&nombre=${nombre}`, true);

    //Envío de los datos
    xhttpr.send();
}

//La funcion procesarEventos, invoca al elemento html con id resultados
let procesarDatos = function () {
    
    let impresion = document.querySelector('#resultados');

    //Si el estado de la conexión es igual a 4 y el status de conexion es 200, entonces se imprime en el DOM la respuesta del servidor, si no imprime cargando
    if (xhttpr.readyState == 4 && xhttpr.status == 200) {
        
        impresion.style.display =  "block";
        impresion.innerHTML = xhttpr.responseText;
        
    } else {
        impresion.innerHTML = "Cargando...";
    }  
}

//Declaración globar de la variable para la instancia del Método XMLHttpRequest.
var xhttpr;

//Funcion que se ejecuta al cargarse por completo el sitio.
addEventListener('load', inicializarEventos, false);