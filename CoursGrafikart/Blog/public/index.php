<?php
session_start();

require '../app/Autoloader.php';
App\AutoLoader::register();

$app = \App\App::getInstance();