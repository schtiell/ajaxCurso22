<?php

    //Importando las variables para la conexión de la bd
    require_once './config.php';

    //Conexion a la base de datos con manejo de excepciones para errores en tiempo de ejecución
    try {

        $conn = new PDO("mysql:host=$host; dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected to $dbname at $host successfully";

    } catch (PDOException $e) {

        die("Could not connect to the database $dbname: " .$e -> getMessage());
    }
?>