<?php
session_start();

require '../app/Autoloader.php';
App\AutoLoader::register();

$app = App\App::getInstance();

$posts = $app->getTable('Posts');
$users = $app->getTable('Users');
$categories = $app->getTable('Categories');