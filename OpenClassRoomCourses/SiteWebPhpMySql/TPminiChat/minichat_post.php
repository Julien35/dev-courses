<!-- insère le message reçu avec $_POST dans la base de données
 puis redirige vers minichat.php. -->

<?php
// protéger les chaînes de caractères contre la faille XSS
// (celle qui permet d'insérer du HTML et du JavaScript dans la page).
 // Il faudra donc bien veiller à appeler htmlspecialchars() pour protéger les chaînes
if (isset($_POST['pseudo']) AND isset($_POST['message'])) {
  $pseudo = htmlspecialchars($_POST['pseudo']);
  $message = htmlspecialchars($_POST['message']);
} else {
  // Puis rediriger vers minichat.php comme ceci :
  header('Location: minichat.php');
}

// Effectuer ici la requête qui insère le message
// echo 'Test : ' .$pseudo. ' : ' .$message;

//database connexion
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

//request preparation
$req = $bdd->prepare('INSERT INTO minichat (id, pseudo, message, date_creation) VALUES (NULL, :pseudo, :message, NOW())');
$req ->execute(array(
      'pseudo' => $pseudo,
      'message' => $message
      ));

$req->closeCursor();

// Puis rediriger vers minichat.php comme ceci :
header('Location: minichat.php?pseudo='.$_POST['pseudo']);

?>
