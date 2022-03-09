<?php

    header('Content-Type: text/xml');

    $palabra = $_REQUEST['palabra'];

    $arreglo = ['alma', 'armando', 'andres', 'amo', 'abril', 'alicia'];

    #Si longitud de la cadena es mayor a 0
    if (strlen($palabra) >= 1 ){

        # Ciclo hasta completar la longitud del arreglo
        for ($i=0; $i < count($arreglo) ; $i++) { 
            # code...
            
            #substr($cadena, $inicio, $longitudDeCadena)
            if ($palabra == substr($arreglo[$i],0,strlen($palabra))){

                $arreglo_igual[] = $arreglo[$i];
            }
        }
    }

    #Respuesta XML
    $xml = "<?xml version=\"1.0\"?>\n";
    $xml.="<palabras>\n";

    #Si el arreglo está definido
    if (isset($arreglo_igual)) {
        # code...
        for ($i=0; $i <count($arreglo_igual) ; $i++) { 
            # code...
            $xml.="<palabra>".$arreglo_igual[$i]."</palabra>\n";
        }
    }

    $xml.="</palabras>\n";
    sleep(1);
    echo $xml;
?>