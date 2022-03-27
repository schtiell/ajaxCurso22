<?php

    //Importando la clase Conexion
    require_once $_SERVER['DOCUMENT_ROOT']."/php/dbconnect.php";

    class Usuario extends Conexion{

        public function Usuarios (){

            parent::__construct();
        }

        public function getIdsUsuarios (){

            try {
                //code...
                $consulta = "SELECT id FROM Usuarios";
                $query = $this -> conexion -> prepare($consulta);
                $query -> execute();
                return $query;
                $query -> closeCursor();
                $this -> conexion = null;

            } catch (Exception $e) {

                echo "Error al obtener los id de los usuarios: " . $e->getMessage();
            }
        }

        public function listarUsuarios($id){

            try {
                $consulta = "SELECT * FROM Usuarios WHERE id = :id";
                $query = $this -> conexion -> prepare($consulta);
                $query -> execute(array(':id' => $id));
                return $query;
                $query -> closeCursor();
                $this -> conexion = null;

            } catch (Exception $e) {

                echo " Error al listar los usuarios: " . $e->getMessage();
            }
        }
    }
?>