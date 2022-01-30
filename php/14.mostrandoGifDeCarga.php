<?php
    header('Content-Type: text/html; charset=UTF-8');

    $file = fopen('14.comentarios.txt', 'a') or die ('No se puede abrir el archivo');

    fputs($file, 'Nombre: '.$_REQUEST['nombre']."\n");
    fputs($file, 'Comentarios: '.$_REQUEST['comentarios']."\n");
    fputs($file, "==================================\n");
    fputs($file, "\n");

    fclose($file);

    sleep(1);
?>