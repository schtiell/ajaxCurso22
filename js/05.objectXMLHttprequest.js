console.log("Objeto XMLHttprequest");

//La funcion inicializarEventos() obtiene la referencia del boton y al ejecutarse el evento clic sobre este llama a la función presionBoton() 
function inicializarEventos () {
    let = objeto = document.querySelector("#boton");
    objeto.addEventListener("click", presionBoton, false);
}

//La funcion presionBoton() recibe el evento, obtiene la referencia de los elementos con id voto y nombre, para posteriormente enviar como argumentos a la función cargarVoto() el valor de cada referencia
function presionBoton (e) {
    let voto = document.querySelector("#voto").value;
    let nombre = document.querySelector("#nombre").value;
    cargarVoto(voto, nombre);
}

//Variable global de conexión
var conexion;

//La funcion cargarVoto recibe el valor de voto y nombre como parametros, e inicia el proceso de asíncrono de jsS
function cargarVoto (voto, nombre) {
    
    //Crea el objeto XMLHttpRequest
    conexion = new XMLHttpRequest();

    //La funcion onreadestatechange llama a la función procesarEventos
    conexion.onreadystatechange = procesarEventos;

    //Se inicia el envío de datos, mediante el metodo GET, la url con las variable a guardar, y el procedimiento true de asincrono
    conexion.open('GET', `./php/05.objectXMLHttprequest.php?puntaje=${voto}&nombre=${nombre}`, true);

    //Envío de los datos
    conexion.send();
} 

//La funcion procesarEventos, invoca al elemento html con id resultados
function procesarEventos (){
    let resultados = document.querySelector("#resultados");
    //console.log(conexion.readyState);

    //Si el estado de la conexión es igual a 4 entonces se imprime en el DOM la respuesta del servidor, si no imprime cargando
    if(conexion.readyState == 4){

        resultados.style.display = "block";
        resultados.innerHTML = conexion.responseText;

    }else{
        
        resultados.innerHTML = "Cargando...";
    }
}

//Funcion que se ejecuta al cargarse por completo el sitio.
addEventListener("load", inicializarEventos, false);