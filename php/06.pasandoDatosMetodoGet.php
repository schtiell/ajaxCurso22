<?php

    header('Content-Type: text/html; charset=utf-8');

    $file = fopen('../php/votos.txt','a') or die ("No se puede abrir el archivo");

    fputs($file, $_REQUEST['voto']."-".$_REQUEST['numrandom']."\n");

    fclose($file);
?>