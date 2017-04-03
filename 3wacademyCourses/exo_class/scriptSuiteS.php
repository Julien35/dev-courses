<?php
// Crée un script php qui retourne pour CHAQUE requête Http,
// le nombre n+1 de la suite S tell que: pour tout n, a(n+1) = a(n) * 3 + 4.
//
// * La première requête renverra donc le nombre 4 = (0*3+4);
// * La seconde requête 16  = (4*3+4)
// * etc...
session_start();
var_dump((!isset($_SESSION['n'])) ? ($_SESSION['n'] = 0) : ($_SESSION['n'] = $_SESSION['n'] * 3 + 4));
// session_destroy();
