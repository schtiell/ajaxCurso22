<?php

    header('Content-Type: text/html; charset=utf-8');

    $cuadrado = $_REQUEST['numero'] * $_REQUEST['numero'];

    echo 'El cuadrado del numero es: '.$cuadrado;
?>