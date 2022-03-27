<?php

    $root = $_SERVER['DOCUMENT_ROOT'];
    class Config{

        /*
        Public: podemos acceder a las propiedades y métodos desde cualquier lugar, desde la clase actual, clases que heredan de la clase actual y desde otras clases.

        Protected: se puede acceder al atributo o método desde la clase que lo define y desde cualquier otra que herede de esta clase.

        Private: los atributos o métodos solo son accesibles desde la clase que los define.
        */

        //Atributos protegidos que solo pueden ser accedidos desde la case propia o de clases que hereden de esta.
        //protected $host = 'localhost';
        protected $host = 'localhost';
        protected $dbname = 'bdajax';
        protected $username = 'root';
        protected $password = 123456;
        protected $port = 3306;
        

    }
?>