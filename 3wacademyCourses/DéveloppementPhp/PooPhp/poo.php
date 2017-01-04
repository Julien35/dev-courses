<?php

require 'CompteBancaire.php';
require 'CompteEpargne.php';

$compteJean = new CompteBancaire('euros', 150, 'Jean');
echo $compteJean.'<br />';
$compteJean->crediter(100);
echo $compteJean.'<br />';

$comptePaul = new CompteEpargne('dollars', 200, 'Paul', 0.05);
echo $comptePaul.'<br />';
echo 'Interets pour ce compte : '.$comptePaul->calculerInterets().
    ' '.$comptePaul->getDevise().'<br />';
$comptePaul->calculerInterets(true);
echo $comptePaul.'<br />';
