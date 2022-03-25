console.log("Manejo de información mediante objetos JSON");



let inicializarEventos = function() {

    let boton = document.querySelector("#solicitarInfo");
    boton.addEventListener('click', presionarBoton, false);
}

let presionarBoton = function (e) {

    let cadena=`{
                    "microprocesador":"pentium",
                    "memoria":1024,
                    "discos": [80, 250]
                }`;

    let pc = JSON.parse(cadena);
    
    imprimirDatos(pc);
}

let imprimirDatos = function (pc) {

    alert (` Microprocesador: ${pc.microprocesador}
        Memoria: ${pc.memoria} Mb    
        Discos: ${pc.discos[0]}, ${pc.discos[1]} Mb`);
}

addEventListener("load", inicializarEventos, false);