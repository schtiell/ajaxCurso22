<?php

    header('Content-Type: text/html; charset=utf-8');

    //Se abre el documento puntaje.txt si no existe lo crea y escribe al final de la ultima linea
    $file = fopen("../php/puntaje.txt", "a") or die ("1. No se pudo abrir el archivo para insertar los datos");

    $nombre = $_REQUEST['nombre'];
    $voto = $_REQUEST['puntaje'];

    //Se agregan los valores enviados mediante la url, el nombre y el voto
    fputs($file, "<p>"."<span>Nombre: </span>". $nombre ."</p>");
    fputs($file, "<p>"."<span>Voto: </span>". $voto ."</p>");
    
    //Se cierra el archivo
    fclose($file);

     //Se abre el documento puntaje.txt en modo lectura unicamente e inicia su lectura en la primera linea
    $file = fopen("../php/puntaje.txt", "r") or die ("2. No se pudo abrir el archivo, para realizar impresión");

    //Comprueba si se ha llegado a la ultima linea del archivo
    while (!feof($file)){

        //Obtiene los caracteres de la linea actual
        $linea = fgets($file);

        //Imprime la linea actual
        echo $linea;
    }

    //Se cierra el arhivo
    fclose($file);
?>