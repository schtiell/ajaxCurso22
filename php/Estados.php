
<?php

    require_once './config.php';
    require_once './dbconnect.php';

    class Estados Extends Conexion {

        protected function Estados () {
            parent::Conexion();
        }

        protected function listarEstados (){

            try {

                $consulta = "SELECT * FROM Estados";
                $query = $this->conexion->prepare($consulta);
                $query -> execute();
                return $query;
                $query -> closeCursor();

            } catch (Exception $e) {
                
                echo "Error al realizar la consulta: " . $e->getMessage();
            }


        }

    }
?>