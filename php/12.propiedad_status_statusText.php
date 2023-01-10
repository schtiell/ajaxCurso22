<?php

    header('Content-Type: text/html; charset=utf-8');

    $numero = $_REQUEST['numero'];

    $cuadrado = $numero * $numero;

    echo 'El cuadrado del numero es: '.$cuadrado;
?>