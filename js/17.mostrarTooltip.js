
//Función para inicializar los eventos, al seleccionar los elementos con clase .cuadradito
function inicializarEventos() {

  var array = document.getElementsByClassName('cuadradito');

  for(i=0; i<array.length; i++) {

    array[i].addEventListener('mouseover', mostrarToolTip, false);
    array[i].addEventListener('mouseout', ocultarToolTip, false);
    array[i].addEventListener('mousemove', actualizarToolTip, false);
  }

  //Creación de elemento tooltip
  let tooltip = document.createElement('div');
  tooltip.setAttribute('id','divmensaje');

  array = document.querySelectorAll('body');
  array[0].appendChild(tooltip);

}

//Funcion para mostras el tooltip al pasar el mouse sobre el elemento
function mostrarToolTip(e){

  let tooltip = document.querySelector("#divmensaje");
  tooltip.style.visibility = "visible";
  tooltip.style.left = (e.clientX + document.body.scrollLeft + 15)+'px';
  tooltip.style.top = (e.clientY + document.body.scrollTop + 15)+'px';
  
  let referencia;
  referencia = e.target;
  recuperarServidorTooltip(referencia.getAttribute('id'));
}

//Funcion para actualizar la posicion del tooltip deacuerdo al moviento del mouse
function actualizarToolTip(e) {

  let tooltip = document.querySelector("#divmensaje");
  tooltip.style.left = (e.clientX + document.body.scrollLeft + 15)+'px';
  tooltip.style.top = (e.clientY + document.body.scrollTop + 15)+'px';
}

//Función para ocultar el tooltip al quitar el mouse del elemento html
function ocultarToolTip(e){

  let tooltip = document.querySelector("#divmensaje");
  tooltip.style.visibility = "hidden";
}

//Función para solicitar la información al servidor deacuerdo al codigo enviado al servidor de manera asíncrona
function recuperarServidorTooltip(codigo){

  conexion=new XMLHttpRequest();
  conexion.onreadystatechange = procesarEventos;
  conexion.open('GET','../php/17.obtenerTooltip.php?codigo='+codigo, true);
  conexion.send();
}

//Función para procesar los 
function procesarEventos() {

  let tooltip = document.querySelector("#divmensaje");
  tooltip.style.visibility = "visible";

  if(conexion.readyState == 4 && conexion.status == 200) {

    tooltip.innerHTML=conexion.responseText;

  } else {

    tooltip.innerHTML = '<img src="../img/loader2.gif">';
  }
}

//Variable global de conexion y espera del evento load para inicializar los eventos del sitio
var conexion;
addEventListener('load',inicializarEventos,false);