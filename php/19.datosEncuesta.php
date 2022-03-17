<?php

    require_once $_SERVER['DOCUMENT_ROOT']."/php/Encuesta.php";
    require_once $_SERVER['DOCUMENT_ROOT']."/php/19.Grafica.php";

    $pregunta = $_REQUEST['opcion'];
    $opcion = new Encuesta();

    $arreglo = $opcion -> mostrarDatosEncuesta();
    while ($row = $arreglo -> fetch(PDO::FETCH_ASSOC)) {
        # code...
        $pregunta1 = $row['pregunta1'];
        $pregunta2 = $row['pregunta2'];
        $pregunta3 = $row['pregunta3'];
    }

    switch ($pregunta) {
        case 1:
            # code...
            $array = $opcion -> actualizarDatosEncuesta('pregunta1', $pregunta1, 1);
            break;

        case 2:
            # code...
            $array = $opcion -> actualizarDatosEncuesta('pregunta2', $pregunta2, 1);
            break;

        case 3:
            # code...
            $array = $opcion -> actualizarDatosEncuesta('pregunta3', $pregunta3, 1);
            break;

        default:
            # code...
            break;
    }

    $arreglo = $opcion -> mostrarDatosEncuesta();
    while ($row = $arreglo -> fetch(PDO::FETCH_ASSOC)) {
        # code...
        $pregunta1 = $row['pregunta1'];
        $pregunta2 = $row['pregunta2'];
        $pregunta3 = $row['pregunta3'];
    }

    $barra = new Barra(500,300);
    $barra -> fijarprofundidad(20);
    $barra -> sumar($pregunta1,"PHP");
    $barra -> sumar($pregunta2,"ASP");
    $barra -> sumar($pregunta3,"JSP");
    $barra -> graficar();
?>