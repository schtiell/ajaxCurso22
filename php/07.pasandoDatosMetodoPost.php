<?php

    header('Content-Type: text/html; charset: utf-8');

    //Apertura del archivo comentarios.txt
    $file = fopen('comentarios.txt', 'a')or die('No se puede abrir el archivo');

    //Agregando al archivo los valores del formulario
    fputs($file, 'Nombre: '.$_REQUEST['nombre']."\n");
    fputs($file, 'Comentarios: '.$_REQUEST['comentarios']."\n\n");

    //Cerrando el archivo
    fclose($file);

?>