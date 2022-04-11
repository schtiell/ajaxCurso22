<?php

    require_once $_SERVER['DOCUMENT_ROOT'].'/php/Empleado.php';

    header('Content-Type: text/txt; charset=utf8');

    $user = new Empleado();

    $array = $user->obtenerEmpleados();

    $data = $array ->fetch (PDO::FETCH_ASSOC);

    $cadena = json_decode($data);

    echo $cadena;
?>