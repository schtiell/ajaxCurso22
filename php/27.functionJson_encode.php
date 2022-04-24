<?php

    header('Content-Type: text/txt; charset=utf8');

    $cadena = json_decode(stripslashes($_REQUEST['cadena']));

    echo 'Nombre: '     . $cadena->nombre   . '<br>';
    echo 'Apellido: '   . $cadena->apellido . '<br>';
    echo 'Edad: '       . $cadena->edad     . '<br>';
    echo 'Correo electrónico: '     . $cadena->correo   . '<br>';
    echo 'Primer sueldo: ' . $cadena->sueldos[0] . '<br>';
    echo 'Ultimo sueldo: ' . $cadena->sueldos[4] . '<br>';
?>