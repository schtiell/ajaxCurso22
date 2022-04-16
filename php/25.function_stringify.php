<?php

    require_once $_SERVER['DOCUMENT_ROOT'].'/php/Empleado.php';

    header('Content-Type: text/txt; charset=utf8');

    $empleado = new Empleado();
    $array = $empleado->obtenerEmpleados();

    while ($row = $array->fetch(PDO::FETCH_ASSOC)) {
        $data[]= $row;
    }

    $respuesta = json_encode($data);
    echo $respuesta;
?>