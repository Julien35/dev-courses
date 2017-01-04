<?php


// connexion utilisateur
function userConnexion($bdd, $login, $password) {

    // Hachage du mot de passe
    $pass_hache = sha1Password($password);

    // Vérification des identifiants
    $req = $bdd->prepare('SELECT id FROM membres WHERE pseudo = :pseudo AND pass = :pass');
    $req->execute(array(
        'pseudo' => $login,
        'pass' => $pass_hache));

    $resultat = $req->fetch();
    print_r($resultat['id']);

    if (!$resultat) {
        echo 'Mauvais identifiant ou mot de passe !';
    }
    else
    {
        session_start();
        $_SESSION['id'] = $resultat['id'];
        $_SESSION['pseudo'] = $login;
        echo 'Vous êtes connecté !';
    }

}


// inscription en base
function userRegistration($bdd, $login, $password1, $password2, $email) {
  $registrationOk = FALSE;

try {
  // Si le login n'existe pas, on peut continu la vérification
  $isLoginExist = isLoginExist($bdd, $login);
  $isPasswordsOk = isPasswordsOk($password1, $password2);
  // var_dump($isLoginExist);
  // var_dump($isPasswordsOk);

  // Vérification du login
  if(!$isLoginExist) {
    if ($isPasswordsOk) {
      // Toutes les données sont valides
      // Hachage du mot de passe
      $pass_hache = sha1Password($password1);
      // insertion en base du nouvel utilisateur
      insertUser($bdd, $login, $pass_hache, $email);
      $registrationOk = TRUE;
    }
  }

} catch (Exception $e) {
  echo $e->getMessage();
}

  return $registrationOk;
}


// Dipslay all users
function displayUsers($bdd) {
  $users = selectMembres($bdd);
  echo '<pre>';
  print_r($users);
  echo '</pre>';
}

// insertion en base du nouvel utilisateur
function insertUser($bdd, $pseudo, $pass, $email) {
  $insertUser = $bdd->prepare('INSERT INTO membres(pseudo, pass, email, date_inscription) VALUES(:pseudo, :pass, :email, CURDATE())');
  $insertUser->execute(array(
      'pseudo' => $pseudo,
      'pass' => $pass,
      'email' => $email));
}

// delete user
function deleteUser($bdd, $pseudo) {
  // suppression utilisateur en base
  $deleteUser = $bdd->prepare('delete from membres where pseudo = :pseudo');
  $deleteUser->execute(array('pseudo' => $pseudo));
  $deleteUser->closeCursor();
}

// select all datatable
function selectMembres($bdd) {
  $selectMembres = $bdd->prepare('SELECT id, pseudo, pass, email, date_inscription FROM membres');
  $selectMembres->setFetchMode(PDO::FETCH_ASSOC); // Facultatif
  $selectMembres->execute();
  $users = $selectMembres->fetchAll();
  $selectMembres->closeCursor();
  return $users;
}

// select pseudo
function pseudoList($bdd, $pseudo) {

  $sql = 'SELECT pseudo FROM membres WHERE pseudo = :pseudo';
  $pseudoList = $bdd->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
  $pseudoList->execute(array(':pseudo' => $pseudo));
  /* Récupération de toutes les valeurs de la première colonne */
  $users = $pseudoList->fetchAll(PDO::FETCH_COLUMN, 0);
  return $users;

}

// Vérifie si le login existe
function isLoginExist($bdd, $loginToTest) {
  $boolPseudo = FALSE;
  $pseudos = pseudoList($bdd, $loginToTest);

  foreach ($pseudos as $key => $value) {
    if($value == $loginToTest) {
      $boolPseudo = TRUE;
    }
  }
  return $boolPseudo;
}

// Effectue la connexion à la BDD
// Instancie et renvoie l'objet PDO associé
function getBdd() {
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root','');
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
    return $bdd;
}

 ?>
