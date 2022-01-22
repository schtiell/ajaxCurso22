console.log("Pasando datos con el metodo get");

addEventListener('load', inicializarEventos, false);

function inicializarEventos () {

    let ref = document.querySelector('#votofoto1');
    let array1 = ref.querySelectorAll('li');
    let array2 = ref.querySelectorAll('a');

    for (let i = 0; i < array2.length; i++) {

        array1[i].addEventListener('mouseover', entrar, false);
        array1[i].addEventListener('mouseout', salir, false);
        array2[i].addEventListener('click', presionBoton, false);
    }
}


function entrar (evt) {

    let ref = evt.target;
    let obj = document.querySelector("#votofoto1");
    let array = obj.querySelectorAll("li");

    for (let i = 0; i < ref.firstChild.nodeValue; i++) {

        array[i].firstChild.style.background = '#f00';
        array[i].firstChild.style.color = '#fff';
    }
}


function salir (evt) {

    let ref = evt.target;
    let obj = document.querySelector("#votofoto1");
    let array = obj.querySelectorAll("li");

    for (let i = 0; i < ref.firstChild.nodeValue; i++) {

        array[i].firstChild.style.background = '#f7f8e8';
        array[i].firstChild.style.color = '#f00';
    }
}


function presionBoton (evt) {

    evt.preventDefault();
    let ref = evt.target;
    cargarVoto(ref.firstChild.nodeValue);
}

var conexion;

function cargarVoto (voto) {

    let aleatorio = Math.random();

    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET",`./php/06.pasandoDatosMetodoGet.php?voto=${voto}&aleatorio=${aleatorio}`, false);
    conexion.send();
}


function procesarEventos () {

    let resultados = document.querySelector("#resultados");

    console.log(conexion.readyState);

    if (conexion.readyState == 4) {

        resultados.innerHTML = 'Gracias';

    }else{
        resultados.innerHTML = 'Procesando...';
    }
}