<?php

    require $_SERVER['DOCUMENT_ROOT'] . "/php/Usuario.php";

    header('Content-Type: text/txt; charset=utf8');

    sleep(1);

    $id = $_REQUEST["dni"];

    $usuario = new Usuario();

    $array = $usuario -> listarUsuarios($id);

    while($row = $array->fetch(PDO::FETCH_ASSOC)){
        $datos = $row;
    }

    $cadena = json_encode($datos);
    echo $cadena;
?>