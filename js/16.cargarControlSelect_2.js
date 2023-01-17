
//Variable global de conexion
var conexion;


//Una  vez que se dispara el evento load, se ejecuta la funcionón anonima que llama al elemento html con id carrera, que a su vez dispara un evento cada vez que se elige entre sus opciones disponibles.
addEventListener("load", () => {
    let carrera = document.querySelector("#carrera");
    carrera.addEventListener("change", mostrarMaterias, false);
}, false);

//FUncion qee recibe como parametor el evento, ademas obtiene el valor de la opción seleccionada del elemento con id #carrera
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

    if (conexion.readyState == 4 && conexion.status == 200){
        console.log(`Success ${conexion.readyState}`);

        //Valida que la respuesta HTTP sea 200 es decir satisfactoria
        if (conexion.statusText == "OK") {
            //console.log(`Success ${conexion.status}`);

            //Seleccionando el elemento html con id espera y escribiendo espacio en blanco en el DOM
            let espera = document.querySelector("#espera");
            espera.innerHTML = " ";

            //Almacenando la respuesta en fotmato xml del servidor
            let respuestaXML = conexion.responseXML;
            
            //Como la respuesta es un array con multiples etiqutas xml llamadas materia entonces se utiliza la propiedad querySelectorAll()
            let arrayMaterias = respuestaXML.querySelectorAll('materia');
            console.log(arrayMaterias);

            //S llama al elemento select con id materias
            let materias = document.querySelector("#materias");

            //Se pone en cero la cantidad de opciones del elemento html select materias
            materias.options.length = 0;

            //El siguiente ciclo for crea un elemento html llamado opcion
            //Crea un nodo texto con el valor del primer hijo de la posicion elemento en la posicion actual del arry.
            //Agrega el nodo de texto al elemento opcion
            //Agrega el elemento opcion al elemento materias
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