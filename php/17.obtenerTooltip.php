<?php

    header('Content-Type: text/html; charset=utf-8');

    $codigo = $_REQUEST['codigo'];

    switch ($codigo) {
        case 'c1':
            # code...
            sleep(1);
            echo "<p> Primer tooltip </p>";
            break;
        
        case 'c2':
            # code...
            sleep(1);
            echo "<p> Segundo tooltip </p>";
            break;
        
        case 'c3':
            # code...
            sleep(1);
            echo "<p> Tercer tooltip </p>";
            break;

        case 'c4':
            # code...
            sleep(1);
            echo "<p> Cuarto tooltip </p>";
            break;
    }
?>