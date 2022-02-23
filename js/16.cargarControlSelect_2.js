
//Funcion que esta a la espera del evento cambio del elemento con id carrera
let inicializarEventos = function () {
    
    let carrera = document.querySelector("#carrera");
    carrera.addEventListener("change", mostrarMaterias, false);
}

//FUncion qre recibe como parametor el evento, ademas optiene el valor de la opción seleccionada del elemento con id #carrera
let mostrarMaterias = function (e) {

    let carrera = document.querySelector("#carrera").value;

    //Si el valor es diferente de 0
    if (carrera != 0) {

        //Se crea la instancia de la clase XMLHttpRequest()
        conexion = new XMLHttpRequest();
        //Cuando ocurre un cambio de estado de la instancia se llama a la función procesarEventos
        conexion.onreadystatechange = procesarEventos;
        //Se envia el valor optenido en la variable carrea medianel el metodo GET a traves de la url, de forma asincrona(true)
        conexion.open("GET", `../php/16.materiasPorCarrera.php?codigo=${carrera}`,true);
        //Llamando al metodo send()
        conexion.send();

    //Si el valor seleccionado es 0    
    } else { 
        //Se obtiene el elemento con id #materias
        let materias = document.querySelector("#materias");
        //Se escribe sobre el elemento HTML 
        materias.innerHTML = "<option>Debes elegir una carrera</option>";
    }
}

//La funcion comprueba que la funcion readyState sea = a 4 ya que indica que la peticion fue completada
let procesarEventos = function () {

    if (conexion.readyState == 4){
        console.log(`Success ${conexion.readyState}`);

        //Valida que la respuesta HTTP sea 200 es decir satisfactoria
        if (conexion.status == 200) {
            //console.log(`Success ${conexion.status}`);

            let espera = document.querySelector("#espera");
            espera.innerHTML = " ";

            let respuestaXML = conexion.responseXML;
            
            let arrayMaterias = respuestaXML.querySelectorAll('materia');
            console.log(arrayMaterias);

            let materias = document.querySelector("#materias");

            materias.options.length = 0;

            for (let i = 0; i < arrayMaterias.length; i++) {

                let opcion = document.createElement('option');
                let texto = document.createTextNode(arrayMaterias[i].firstChild.nodeValue);
                opcion.appendChild(texto);
                materias.appendChild(opcion);

            }

        } else {
            console.log(`Status actual ${conexion.status}`);
        }

    }else{

        console.log(`Error status ${conexion.readyState}`);
        let espera = document.querySelector("#espera");
        espera.innerHTML = "<img src='../img/loading.gif'>";
    }
}

//Variable global de conexion e ejecución del evento load una vez que el sitio ha cargado completamente. Llamando a la función inicializarEventos
var conexion;
addEventListener("load", inicializarEventos, false);