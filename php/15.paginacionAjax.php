
<?php
    header('Content-Type: text/html; charset=utf-8');

    //Importando la conexion a la base de datos
    require_once "./config.php";
    require_once "./dbconnect.php";

    if (isset($_REQUEST['pos'])) {

        $inicio = $_REQUEST['pos'];
    }else{
        $inicio = 0;
    }



    
    // $impresos = 0;

    // $registros = $conn->query("SELECT * FROM comentarios LIMIT $inicio,3");

    // while($comentario = $registros->fetch(PDO::FETCH_ASSOC)){

    //     $impresos +=1;
    //     echo    "Nombre: "      . $comentario['nombre']     . "<br>"    .
    //             "Fecha: "       . $comentario['fecha']      . "<br>"    .
    //             "Comentario: "  . $comentario['comentarios']."<br>"     .
    //             "===================================================="  .
    //             "<br>";
    // }

    //Cierre de la conexión a la bd
    //$conn = null;

    if($inicio == 0){

        echo "<p class=\"ant\"> Anteriores </p>";
    }else{

        $anterior = $inicio - 3;
        echo "<a href=\"./php/15.paginacionAjax.php?pos=$anterior\" class=\"ant\">Anteriores</a>";
    }

    if ($impresos == 3){

        $proximo = $inicio + 3;
        echo "<a href=\"./php/15.paginacionAjax.php?pos=$proximo\" class=\"sig\">Siguientes</a>";
    }else{

        echo "<p class=\"sig\">Siguientes</p>";
    }
?>