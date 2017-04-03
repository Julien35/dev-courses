<?php

// Fichiers communs.
include 'data.php';


function convertDuration($duration)
{
    return intval($duration / 60).'h'.str_pad($duration % 60, 2, '0', STR_PAD_LEFT);
}


if(isset($_POST['duration'])) $duration = intval($_POST['duration']);
if(isset($_POST['choix'])) $choix = intval($_POST['choix']);

$low_limit = 10;
// Sélection du template à afficher.

include 'index.phtml';
?>
