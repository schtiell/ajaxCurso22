<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Importando la libreria de jQuery -->
    <script src="./js/jquery-3.6.0.min.js"></script>

    <!-- Importando bootstrap 4 -->
    <link rel="stylesheet" href="./css/bootstrap.min.css">

    <!-- Importando los estilos -->
    <link rel="stylesheet" href="./css/16.estilos2.css">

    <title>Cargar un contorl tipo select</title>
</head>
<body>
    <div class="container">
        <h1>Objeto XMLHttpRequest:
            <small>Cargando un control select a partir de un array</small>
        </h1>

        <hr>

        <h2>Control dinámico:
            <small>MySql, Php, aJax y Js</small>
        </h2>

        <label for="carrera">Carrera: </label>
        <select name="carrera" id="carrera" class="form-control">
            <option value="0">Seleccionar</option>
            <option value="1">Analista de sistemas</option>
            <option value="2">Telecomunicaciones</option>
            <option value="3">Webmaster</option>
        </select>

        <label for="materias">Materias: </label>
        <select name="materias" id="materias" class="form-control">
        </select>

        <span id="espera"></span>
    </div>

    <!-- Importando el archivo js -->
    <script src="./js/16.cargarControlSelect_2.js"></script>
</body>
</html>