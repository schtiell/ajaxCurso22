<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Importando la libreria jQuery -->
    <script src="./js/jquery-3.6.0.min.js"></script>

    <!-- Importando framework bootstrap 4 -->
    <link rel="stylesheet" href="./css/bootstrap.min.css">

    <!-- Importando estilos css -->
    <link rel="stylesheet" href="./css/23.estilos.css" type="text/css">

    <!-- Importando favicon -->
    <link rel="shortcut icon" href="./ico/json.png" type="image/x-icon">

    <title>Recuperando datos del servidor en formato JSON</title>
</head>
<body>
    <div class="container">

        <h1>
            Objeto XMLHttpRequest:
            <small>Recuperando datos del servidor en formato JSON</small>
        </h1>

        <hr>

        <p>Mismo ejercicio anterior de recuperación de los datos de los usuarios utilizando el evento change del elemento select</p>

        <label for="dni">Seleccion el id de un Usuario</label>
        <select name="dni" id="dni" class="form-control">
            <option value="0">Selecciona una opcion</option>

            <!-- Procesamiento backend php -->
            <?php
                require $_SERVER['DOCUMENT_ROOT'] . "/php/Usuario.php";
                $usuario = new Usuario();
                $array = $usuario -> getIdsUsuarios();

                while ($row = $array->fetch(PDO::FETCH_ASSOC)) {
                    $id = $row['id'];
                    ?> <!-- Cierre del codigo php para imprimir nuevamente etiquetas html en el DOM-->

                    <option value="<?php echo $id; ?>"> <?php echo $id; ?> </option>

                    <!-- Procesamiento backend php -->
                    <?php
                }
            ?>
        </select>

        <div id="resultados">
        </div>

    </div>

    <!-- Importando el script de js -->
    <script src="./js/23.recuperandoDatosServidorJSON_2.js"></script>
</body>
</html>