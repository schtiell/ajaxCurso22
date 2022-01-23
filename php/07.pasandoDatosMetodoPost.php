
<?php

    header('Content-Type: text/html; charset: utf-8');

    $file = fopen('comentarios.txt', 'a')or die('No se puede abrir el archivo');
    fputs($file, 'Nombre: '.$_REQUEST['nombre']."\n");
    fputs($file, 'Comentarios: '.$_REQUEST['comentarios']."\n\n");
    fclose($file);

?>