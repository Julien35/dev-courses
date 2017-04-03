<?php

// require 'models/model.php';
echo 'Model Tests : <br>';

testAll();


function testAll() {
  getBddTest();
  isLoginExistTest();
  isPasswordsOkTest();
  sha1PasswordTest();
  userRegistrationTest();
  userConnexionTest();
  userExitTest();
}


function getBddTest() {
  $bdd = getBdd();

  try {
    // $list = pseudoList($bdd, 'Toto');
    // var_dump($list);

    // $resultat = isLoginExist($bdd, 'Toto');
    // var_dump($resultat);

    // Dipslay all users
    // echo "Avant insertion";
    // displayUsers($bdd);

    // insertion en base du nouvel utilisateur
    // insertUser($bdd, 'Test', 'pass_hache', 'test@mail.com');
    // echo "Apres insertion";
    // displayUsers($bdd);

    // suppression utilisateur en base
    // deleteUser($bdd,'Test');
    // deleteUser($bdd,'Toto');
    // echo "Apres suppression";
    // displayUsers($bdd);

  } catch (Exception $e) {
    exit('<b>Catched exception at line '. $e->getLine() .' :</b> '. $e->getMessage());
  }

}


function isLoginExistTest() {
  $bdd = getBdd();
  $resultat = FALSE;
  $resultat = isLoginExist($bdd, 'Toto');
  var_dump($resultat);
}

function isPasswordsOkTest() {
  $password1 = 'toto';
  $password2 = 'toto';
  $resultat = FALSE;
  $resultat = isPasswordsOk($password1, $password2);
  var_dump($resultat);
}


function sha1PasswordTest() {
  $shaPass = sha1Password('motdepasse');
  var_dump($shaPass);
}


function userRegistrationTest() {
  $bdd = getBdd();
  $login = 'Tata';
  $password1 = 'hello';
  $password2 = 'hello';
  $email = 'toto@mail.com';
  if(userRegistration($bdd, $login, $password1, $password2, $email)){
    displayUsers($bdd);
  }
  else {
    echo "User or mail or password error";
  }
}


function userConnexionTest() {
  $bdd = getBdd();
  $login = 'Tata';
  $password = 'hello';
  userConnexion($bdd, $login, $password);
}


function userExitTest() {
  userExit('Tata');
}




 ?>
