<?php

    // //Importando las variables para la conexión de la bd
    // require_once './config.php';

    // //Conexion a la base de datos con manejo de excepciones para errores en tiempo de ejecución
    // try {

    //     $conn = new PDO("mysql:host=$host; dbname=$dbname", $username, $password);
    //     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //     //echo "Connected to $dbname at $host successfully";

    // } catch (PDOException $e) {

    //     die("Could not connect to the database $dbname: " .$e -> getMessage());
    // }
?>

<?php

    //Importando las variables para la conexión de la bd
    require_once './config.php';

    class Conexion extends Config{

        protected $conexion;

        public function Conexion() {

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