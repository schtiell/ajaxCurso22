console.log("Mostrar tooltip sobre elemento html!!");

//
let inicializarEventos = function () {

    let array = document.querySelectorAll("div");

    for (let i = 0; i < array.length; i++) {
        
        array[i] = addEventListener("mouseover", mostrarTooltip, false);
        array[i] = addEventListener("mouseout", ocultarTooltip, false);
        array[i] = addEventListener("mousemove", actualizarTooltip, false);       
    }
    
    let div = document.createElement("div");
    div.setAttribute("id", "divMensaje");
    array = document.querySelectorAll("body");
    array[0].appendChild(div);
}

//
let mostrarTooltip = function (e) {
    
    let divMensaje = document.querySelector("#divMensaje");
    divMensaje.style.visibility = "visible";
    divMensaje.style.left = (e.clientX + document.body.scrollLeft + 15) + "px";
    divMensaje.style.top = (e.clientY + document.body.scrollTop + 15) + "px";
    let ref;
    ref = e.target;
    recuperarServidorTooltip(ref.getAttribute("id")); 
}

//
let ocultarTooltip = function (e) {
    
    let divMensaje = document.querySelector("#divMensaje");
    divMensaje.style.visibility = "hidden";
}

//
let actualizarTooltip = function (e) {

    let divMensaje = document.querySelector("#divMensaje");
    divMensaje.style.left = (e.clientX + document.body.scrollLeft + 15) + "px";
    divMensaje.style.top = (e.clientY + document.body.scrollTop + 15) + "px";
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
    
    let divMensaje = document.querySelector("#divMensaje");
    divMensaje.style.visibility = "visible";

    if (conexion.readyState == 4 ) {
        

        if (conexion.status == 200) {

            divMensaje.innerHTML = conexion.responseText;
            
        } else {
            
            divMensaje.innerHTML = `Error: ${conexion.status}`;
        }
    } else {

        divMensaje.innerHTML =  `<img src="../img/loading_2.gif">`;
    }
}


//
var conexion;
addEventListener("load", inicializarEventos, false);