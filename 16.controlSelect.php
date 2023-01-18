<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/php/Estados.php";
?>

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
    <link rel="stylesheet" href="./css/16.estilos.css" type="text/css">

    <title>Controles Select Dinámicos</title>
</head>
<body>
    <div class="container">

        <h1>
            AJAX: Asynchronous Javascript And XML
            <small>Controles Select Dinámicos</small>
        </h1>

        <hr>

        <p>Se plantea confeccionar un problema que contenga dos controles de tipo select. En el primero almacenaremos una lista los estados de México.</p>

        <p>Cuando se seleccione un estado se enviará una petición al servidor para que retorne todos los municipios que pertenecen al estado seleccionado</p>

        <hr>

        <div class="container ejercicio">

            <h2>Ejemplo:</h2>

            <hr>

            <div class="form-group row">
                <label for="estados" class="col-form-label col-sm-4">Estado:</label>
                <div class="col-sm-8">
                    <select name="estados" id="estados" class="form-control">
                        <option value="0">Seleccionar</option>
                        <?php
                            $estado = new Estados();
                            $array = $estado->listarEstados();
                            while($row = $array->fetch(PDO::FETCH_ASSOC)) {
                                $id = $row['id'];
                                $estado = $row['estado'];
                        ?>
                    
                        <option value="<?php echo $id; ?>"><?php echo $estado; ?></option>
                        <?php
                            }
                        ?>
                    </select>
                </div>
            </div>

            <span id="espera"></span>

            <div class="form-group row">
                <label for="municipios" class="col-form-label col-sm-4">Municipio:</label>
                <div class="col-sm-8">
                    <select name="municipios" id="municipios" class="form-control">
                        <option value="0">Seleccionar</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <!-- Importando el script js -->
    <script src="./js/16.cargarControlSelect.js" type="text/javascript"></script>
</body>
</html>