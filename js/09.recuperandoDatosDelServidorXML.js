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

var conexion;
addEventListener("load", () => {
    let obj = document.querySelector("#boton1");
    obj.addEventListener("click", presionBoton, false);
}, false)

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
    conexion.open('GET', `./php/09.recuperandoDatosDelServidorXML.php?pais=${pais}`, true)
    conexion.send();
}

let procesarEventos = function (){

    let resultados = document.querySelector("#resultados");

    if(conexion.readyState == 4 && conexion.status == 200){

        let xml = conexion.responseXML;
        let headline = document.querySelector('.headline');

            let capital = xml.getElementsByTagName("capital");
            let superficie = xml.getElementsByTagName("superficie");
            let idioma = xml.getElementsByTagName("idioma");
            let poblacion = xml.getElementsByTagName("poblacion");
            
            resultados.innerHTML = `Capital: ${capital[0].firstChild.nodeValue} <br>
                                    Superficie: ${superficie[0].firstChild.nodeValue} <br>
                                    Idioma: ${idioma[0].firstChild.nodeValue}<br>
                                    Población: ${poblacion[0].firstChild.nodeValue}<br>`;
        
            headline.style.display = "block";
            resultados.style.display = "block";

    }else{

        resultados.innerHTML = 'Cargando...';
    }
}