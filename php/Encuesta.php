<?php

    require_once $_SERVER['DOCUMENT_ROOT']."/php/dbconnect.php";


    class Encuesta extends Conexion{

        public function __construct(){
            parent :: __construct();
    
        }

        //Método para listar los datos de la encuesta
        public function mostrarDatosEncuesta(){

            try {
                //code...
                $consulta = "SELECT * FROM Encuesta";
                $query = $this -> conexion -> prepare($consulta);
                $query -> execute();
                return $query;
                $query-> closeCursor();
                $this -> conexion = null;

            } catch (Exception $e) {
                //Exception $e
                echo "Error en la consulta: " . $e -> getMessage();
            }
        }

        //
        public function actualizarDatosEncuesta($columna, $valorActual, $voto){
            try {
                //code...
               
                $actualizacion = "UPDATE Encuesta SET $columna = :valor + :voto WHERE codigo = 1";  
                $query = $this -> conexion-> prepare($actualizacion);
                //$query -> bindValue(':columna', $columna, PDO::PARAM_STR);
                $query -> bindValue(':valor', $valorActual, PDO::PARAM_INT);
                $query -> bindValue(':voto', $voto, PDO::PARAM_INT);
                $query -> execute();
                return $query;
                $query -> closeCursor();
                $this -> conexion = null;

            } catch (Exception $e) {
                Echo "Error en la actualizacion: " . $e->getMessage();
            }
        }

    }

?>