<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/php/Estados.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Importando la libreria de jQuery -->
    <script src="./js/jquery-3.6.0.min.js"></script>

    <!-- Importando el CDN de bootstrap 4 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

    <!-- Importando los estilos css -->
    <link rel="stylesheet" href="./css/16.estilos.css" type="text/css">
    <title>Cargar un control de tipo select</title>
</head>
<body>
    <div class="container">
        <h1>Objeto XMLHttpRequest:
            <small>Cargando un control Select Dinámicamente</small>
        </h1>
        <hr>

        <p>Se plantea nonfeccionar un problema que contenga dos controles de tipo select. En el primero almacenaremos una lista los estados de México.</p>

        <p>Cuando se seleccione un estado se enviará una petición al servidor para que retorne todos los municipios que pertenecen al estado seleccionado</p>

        <hr>

        <h2>Select Control Dínamico: <small>MySql, Ajax, Php y Javascript</small></h2>

        <label for="estados">Estado:</label>
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

        <span id="espera"></span>

        <label for="municipios">Municipio:</label>
        <select name="municipios" id="municipios" class="form-control">
            <option value="#">Seleccionar</option>
        </select>

    </div>

    <!-- Importando el script js -->
    <script src="./js/16.cargarControlSelect.js" type="text/javascript"></script>
</body>
</html>