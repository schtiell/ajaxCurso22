console.log("Mostrar tooltip sobre elemento html!!");

//
let inicializarEventos = function () {

    let array = document.getElementsByTagName('div');

    for (let i = 0; i < array.length; i++) {
        
        array[i] = addEventListener('mouseover', mostrarTooltip, false);
        array[i] = addEventListener('mouseout', ocultarTooltip, false);
        array[i] = addEventListener('mousemove', actualizarTooltip, false);       
    }
    
    let elemento = document.createElement('div');
    elemento.setAttribute('id', 'divmensaje');
    array = document.getElementsByTagName('div');
    array[0].appendChild(elemento);
}

//
let mostrarTooltip = function (e) {
    
    let divmensaje = document.getElementById('divmensaje');
    divmensaje.style.visibility = "visible";
    divmensaje.style.left = (e.clientX + document.body.scrollLeft + 15)+'px';
    divmensaje.style.top = (e.clientY + document.body.scrollTop + 15) + 'px';
    let ref;
    ref = e.target;
    recuperarServidorTooltip(ref.getAttribute("id")); 
}

//
let ocultarTooltip = function (e) {
    
    let divmensaje = document.getElementById("divmensaje");
    divmensaje.style.visibility = "hidden";
}

//
let actualizarTooltip = function (e) {

    let divmensaje = document.getElementById("divmensaje");
    divmensaje.style.left = (e.clientX + document.body.scrollLeft + 15) + 'px';
    divmensaje.style.top = (e.clientY + document.body.scrollTop + 15) + 'px';
}

//
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

        divmensaje.innerHTML =  `<img src="../img/loading_2.gif">`;
    }
}

//Variable de conexion global y evento load para iniciar la funcion inicializarEventos en cuanto el sitio web haya cargado completamente
var conexion;
addEventListener("load", inicializarEventos, false);