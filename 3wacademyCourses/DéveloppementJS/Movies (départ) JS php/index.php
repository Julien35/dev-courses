<?php

// Fichiers communs.
include 'data.php';


function convertDuration($duration)
{
    return intval($duration / 60).'h'.str_pad($duration % 60, 2, '0', STR_PAD_LEFT);
}


// Sélection du template à afficher.
include 'index.phtml';
