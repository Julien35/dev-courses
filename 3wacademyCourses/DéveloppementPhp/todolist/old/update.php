<?php

include_once 'model.php';

if (isset($_POST['id'])) {

    $id = $_POST['id'];
    $title = $_POST['title'];
    $goal = $_POST['goal'];
    $end_date = $_POST['end_date'];

    $ret = updateTask($id, $title, $goal, $end_date);
    echo $ret;

    include 'index.php';

} elseif (isset($_GET['id'])) {

    $id = $_GET['id'];
    $title = $_GET['title'];
    $goal = $_GET['goal'];
    $end_date = $_GET['end_date'];

    include 'templates/update.phtml';

} else {
    include 'index.php';
}
