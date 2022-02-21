<?php

    require_once $_SERVER['DOCUMENT_ROOT']."/php/Estados.php";

    $estado = $_REQUEST['idEstado'];

    $mpiosPorEdo = new Estados();
    $array = $mpiosPorEdo -> municipiosPorEstado($estado);

    while ($row = $array->fetch(PDO::FETCH_ASSOC)) {

        $idMunicipio = $row['municipios_id'];

        $arreglo = $mpiosPorEdo -> listarMunicipios($idMunicipio);

        while ($row = $arreglo -> fetch(PDO::FETCH_ASSOC)) {
            $id = $row['id'];
            $municipio = $row['Municipio'];

            echo "<option value=\"$id\">$municipio</option>";
        }
    }
?>