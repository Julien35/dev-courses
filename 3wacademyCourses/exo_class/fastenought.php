<?php
session_start();
// Envoyer le nombre affiché à l'url
// http://192.168.0.39/ae/3wa/content/formation-3-mois/D%C3%A9veloppement/PHP/index.php?solution=réponse
// en moins de 1 seconde

// $http = file_get_contents("http://3wa.local/PHP/");
// $value = explode(', ', $http);
// $number = $value[1];
// var_dump($number);
//
// $url = "http://3wa.local/PHP/index.php?solution=".$number;
// var_dump($url);
// $password = file_get_contents($url);
// // $password = header('Location: '.$url);
// var_dump($password);

// create curl resource
$ch = curl_init();
// set url
// curl_setopt($ch, CURLOPT_URL, "http://3wa.local/PHP/");
curl_setopt($ch, CURLOPT_URL, "https://www.net-force.nl/challenge/level602/prog2.php");

//return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// $output contains the output string
$output = curl_exec($ch);
var_dump($output);
$value = explode(" '", $output);
var_dump($value);
$value = explode("'.", $value[1]);
var_dump($value);
$number = $value[0];
var_dump($number);
// die();
$url = "https://www.net-force.nl/challenge/level602/prog2.php?solution=".$number;
var_dump($url);

curl_setopt($ch, CURLOPT_URL, $url);
//return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// $output contains the output string
$output = curl_exec($ch);
var_dump($output);
// close curl resource to free up system resources
curl_close($ch);

session_destroy();
