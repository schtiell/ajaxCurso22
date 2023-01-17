<?php

    //Importando las variables para la conexión de la bd
    require_once $_SERVER['DOCUMENT_ROOT'].'/php/config.php';


    //Clase Conexión que herada de la clase Config
    class Conexion extends Config{

        protected $conexion;

        //Metodo constructor de la clase Conexión
        public function __construct() {

            try {
                //code...
                $this->conexion = new PDO("mysql:host=$this->host; dbname=$this->dbname", $this->username, $this->password);
                $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->conexion->exec("SET CHARACTER SET utf8");
                return $this->conexion;

            } catch (Exception $e) {

                echo "El error en la conexion a la bd $this->dbname " . $e->getMessage();
            }
        }
    }
?>