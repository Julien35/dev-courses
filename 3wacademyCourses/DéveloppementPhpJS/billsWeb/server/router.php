<?php

session_start();

require_once 'server/Controllers/MainController.php';
// session_destroy(); // pour test

if (isset($_GET['method'])) {

    $arr = explode('/', $_GET['method']);
    $method = $arr[0];

    // var_dump($arr);
    // var_dump(MainController::isUser());
    // var_dump($method);
    // die();

    switch ($method) {
      case 'user':
        require 'routers/user.php';
        break;

      case 'admin':
          require 'routers/admin.php';
          break;

      case 'front':
      default:
        require 'routers/front.php';
        break;
    }
}
