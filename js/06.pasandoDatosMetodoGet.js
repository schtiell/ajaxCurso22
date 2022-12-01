
let inicializarEvento = function () {

	let votos = document.querySelector('#voto');
    let items =  votos.querySelectorAll('li');
	let anclas = votos.querySelectorAll('a');

	for (let i = 0; i < anclas.length; i++) {
    
    items[i].addEventListener('mouseover', entrar, false);
    items[i].addEventListener('mouseout', salir, false);
    anclas[i].addEventListener('click', votar, false);
	}
}

let entrar = function (e){

    let referencia = e.target;

    let votos = document.querySelector('#voto');
    let items = votos.querySelectorAll('li');

    for (let i = 0; i < referencia.firstChild.nodeValue; i++) {
    
        items[i].firstChild.style.background = "#046DA5";
        items[i].firstChild.style.color = '#fff';
    }
}

let salir = function (e){

    let referencia = e.target;
    let votos = document.querySelector('#voto');
    let items = votos.querySelectorAll('li');

    for (let i = 0; i < referencia.firstChild.nodeValue; i++) {
    
        items[i].firstChild.style.background = '#3BA1D8';
        items[i].firstChild.style.color = '#fff';
    }
}

let votar = function (e){

    e.preventDefault();
    let referencia = e.target;
    cargarVoto(referencia.firstChild.nodeValue);
}

let cargarVoto = function (voto) {

    let numerorandom = Math.floor(Math.random() * 100);

    xhttpr = new XMLHttpRequest();
    xhttpr.onreadystatechange = procesarEventos;
    xhttpr.open('GET', `../php/06.pasandoDatosMetodoGet.php?voto=${voto}&numrandom=${numerorandom}`,true);
    xhttpr.send();
}


let procesarEventos = function (){

	let imprespuesta = document.querySelector('#resultados');

	if (xhttpr.readyState == 4 && xhttpr.status == 200) {
		
		imprespuesta.innerHTML = 'Voto registrado';

	} else {
		
		imprespuesta.innerHTML = 'cargando...';
	}
}

var xhttpr;
addEventListener('load', inicializarEvento, false)