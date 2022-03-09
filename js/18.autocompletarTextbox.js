console.log("Autocompletando el textbox");

//Funcion inicilizarEventos
let inicializarEventos = function () {
    //Code..
    let palabra = document.querySelector('#palabra');
    palabra.addEventListener('keyup', presionarTecla, false);
}

//
let presionarTecla = function (e){
    //Code..
    palabra = document.querySelector('#palabra').value;
    
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open('GET', `../php/18.autocompletarTextbox.php?palabra=${palabra}`, true);
    conexion.send();
}

//
let procesarEventos = function () {
    //Code..

    let respuesta = document.querySelector('#resultados');

    if (conexion.readyState == 4){

        if (conexion.status == 200) {
            
            let xml = conexion.responseXML;
            let palabras = xml.querySelectorAll('palabra');

            respuesta.innerHTML = "";

            for (let i = 0; i < palabras.length; i++) {
                //
                respuesta.innerHTML = respuesta.innerHTML + palabras[i].firstChild.nodeValue +'<br>';
                
            }
            
        } else {
            console.log(conexion.status);
        }

    }else{
        respuesta.innerHTML = '<img src="../img/loader2.gif" />';
    }
}

//Varible de conexion
let conexion;
addEventListener('load', inicializarEventos, false);