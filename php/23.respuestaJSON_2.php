<?php

    #Importando la clase Usuario y el document root
    require $_SERVER['DOCUMENT_ROOT'] . "/php/Usuario.php";

    header('Content-Type: text/txt; charset=utf8');

    #Un segundo antes de procesar la solicitud
    sleep(1);

    #Almacena en variable id el valor del dni enviado mediante la url
    $id = $_REQUEST["dni"];

    #Creación de la instancia usuario
    $usuario = new Usuario();

    #Array declarado para almacenar la información devuelta por el metodo listarUsuarios de la clase usuario
    $array = $usuario -> listarUsuarios($id);

    #PDOStatement obtiene la fila de un conjunto de datos. PDO::FETCH_ASSOC: devuelve un array indexado por los nombres de las columnas del conjunto de resultados.
    $row = $array->fetch(PDO::FETCH_ASSOC);

    #Se codifica el valor en formato json
    $cadena = json_encode($row);

    #Se imprime el valor de la variable cadena
    echo $cadena;
?>