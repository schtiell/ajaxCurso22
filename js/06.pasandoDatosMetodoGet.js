console.log("Pasando datos con el metodo get");


let inicializarEventos = function (){
    
    let ref = document.getElementById('votofoto1');
    let array_li = ref.getElementsByTagName("li");
    let array_a = ref.getElementsByTagName("a");

    for (let i = 0; i < array_a.length; i++) {
        array_li[i].addEventListener("mouseover", entrar, false);
        array_li[i].addEventListener("mouseout", salir, false);
        array_a[i].addEventListener("click", presionBoton, false);
    }
}


let entrar = function (e) {
    
    let ref = e.target;
    let obj = document.getElementById("votofoto1");
    let array = obj.getElementsByTagName("li");

    for (let i = 0; i < ref.firstChild.nodeValue; i++) {
        array[i].firstChild.style.background = '#f00';
        array[i].firstChild.style.color = '#fff';
    }
}


let salir = function (e) {

    let ref = e.target;
    let obj = document.getElementById ("votofoto1");
    let array = obj.getElementsByTagName("li"); 

    for (let i = 0; i < ref.firstChild.nodeValue; i++) {
        array[i].firstChild.style.background = '#f00';
        array[i].firstChild.style.color = '#fff';
    }
}


let presionBoton = function (e) {

    e.preventDefault();
    let ref = e.target;
    cargarVoto(ref.firstChild.nodeValue); 
}


let cargarVoto = function (voto) {
    
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    let aleatorio = Math.random();
    conexion.open("GET", `./php/06.pasandoDatosMetodoGet.php?voto=${voto}&aleatorio=${aleatorio}`,false);
    conexion.send();
}


let procesarEventos = function () {

    let resultados = document.getElementById("resultados");

    if (conexion.readyState == 4) {
        resultados.innerHTML = 'Gracias';
    }else{
        resultados.innerHTML = 'Procesando...';
    }
}

var conexion;
addEventListener('load', inicializarEventos, false);

