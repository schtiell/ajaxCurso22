
<?php

    header('Content-Type: text/html; charset=utf-8');

    if (isset($_REQUEST['pos'])) {

        $inicio = $_REQUEST['pos'];
    }else{
        $inicio = 0;
    }

    $conexion = mysqli_connect("localhost","root",123456,"bdajax") or die ("Problemas con la conexión a la bd");

    $registros = mysqli_query($conexion, "SELECT * FROM comentarios LIMIT $inicio,3") or die ("Problemas al seleccionar los datos: ".mysqli_error($conexion));

    $impresos = 0;

    while($reg = mysqli_fetch_array($registros)){

        $impresos+=1;
        echo "Nombre: ".$reg['nombre']."<br>";
        echo "Fecha: ".$reg['fecha']."<br>";
        echo "Comentario: ".$reg['comentarios']."<br>";
        echo "<br>";
    }

    mysqli_close($conexion);

    if($inicio == 0){

        echo "Anteriores";
    }else{

        $anterior = $inicio - 3;
        echo "<a href=\"./php/15.paginacionAjax.php?pos=$anterior\" id=\"sig\">Siguientes</a>";
    }

    if ($impresos == 3){

        $proximo = $inicio + 3;
        echo "<a href=\"./php/15.paginacionAjax.php?pos=$proximo\" id=\"sig\">Siguientes</a>";
    }else{

        echo "Siguientes";
    }
?>