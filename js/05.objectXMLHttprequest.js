let inicializarEventos = function (){

    let boton = document.querySelector('#boton');
    boton.addEventListener('click', presionarBoton, false);
}

let presionarBoton = function (e) {

    let nombre = document.querySelector('#nombre').value;
    let voto = document.querySelector('#voto').value;

    cargarDatos(nombre, voto);
}

let cargarDatos = function (nombre, voto) {
    
    xhttpr = new XMLHttpRequest();

    xhttpr.onreadystatechange = procesarDatos;

    xhttpr.open('GET', `../php/05.objectXMLHttprequest.php?puntaje=${voto}&nombre=${nombre}`, true);

    xhttpr.send();
}


let procesarDatos = function () {
    
    let impresion = document.querySelector('#resultados');

    if (xhttpr.readyState == 4 && xhttpr.status == 200) {
        
        impresion.style.display =  "block";
        impresion.innerHTML = xhttpr.responseText;
        
    } else {
        impresion.innerHTML = "Cargando...";
    }  
}

var xhttpr;
addEventListener('load', inicializarEventos, false);