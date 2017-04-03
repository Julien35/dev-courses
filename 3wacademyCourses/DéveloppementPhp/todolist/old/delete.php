<?php

include_once 'model.php';

if (isset($_POST['id'])) {
    $idTask = $_POST['id'];
    $ret = deleteTask($idTask);
    echo $ret;
}
