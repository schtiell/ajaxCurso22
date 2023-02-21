<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- cdn jquery for bootstrap framework-->
	<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

    <!-- Importando el CDN "Content Delivery Network" de bootstrap 4 -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>

	<!-- css3 for bootstrap  -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

	<!-- cdn bundle bootstrap include Popper  -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

	<!-- cdn favicon -->
	<link rel="shortcut icon" href="https://icons.iconarchive.com/icons/graphics-vibe/developer/64/ajax-icon.png" type="image/x-icon"> 

    <!-- Importando estilos css -->
    <link rel="stylesheet" href="./css/01.template.css" type="text/css">
    <link rel="stylesheet" href="./css/24.estilos.css" type="text/css">

    <title>Recuperando datos del servidor en formato JSON</title>
</head>
<body>
    <div class="container">

        <h1>
            AJAX: Asynchronous JavaScript And XML
            <small>Recuperando JSON del servidor</small>
        </h1>

        <hr>

        <p>Mismo ejercicio anterior de recuperación de los datos de los usuarios utilizando el evento change del elemento select</p>

        <div class="container ejercicio">

            <h2>Ejemplo:</h2>

            <hr>

            <div class="form-group row">
                <label for="dni" class="label form-col-label col-sm-4">Seleccion el id de un Usuario</label>
                    <div class="col-sm-8">
                        <select name="dni" id="dni" class="form-control">
                            <option value="0">Selecciona una opción</option>

                            <!-- Procesamiento backend php -->
                            <?php
                                require $_SERVER['DOCUMENT_ROOT'] . "/php/Usuario.php";
                                $usuario = new Usuario();
                                $array = $usuario -> getIdsUsuarios();

                                while ($row = $array->fetch(PDO::FETCH_ASSOC)) {
                                    $id = $row['id'];
                            ?>

                            <option value="<?php echo $id; ?>"> <?php echo $id; ?> </option>
                                
                            <?php
                                }
                            ?>
                        </select>
                    </div>
                <div id="resultados"></div>
            </div>
        </div>
    </div>

    <!-- Importando el script de js -->
    <script src="./js/23.recuperandoDatosServidorJSON_2.js"></script>
</body>
</html>