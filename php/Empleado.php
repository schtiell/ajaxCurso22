<?php

    require_once $_SERVER['DOCUMENT_ROOT']."/php/dbconnect.php";

    class Empleado extends Conexion{

        public function Empleado (){

            parent::__construct();
        }

        public function obtenerEmpleados (){

            try {
                $consulta = "SELECT * FROM Empleados";
                $query = $this -> conexion -> prepare($consulta);
                $query -> execute();
                return $query;
                $query -> closeCursor();
                $this->conexion = null;

            } catch (Exception $e) {

                echo "Error al obtener los datos de los empleados" . $e->getMessage();
            }
        }
    }
?>