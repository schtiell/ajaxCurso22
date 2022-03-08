
//Funcion inicializarEventos
let inicializarEventos = function () {

    //Recuperando todos los elementos con clase cuadradito y almacenados en un array
    let array = document.querySelectorAll('.cuadradito');

    //Recorrido del arragle de los elementos div para la aplicacion de los diferentes eventos
    for (let i = 0; i < array.length; i++) {
        
        array[i] = addEventListener('mouseover', mostrarTooltip, false);
        array[i] = addEventListener('mouseout', ocultarTooltip, false);
        array[i] = addEventListener('mousemove', actualizarTooltip, false);       
    }
    
    //Creando el elemento div que será utilizado como tooltip
    let tooltip = document.createElement('div');
    tooltip.setAttribute('id', 'divmensaje');   
    array = document.querySelectorAll('body');
    array[0].appendChild(tooltip);
}

//Funcion para mostrar el tooltip al posicionar el apuntador del mouse sobre el elemento div
let mostrarTooltip = function (e) {
    
    let divmensaje = document.querySelector('#divmensaje');
    divmensaje.style.visibility = "visible";
    divmensaje.style.left = (e.clientX + document.body.scrollLeft + 15)+'px';
    divmensaje.style.top = (e.clientY + document.body.scrollTop + 15) + 'px';
    let ref;
    ref = e.target;
    recuperarServidorTooltip(ref.getAttribute("id")); 
}

//Funcion para ocultar el tooltip al posicionar el apuntador del mouse sobre el elemento div
let ocultarTooltip = function (e) {
    
    let divmensaje = document.getElementById("divmensaje");
    divmensaje.style.visibility = "hidden";
}

//Funcion para actualizar la posición del tooltip al posicionar el apuntador del mouse sobre el elemento div
let actualizarTooltip = function (e) {

    let divmensaje = document.getElementById("divmensaje");
    divmensaje.style.left = (e.clientX + document.body.scrollLeft + 15) + 'px';
    divmensaje.style.top = (e.clientY + document.body.scrollTop + 15) + 'px';
}

//Funcion ajax para el envío/recepción //Funcion para mostrar el tooltip al posicionar el apuntador del mouse sobre el elemento div
let recuperarServidorTooltip = function (codigo) {
    
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET", `../php/17.obtenerTooltip.php?codigo=${codigo}`,true)
    conexion.send();
}

//
let procesarEventos = function () {
    
    let divmensaje = document.getElementById("divmensaje");
    divmensaje.style.visibility = "visible";

    if (conexion.readyState == 4 ) {
        

        if (conexion.status == 200) {

            divmensaje.innerHTML = conexion.responseText;
            
        } else {
            
            divmensaje.innerHTML = `Error: ${conexion.status}`;
        }
    } else {

        divmensaje.innerHTML =  `<img src="../img/loader2.gif">`;
    }
}

//Variable de conexion global y evento load para iniciar la funcion inicializarEventos en cuanto el sitio web haya cargado completamente
var conexion;
addEventListener("load", inicializarEventos, false);