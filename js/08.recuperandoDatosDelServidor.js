

let inicializarEventos = function (){

    let referencia;
    referencia = document.querySelector("#fecha");
    let array = referencia.querySelectorAll("a");

    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener("click", presionEnlace, false);
    }
}

let presionEnlace = function (e){

    e.preventDefault();
    let url = e.target.getAttribute("href");
    verComentarios(url);

}

let verComentarios = function (url) {

    if (url == ''){
        return;
    }else{
        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = procesarEventos;
        conexion.open("GET", url, true);
        conexion.send();
    }
}

let procesarEventos = function () {

    let detalles = document.querySelector("#comentarios");

    if(conexion.readyState == 4){
        detalles.innerHTML = conexion.responseText;
    }else{
        detalles.innerHTML = 'Cargando...';
    }
}

var conexion;
addEventListener("load", inicializarEventos, false);