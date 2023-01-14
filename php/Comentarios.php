<?php

    //Importando la clase Conexion
    require_once './dbconnect.php';

    //Clase Comentarios que hereda de la clase Conexion
    class Comentarios extends Conexion {

        //Metodo constructor de la clase Comentaarios
        public function Comentarios(){

            //Instanciando al metodo constructor de la clase Conexion
            parent::__construct();
        }

        //Metodo para la listar los comentarios de la tabla comentarios
        public function listarComentarios ($inicio,$fin){

            try {

                $consulta = "SELECT * FROM comentarios LIMIT $inicio,$fin";
                $query  = $this -> conexion -> prepare($consulta);
                $query -> execute();
                return $query;
                $query -> closeCursor();
                $this -> conexion = null;
            } catch (Exception $e) {

                echo "Error al realizar la consulta" . $e->getMessage();
            }
        }
    }
?>