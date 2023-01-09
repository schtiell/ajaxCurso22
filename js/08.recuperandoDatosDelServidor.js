

var conexion;
addEventListener("load", () => {

    let comentarios = document.querySelector("#fecha");
    let anclas = comentarios.querySelectorAll("a");

    for (let i = 0; i < anclas.length; i++) {

        anclas[i].addEventListener("click", presionEnlace, false);
    }
}, false);

let presionEnlace = e => {

    e.preventDefault();

    let enlace = e.target;

    let url = enlace.getAttribute("href");

    verComentarios(url);

}

let verComentarios = url => {

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

    let printArea = document.querySelector("#comentarios");

    if(conexion.readyState == 4 && conexion.status == 200){

        printArea.style.display = "block";
        printArea.innerHTML = conexion.responseText;

    }else{

        detalles.innerHTML = 'Cargando...';
    }
}