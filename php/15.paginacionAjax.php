<?php

    header('Content-Type: text/html; charset=utf-8');

    //Importando la clase Comentarios.php
    require_once "./Comentarios.php";

    //Creando una instancia de la clase Comantarios
    $consulta = new Comentarios();
    

    if (isset($_REQUEST['pos'])) {

        $inicio = $_REQUEST['pos'];

        //Llamando al método listarComentarios enviando 2 argumentos
        $array = $consulta->listarComentarios($inicio, 3);
    }else{

        $inicio = 0;

        //Llamando al método listarComentarios enviando 2 argumentos
        $array = $consulta->listarComentarios($inicio, 3);
    }

    //Variable para contar el numero de registros devueltos por la consulta a la bd mysql
    $contadorRegistros = $array -> rowCount();

    if ($contadorRegistros >= 1){

        //3 Segundos de espera para simular la tardanza de respuesta del servidor al front-end
        sleep(3);
        
        //Variable para el conteo de comentarios impresos
        $impresos = 0;

        while($comentario = $array->fetch(PDO::FETCH_ASSOC)){

            echo    "Nombre: "      . $comentario['nombre']     . "<br>"    .                    
                    "Fecha: "       . $comentario['fecha']      . "<br>"    .
                    "Comentario: "  . $comentario['comentarios']."<br>"     .
                    "===================================================="  .
                    "<br>";
            $impresos+=1;
        }
    
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

    }else{

        echo "No hay comentarios en la base de datos";
    }
?>