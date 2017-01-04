<?php

include_once('Membre.class.php');

$membre = new Membre();
$membre->setPseudo('M@teo21');
echo $membre->getPseudo() . ', je vais te bannir !';
// $membre->bannir();

?>
