<?php

    header('Content-Type: text/html; charset=utf-8');

    $numero = $_REQUEST['numero'];

    $cuadrado = $numero * $numero;
    
    echo 'El numero al cuadrado es: '.$cuadrado; 

?>