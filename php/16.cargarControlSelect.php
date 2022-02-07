<?php
    echo "Llegué al php";

    require_once "./config.php";
    require_once "./dbconnect.php";

    $re = $conn->query("SELECT * FROM Estados");
?>