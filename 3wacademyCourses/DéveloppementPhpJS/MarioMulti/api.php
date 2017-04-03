<?php

session_start();

require_once 'server/Program.php';

$program = new Program();

switch ($_GET['method']) {

  case 'getGame':
    // var_dump($program);
    echo json_encode($program);

    break;

  case 'addPlayer':

    if (isset($_POST['name']) && isset($_POST['img'])) {
        $name = $_POST['name'];
        $img = $_POST['img'];
        $program->addPlayer($name, $img);


        echo json_encode($program);
    } else {
        // router vers getGame
        die('Error');
    }

    break;

  case 'movePlayer':

    // method=movePlayer&x=1&y=1

    if (isset($_POST['x']) && isset($_POST['y'])) {
        $x = $_POST['x'];
        $y = $_POST['y'];
        $x = intval($x, 10);
        $y = intval($y, 10);
        $program->movePlayer($x, $y);

    } else {
        // router vers getGame
        die(false);
    }

    break;

  case 'refresh':
    # code...
    break;

  default:
    # code...
    break;
}
