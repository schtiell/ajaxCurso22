// El manejador de eventos del DOM escucha cuando el evento load se dispara, se invoca a la función inicializarEventos(), y la propación del evento se fija en false
addEventListener("load", inicializarEventos, false);

// Se invocan los enlaces del 1 al 12 y se escuchan los eventos clic sobre los elementos para invocar a la funcion presionEnlace ()
function inicializarEventos (){

    for (let i = 1; i <= 12; i++) {

        let enlace = document.getElementById(`enlace${i}`);
        enlace.addEventListener("click", presionEnlace, false);
    }
}


// La funcion presionEnlace recibe como parametro el evento, previene el comportamiento del enlace por default y asina a una variable url el valor del atributo href, para luego pasarla como argumento a la función cargarHoroscopo
function presionEnlace (e) {

    e.preventDefault();
    let url = e.target.getAttribute("href");
    console.log(url);
    cargarHoroscopo(url);
}

//Declaración de variable global para la conexion con Ajax
var conexion1;

//La funcion que realiza el refresco del sitio utilizando ajax
function cargarHoroscopo (url) {

    //Nuevo objeto de la clase XMLHttpRequest()
    conexion1 = new XMLHttpRequest();

    //La funcion onreadystatechange se inicializa con la función que será cargada de procesar los datos enviados por el servidor
    conexion1.onreadystatechange = procesarEventos;

    /* Se llama al metodo open que tiene 3 parametros 
        1. El metodo de envío de datos GET o POST
        2. La url de la página que procesará los datos que se le envien
        3. Se indica y los datos se procesaran de forma asíncrona (true) o sincróna (false)
    */
    conexion1.open('GET', url, true);

    //Por ultmo se inva al metodo send para inicializar el proceso
    conexion1.send();
}

/* La función procesarEventos que se ejecuta cada vez que el objeto conexion1 de la clase XMLHttpRequest cambia de estado:
    0 No inicializado.
    1 Cargando.
    2 Cargado.
    3 Interactivo.
    4 Completado.
*/
function procesarEventos () {

    //Se invoca el elemento html con id detalles
    let detalles = document.getElementById("detalles");

    //Para conocer el estado de la conexión es necesario utilizar la propiedad readyState que almacena uno de los 5 valores enunciados anteriormente
    if(conexion1.readyState == 4){

        //Mediante el método responseText se recupera la información enviada por el servidor
        detalles.innerHTML =  conexion1.responseText;
    }else{

        //Si el estado del metodo readyState es diferente de 4 entonces se muestra el mensaje en el DOM "cargando...."
        detalles.innerHTML = "cargando....";
    }
}

