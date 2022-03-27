<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Importando jQuery -->
    <script src="./js/jquery-3.6.0.min.js"></script>

    <!-- Importando bootstrap 4 -->
    <link rel="stylesheet" href="./css/bootstrap.min.css">

    <!-- Importando favicon -->
    <link rel="shortcut icon" href="./ico/json.png" type="image/x-icon">

    <!-- Importando estilos css -->
    <link rel="stylesheet" href="./css/22.estilos.css">
    <title>Recuperando datos del servidor en formato JSON</title>
</head>
<body>
    <div class="container">
        <h1>
            Objeto XMLHttpRequest:
            <small>Recuperando datos del servidor en formato JSON</small>
        </h1>

        <hr>

        <p>Para ver como se recuperan datos del servidor en formato JSON en lugar de texto plano o XML implementaremos el siguiente ejemplo:</p>

        <p>Confeccionar un sitio que permita ingresar el documento de una persona y nos retorne su apellido, nombre y lugar donde debe votar.</p>

        <p>Para reducir el tamaño del problema y concentrarnos en la forma de transmisión de datos y su posterior recuperación en el navegador no implementaremos una base de datos en el servidor (en la realidad los datos de los votantes se encontrarían en una tabla)</p>

        <hr>

        <h2>
            Ejercicio:
            <small>Solución</small>
        </h2>

        <label for="dni">Selecciona el dni del empleado:</label>
        <select name="" id="dni" class="form-control">
            <option value="0">Seleccionar</option>

            <?php
                require $_SERVER['DOCUMENT_ROOT']."/php/Usuario.php";
                $usuarios = new Usuario();
                $array = $usuarios->getIdsUsuarios();

                while ($row = $array->fetch(PDO::FETCH_ASSOC)) {
                    $id = $row['id'];
                    ?>

                    <option value="<?php echo $id; ?>"><?php echo $id; ?></option>

                    <?php
                }
            ?>

        </select>
        <button class="btn btn-primary" id="boton1">Enviar</button>

        <div id="resultados">
        </div>
    </div>
    <script src="./js/22.recuperandoDatosServidorJSON.js"></script>
</body>
</html>