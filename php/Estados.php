<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/php/dbconnect.php";

    class Estados Extends Conexion {

        public function __construct() {
            parent::__construct();
        }

        //Método para listar todos los Estados del pais
        public function listarEstados() {
            try {

                $consulta = "SELECT * FROM Estados";
                $query = $this->conexion->prepare($consulta);
                $query -> execute();
                return $query;
                $query -> closeCursor();
                $this -> conexion = null;

            } catch (Exception $e) {

                echo "Error al realizar la consulta: " . $e -> getMessage();
            }
        }

        //Metodo para conocer los id de los municipios por estado
        public function municipiosPorEstado ($idEstado) {
            try {

                $consulta = "SELECT municipios_id FROM Estados_Municipios WHERE estados_id = :idEstado ORDER BY 'municipios_id' ASC";
                $query = $this->conexion->prepare($consulta);
                $query -> execute(array(':idEstado' => $idEstado));
                return $query;
                $query -> closeCursor();
                $this -> conexion = null;

            } catch (Exception $e) {

                echo "Error al realizar la consulta " . $e -> getMessage();
            }
        }

        //Metodo para listar los muninicipios por id
        public function listarMunicipios ($idMunicipio){
            try {

                $consulta = "SELECT * FROM Municipios WHERE id = :idMunicipio ORDER BY 'Municipio' ASC";
                $query = $this -> conexion -> prepare($consulta);
                $query -> execute(array(':idMunicipio' => $idMunicipio));
                return $query;
                $this -> conexion = null;

            } catch (Exception $e) {

                echo "Error al realizar al consultar los Municipios " . $e -> getMessage();
            }
        }

        //Método de prueba
        public function saludar(){
            return "<p>Hola de la function</p>";
        }
    }
?>