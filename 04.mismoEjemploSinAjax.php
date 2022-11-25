<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Importando el CDN "Content Delivery Network" de bootstrap 4 -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>

	<!-- cdn jquery for bootstrap framework-->
	<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

	<!-- css3 for bootstrap  -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

	<!-- cdn bundle bootstrap include Popper  -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

	<!-- cdn favicon -->
	<link rel="shortcut icon" href="https://icons.iconarchive.com/icons/graphics-vibe/developer/64/ajax-icon.png" type="image/x-icon"> 

    <!-- Importando estilos css -->
    <link rel="stylesheet" href="./css/01.template.css" type="text/css">
    <link rel="stylesheet" href="./css/03.estilos.css" type="text/css">
    
    <title>Horoscopos sin usar Ajax</title>
</head>
<body>
    <div class="container">
        <h1>
            AJAX: Asynchronous Javascript And XML
            <small>Horóscopo!!!</small>
        </h1>
        
        <hr>

        <p>Este ejercicio se trata de mostrar nuevamente la información del horóscopo seleccionado por el usuario, con la diferencia de que no se utilizara ajax para realizar la solicitud al servidor de forma asíncrona.</p>

        <p>Lo que significa que el sitio se recargará completamente cada vez que se haga clic en alguno de los enlaces. Por lo que el sitio es mucho mas lento ya que debe cargar todos los elementos HTML nuevamente.</p>

        <div class="container ejercicio">

            <h2>Consultar horóscopo</h2>

            <hr>
            
            <div id="menu">
                <!-- Los hipervinculos llaman a la misma pagina -->
                <p><a href="04.mismoEjemploSinAjax.php?cod=1" id="enlace1">Aries</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=2" id="enlace2">Tauro</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=3" id="enlace3">Geminis</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=4" id="enlace4">Cancer</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=5" id="enlace5">Leo</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=6" id="enlace6">Virgo</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=7" id="enlace7">Libra</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=8" id="enlace8">Escorpion</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=9" id="enlace9">Sagitario</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=10" id="enlace10">Capricornio</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=11" id="enlace11">Acuario</a></p>
                <p><a href="04.mismoEjemploSinAjax.php?cod=12" id="enlace12">Picis</a></p>
            </div>

            <div id="detalles">
                <?php
                    if (!isset($_REQUEST['cod']) == 1){
                        echo "Seleccione su signo zodiacal";
                    } else {

                        if ($_REQUEST['cod']==1)
                            
                            echo "<span>Aries:</span> Hoy los cambios serán físicos, personales, de carácter, Te sentirás impulsivo y tomarás  iniciativas. Período en donde considerarás unirte a agrupaciones de beneficencia, o de ayuda a los demás.";

                        if ($_REQUEST['cod']==2)
                            
                            echo "<strong>Tauro:</strong> Hoy los cambios serán privados, íntimos. Recuerdos. Ayuda, solidaridad. Asuntos en lugares de retiro. Tu cónyuge puede aportar buen status a tu vida o apoyo a tu profesión.";

                        if ($_REQUEST['cod']==3)

                            echo "<strong>Géminis:</strong> Los asuntos de hoy tienen que ver con las amistades, reuniones, actividades con ellos. Día esperanzado, ilusiones. Mucha energía sexual y fuerza emocional. Deseos difíciles de controlar.";

                        if ($_REQUEST['cod']==4)

                            echo "<strong>Cancer:</strong> Este día la profesión y las relaciones con superiores y con tu madre serán de importancia. Actividad en relación a estos temas. Momentos positivos con compañeros de trabajo. Actividad laboral agradable.";
                        
                        if ($_REQUEST['cod']==5)
                            
                            echo "<strong>Leo:</strong> Este día los estudios, los viajes, el extranjero y la espiritualidad serán lo importante. Pensamientos, religión y filosofía también. Vivencias kármicas de la época te vuelven responsable tomando decisiones.";
                        
                        if ($_REQUEST['cod']==6)
                            
                            echo "<strong>Virgo:</strong> Para este día toma importancia tu vida sexual, tal vez miedos, temas legales, juicios o herencias. Experiencias extrañas. Hay karma de prueba durante este período en tu parte psicológica, generándose algunos replanteos.";
                        
                        if ($_REQUEST['cod']==7)
                            
                            echo "<strong>Libra:</strong> Hoy todo asunto tiene que ver con tu pareja, también con socios, con la gente o el público. Ellos serán lo más importante del día. Ganancias a través de especulaciones o del juego. Actividades vocacionales artísticas.";

                        if ($_REQUEST['cod']==8)
                            
                            echo "<strong>Escorpio:</strong> Hoy todo asunto tiene que ver con temas de trabajo y de salud. Presta atención a ambos. Experiencias diversas con compañeros. Durante este período tendrás muchos recursos para ganar dinero.";

                        if ($_REQUEST['cod']==9)
                            
                            echo "<strong>Sagitario:</strong> Durante este día se vivirán cambios en relación a los noviazgos o a los hijos. Creatividad, actividad, diversiones y salidas. Período de encuentros con personas o situaciones que te impresionan.";

                        if ($_REQUEST['cod']==10)
                            
                            echo "<strong>Capricornio:</strong> Los cambios del día tienen que ver con tu hogar, con la convivencia y con el padre. Asuntos relativos al carácter en la convivencia. El karma de responsabilidad de estos momentos te acercará al mundo de lo desconocido, mucha madurez y contacto con el más allá.";

                        if ($_REQUEST['cod']==11)
                            
                            echo "<strong>Acuario:</strong> Hoy todo asunto tiene que ver con el entorno inmediato, hermanos y vecinos, con la comunicación, los viajes cortos o traslados frecuentes. El hablar y trasladarse será importante hoy. Mentalidad e ideas activas.";

                        if ($_REQUEST['cod']==12)
                            echo "<strong>Piscis:</strong> Durante este día se vivirán cambios en la economía, movimientos en los ingresos, negocios, valores. Momentos de gran fuerza y decisión profesionales, buscarás el liderazgo.";
                    }
                ?>
            </div>
        </div>
    </div>
</body>
</html>