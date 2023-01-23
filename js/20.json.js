addEventListener('load', () => {

    let boton = document.querySelector("#solicitarInfo");
    boton.addEventListener('click', presionarBoton, false);
    }
, false);

let presionarBoton = function (e) {

    let cadena =`{
                    "microprocesador":"pentium",
                    "memoria":1024,
                    "discos": [80, 250]
                }`;

    let pc = JSON.parse(cadena);
    
    imprimirDatos(pc);
}

let imprimirDatos = function (pc) {

    alert(`Microprocesador: ${pc.microprocesador}\nMemoria: ${pc.memoria} Mb\nDiscos: ${pc.discos[0]}, ${pc.discos[1]} Mb`);

    console.log(`Microprocesador: ${pc.microprocesador}\nMemoria: ${pc.memoria} Mb\nDiscos: ${pc.discos[0]}, ${pc.discos[1]} Mb`);
}