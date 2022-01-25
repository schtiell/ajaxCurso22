//console.log("Recuperando los datos del servidor con XML");


/** 
 *  EJERCICIO PROPUESTO PARA MODIFICAR EL EJEMPLO
 * 
    Modificar el problema resuelto de tal manera que no requiera un botón para actualizar los datos del pais. Se deben recuperar los datos inmediatamente seleccionado un item del control select.


let iniciarEventosEjercicio = function(){

    let obj = document.querySelector("#pais");
    obj.addEventListener("change", cambiarOptionSelect, false);
}

let cambiarOptionSelect =  function(e){

    let obj = document.querySelector("#pais").value;

    if (obj == '0'){

        let resultados = document.querySelector("#resultados");
        resultados.innerHTML = "Selecciona otra opción";

    }else {
        recuperarDatos(obj);
    }
    
}

**/

let inicializarEventos = function (){

    let obj = document.querySelector("#boton1");
    obj.addEventListener("click", presionBoton, false);
}


let presionBoton = function (e){

    console.log(e);

    let obj = document.querySelector("#pais").value;

    console.log(obj);

    if (obj == '0'){

        let resultados = document.querySelector("#resultados");
        resultados.innerHTML = "Selecciona otra opción";
        resultados.style.display = "block";

    }else{

        recuperarDatos(obj);
    }
    
}


let recuperarDatos = function (pais){

    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open('GET', `./php/09.recuperandoDatosDelServidorXML.php?pa=${pais}`, true)
    conexion.send();
}


let procesarEventos = function (){

    let resultados = document.querySelector("#resultados");

    //console.log(conexion.readyState);

    if(conexion.readyState == 4){

        let xml = conexion.responseXML;

            let capital = xml.getElementsByTagName("capital");
            let superficie = xml.getElementsByTagName("superficie");
            let idioma = xml.getElementsByTagName("idioma");
            let poblacion = xml.getElementsByTagName("poblacion");
            
            resultados.innerHTML = `Capital: ${capital[0].firstChild.nodeValue} <br>
                                    Superficie: ${superficie[0].firstChild.nodeValue} <br>
                                    Idioma: ${idioma[0].firstChild.nodeValue}<br>
                                    Población: ${poblacion[0].firstChild.nodeValue}<br>`;
        
            
            resultados.style.display = "block";

    }else{

        resultados.innerHTML = 'Cargando...';
    }
}

var conexion;
addEventListener("load",inicializarEventos,false);
//addEventListener("load",iniciarEventosEjercicio,false);