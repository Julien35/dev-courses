<?php

// déconnexion utilisateur
function userExit($login) {
    // session_start();

    // Suppression des variables de session et de la session
    $_SESSION = array();
    session_destroy();

    // Suppression des cookies de connexion automatique
    setcookie('login', '');
    setcookie('pass_hache', '');
}


// Hachage du mot de passe
function sha1Password($password) {
    $pass_hache = sha1($password);
    return $pass_hache;
}


// mot de passe identique ?
function isPasswordsOk($password1, $password2) {
  $boolPass = FALSE;
  if($password1 === $password2) {
    $boolPass = TRUE;
  }
  return $boolPass;
}
