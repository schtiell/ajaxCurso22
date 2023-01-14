<?php

    sleep(1);

    //Almacenando el codigo recibido a traves de la url
    $carrera = $_REQUEST['codigo'];

    //Analizando el codigo de la url recibido para generar el array con las materias por cada carrera
    switch ($carrera) {
        case 1:
            $materias = ['Programación 1', 'Análisis Matemático', 'Estructura de las organizaciones', 'Etica profesional'];
            break;
        case 2:
            $materias = ['Fundamentos de física', 'Analisis Matemático 1', 'Inglés', 'Sistemas de Comunicaciones 1'];
            break;
        default:
            $materias = ['Informática 1', 'Multimedia 1', 'Bases de datos'];
            break;    
    }

    //Respuesta en XML
    $xml = "<?xml version=\"1.0\"?>\n"; 
    $xml.="<materias>\n";
    
    for ($i=0; $i<count($materias); $i++) { 
        
        $xml.="<materia>".$materias[$i]."</materia>\n";
    }

    $xml.="</materias>\n";
    header('Content-Type: text/xml'); 

    echo $xml;
?>