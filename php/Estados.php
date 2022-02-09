<?php

    require_once './dbconnect.php';

    class Estados Extends Conexion {

        public function Estados(){
            parent::__construct();
        }

        public function listar(){
            try {

                $consulta = "SELECT * FROM Estados";
                $query = $this->conexion->prepare($consulta);
                $query -> execute();
                return $query;
                $query -> closeCursor();
                $this -> conexion = null;

            } catch (Exception $e) {

                echo "Error al realizar la consulta: " . $e->getMessage();
            }
        }

        public function saludar(){
            echo "<p>Hola de la function</p>";
        }
    }
?>