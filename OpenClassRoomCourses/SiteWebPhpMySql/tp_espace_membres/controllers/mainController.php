<?php

require 'models/model.php';
require 'models/bddModel.php';

// On affiche la page d'inscription
function home() {
    require 'views/inscription.php';
}

function registration() {
  // echo "C'est parti pour l'enregistrement";
  $bdd = getBdd();
  $login = $_POST['pseudo'];
  $password1 = $_POST['password1'];
  $password2 = $_POST['password2'];
  $email = $_POST['email'];

  if (userRegistration($bdd, $login, $password1, $password2, $email)) {
      registerOk();
  } else {
      error('Utilisateur ou mot de de passe existant');
  }

}

function deconnexionUser() {
  $login = $_POST['pseudo'];
  userExit($login);
}

function connexionUser() {
  $bdd = getBdd();
  $login = $_POST['pseudo'];
  $password = $_POST['password'];
  userConnexion($bdd, $login, $password);
}

function registerOk() {
    require 'views/connexion.php';
}

// Affiche une erreur
function error($msgError) {
    $_GET['msgError'] = $msgError;
    require 'views/errorView.php';
}

function testModel() {
  require 'tests/testModel.php';
}
