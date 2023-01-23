
addEventListener('load', () => {
    let boton = document.querySelector("#solicitarInfo");
    boton.addEventListener("click", presionarBoton, false);
}, false)

let presionarBoton = function () {

    let cadena = `{
        "nombre"            :   "Juan Carlos Maldonado",
        "fecha_ingreso"     :   "20/12/1990",
        "numero_documento"  :   12421341,
        "sueldos"           :   [3000,3150,3350]
    }`;

    let empleado = JSON.parse(cadena);

    imprimirInfo(empleado);
}

let imprimirInfo = function (datos){

    console.log(`El empleado: ${datos.nombre}\nnumero de empleado: ${datos.numero_documento}\nfecha de ingreso: ${datos.fecha_ingreso}\nsus sueldos: $${datos.sueldos[0]}.00, $${datos.sueldos[1]}.00 y $${datos.sueldos[2]}.00`);
}