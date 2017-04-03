<?php

require 'controllers/mainController.php';

try {
    // testModel();

    userExit('Julien1');

    // print_r($_POST);
    // var_dump(isset($_POST['pseudo']));
    // var_dump(isset($_POST['password1']));
    // var_dump(isset($_POST['password2']));
    // var_dump(isset($_POST['email']));
    var_dump(isset($_SESSION['id']));
    var_dump(isset($_SESSION['pseudo']));


    # Que veut on vérifier :
    # utilisateur connecté ?
    if (isset($_SESSION['id']) AND isset($_SESSION['pseudo'])) {
    echo ' Bonjour ' .$_SESSION['pseudo'];
    var_dump($_SESSION['id']);
    var_dump($_SESSION['pseudo']);
    }
    # demande de connexion
    elseif (isset($_POST['pseudo']) AND isset($_POST['password'])) {
        connexionUser();
    }
    # demande d'inscription
    elseif (isset($_POST['pseudo']) AND isset($_POST['password1']) AND
    isset($_POST['password2']) AND isset($_POST['email'])) {
      registration();
    }
    else { // aucune action définie : affichage de l'accueil
      home();
  }

} catch (Exception $e) {
    error($e->getMessage());
}
