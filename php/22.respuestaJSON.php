<?php

    #Importando la clase Usuario
    require_once $_SERVER['DOCUMENT_ROOT']."/php/Usuario.php";

    header('Content-Type: text/txt; charset=utf8');

    #Tiempo de espera de un segundo para devolver una respuesta del servidor
    sleep(1);

    #Almancenado el id enviado por Ajax mediante la url en una variable
    $id = $_REQUEST['dni'];

    #Creando una instancia de la clase usuario
    $usuario = new Usuario();

    #Invocando al metodo listarUsuario de la clase usuario enviando como argumento el id
    $array = $usuario -> listarUsuarios($id);

    #Recorriendo la respuesta y almacenando cada dato en una variable
    while($row = $array->fetch(PDO::FETCH_ASSOC)){
        # code...
        $user = $row['usuario'];
        $nombre = $row['nombre'];
        $sexo = $row['sexo'];
        $email = $row['email'];
        $telefono = $row['telefono'];
        //$datos = $row;
    }

    #Imprimiendo la respuesta generada por el servidor y devualta al usuario de forma asincrona con ajax
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