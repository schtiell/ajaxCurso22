<?php

    require_once $_SERVER['DOCUMENT_ROOT']."/php/Usuario.php";

    header('Content-Type: text/txt; charset=utf8');

    sleep(1);

    $id = $_REQUEST['dni'];

    $usuario = new Usuario();

    $array = $usuario -> listarUsuarios($id);

    while($row = $array->fetch(PDO::FETCH_ASSOC)){
        # code...
        $user = $row['usuario'];
        $nombre = $row['nombre'];
        $sexo = $row['sexo'];
        $email = $row['email'];
        $telefono = $row['telefono'];
        $datos = $row;
    }

    echo "{
        \"Usuario\":\"$user\",
        \"Nombre\":\"$nombre\",
        \"Sexo\":\"$sexo\",
        \"Correo\":\"$email\",
        \"Telefono\":\"$telefono\"
    }";
    //$cadena = json_encode($datos);
    //echo $cadena;
?>