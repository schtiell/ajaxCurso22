<?php

    require_once $_SERVER['DOCUMENT_ROOT'].'/php/Empleado.php';

    header('Content-Type: text/txt; charset=utf8');

    $user = new Empleado();

    $array = $user->obtenerEmpleados();

    while ($row = $array->fetch (PDO::FETCH_ASSOC)){
        $data[] = $row;
    }
    $cadena = json_encode($data);
    echo $cadena;
?>