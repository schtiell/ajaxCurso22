<?php

    header('Content-Type: text/html; charset=utf-8');

    $codigo = $_REQUEST['codigo'];

    switch ($codigo) {
        case 'c1':
            # code...
            echo "<p> Primer tooltip </p>";
            break;
        
        case 'c2':
            # code...
            echo "<p> Segundo tooltip </p>";
            break;
        
        case 'c1':
            # code...
            echo "<p> Tercer tooltip </p>";
            break;
        
        default:
            # code...
            echo "<p> Es el último tooltip </p>";
            break;
    }
?>