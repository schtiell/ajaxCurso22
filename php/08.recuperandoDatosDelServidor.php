<?php
    header("Content-Type: text/html; charset=utf-8");

    if ($_REQUEST["fecha"] == "21/01/16") {

        echo    "<h3>
                    Comentarios recibidos;
                    <small>21/Enero/2016</small>
                </h3>";

        echo "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi veritatis aut neque distinctio rerum dolore culpa dolor pariatur soluta delectus vero non nobis fugiat nemo quas laudantium, sequi eveniet officia!";

    } else if ($_REQUEST["fecha"] == "22/01/16") {

        echo    "<h3>
                    Comentarios recibidos;
                    <small>22/Enero/2016</small>
                </h3>";

        echo    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi veritatis aut neque distinctio rerum dolore culpa dolor pariatur soluta delectus vero non nobis fugiat nemo quas laudantium, sequi eveniet officia!";


    } else if ($_REQUEST["fecha"] == "23/01/16") {

        echo    "<h3>
                    Comentarios recibidos;
                    <small>23/Enero/2016</small>
                </h3>";

        echo "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi veritatis aut neque distinctio rerum dolore culpa dolor pariatur soluta delectus vero non nobis fugiat nemo quas laudantium, sequi eveniet officia!";
    }
?>