<?php

function exception_handler($exception) {
  echo "Exception non attrapée : " , $exception->getMessage(), "\n";
}

set_exception_handler('exception_handler');
// Example :
// throw new Exception('Uncaught Exception');
// echo "Non exécuté\n";

/*
 * Database configuration settings used by PDO.
 */

define('DB_USER', 'bills');
define('DB_PASSWORD', 'bills');
define('DB_NAME', 'bills');
define('DB_HOST', 'localhost');
define('HOST_URL', $_SERVER['REQUEST_SCHEME'] .'://' .$_SERVER['SERVER_NAME']);
define('VIEWS_PATH', __DIR__ .DIRECTORY_SEPARATOR .'views' .DIRECTORY_SEPARATOR);
define('ADMIN_PATH', __DIR__ .DIRECTORY_SEPARATOR .'views' .DIRECTORY_SEPARATOR .'admin'.DIRECTORY_SEPARATOR);
define('FRONT_PATH', __DIR__ .DIRECTORY_SEPARATOR .'views' .DIRECTORY_SEPARATOR .'front'.DIRECTORY_SEPARATOR);
define('USER_PATH', __DIR__ .DIRECTORY_SEPARATOR .'views' .DIRECTORY_SEPARATOR .'user'.DIRECTORY_SEPARATOR);
define('ASSETS_PATH', HOST_URL .DIRECTORY_SEPARATOR . 'assets' .DIRECTORY_SEPARATOR);
