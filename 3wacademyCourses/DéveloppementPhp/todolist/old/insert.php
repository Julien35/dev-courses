<?php

include_once 'model.php';

// C'est la seule valeur obligatoire
if (isset($_POST['title'])) {
    $title = htmlspecialchars($_POST['title']);

    $goal = '';
    if (isset($_POST['goal'])) {
        $goal = htmlspecialchars($_POST['goal']);
    }

    if (isset($_POST['date'])) {
        $date = $_POST['date'];
    } else {
      $date = date("Y-m-d");
    }

    $ret = addTask($title, $goal, $date);
    echo $ret;
}

// Template
include 'index.php';
