<?php

    require_once $_SERVER['DOCUMENT_ROOT']."/php/Encuesta.php";
    require_once $_SERVER['DOCUMENT_ROOT']."/php/19.Grafica.php";

    $pregunta = $_REQUEST['opcion'];
    $opcion = new Encuesta();

    
    function consultarEncuesta ($obj, $preg) {

        $arreglo = $obj -> mostrarDatosEncuesta();

        while ($row = $arreglo -> fetch(PDO::FETCH_ASSOC)) {
            # code...
            if ($preg == 1){
                return $row['pregunta1'];
        
            }else if ($preg == 2){
                return $row['pregunta2'];

            }else if ($preg == 3){
                return $row['pregunta3'];
            }
        }
    }
    
    $pregunta1 = consultarEncuesta($opcion, $pregunta);
    $pregunta2 = consultarEncuesta($opcion, $pregunta);
    $pregunta3 = consultarEncuesta($opcion, $pregunta);

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

    $barra = new Barra(500,300);
    $barra -> fijarprofundidad(20);
    $barra -> sumar($pregunta1,"PHP");
    $barra -> sumar($pregunta2,"ASP");
    $barra -> sumar($pregunta3,"JSP");
    $barra -> graficar();

?>