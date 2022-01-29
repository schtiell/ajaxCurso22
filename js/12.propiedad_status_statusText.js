//console.log("Propiedad status & statusText");

//La funcion inicializarEventos, hace referencia al elemento html con id formulario y mediante el evento submit y la función anonima previene el comportamiento por default del elemento formulario e instancia a la función enviarFormulario
let inicializarEventos = function () {

    let formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", e => {

        e.preventDefault();
        enviarFormulario();
    }, false);
}


// La funcion enviarFormulario, invoca al elemento html con id numero, lo almacena en una variable, ademas crea el objeto de la clase XMLHttpRequest, declara la funcion procesarEventos que será la encargada de crear el funcionamiento del sitio. Abre la conexión mediante el metodo get al fichero php y enviar mediante el metodo send() los datos al servidor
let enviarFormulario = function (){

    var numero = document.querySelector("#numero").value;

    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET",`../php/12.propiedad_status_statusTextt.php?numero=${numero}`,true);
    //conexion.open("GET", `../php/12.propiedad_status_statusText.php?numero=${numero}`, true);
    conexion.send();
}


//La función procesarEventos recibe el elemento html con id resultados. Si el estado de la conexión es igual a 4 y el estatus devuelto por el servidor es de 200 (exitoso) entonces se imprime en el DOM la respuesta devuelta por el servidor
let procesarEventos = function () {

    let resultados = document.querySelector("#resultados");

    if(conexion.readyState == 4){

        if (conexion.status == 200) {

            resultados.innerHTML = conexion.responseText;
            resultados.style.display = "block";
        } else {

            //Si el resultado es difrente de status 200 entonces se manda un aler con el valor de status
            resultados.innerHTML = ' ';
            alert(`Error ${conexion.status}, Not found`);
        }
    }else{

        // Si el metodo onreadyState es diferente de 4 entonces imprime en el DOM mediante el elemento con id resultados la cadena 'Procesando...'
        resultados.innerHTML = 'Procesando...';
        resultados.style.display = "block";
    }
}

//Variable global para el objeto XMLHttpRequest
var conexion;

//Evento ejecutado inmediatemente termina de cargar el sitio en el navegador e instancia a la función inicializarEventos()
addEventListener("load", inicializarEventos, false);