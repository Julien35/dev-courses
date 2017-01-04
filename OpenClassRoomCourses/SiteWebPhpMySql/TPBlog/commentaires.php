<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <meta charset="utf-8">
    <title>Liste des commentaires</title>
  </head>
  <body>
    <h1>Mon super Blog !</h1>

    <a href="index.php">Retour à liste des billets</a>

    <?php

    $idBillet = $_GET['id_billet'];

      try
      { //Connexion base à la test
        $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
      }
      catch(Exception $e)
      {
              die('Erreur : '.$e->getMessage());
      }

      //Préparation de la requête de lecture
      $billetData = $bdd->prepare('SELECT id, titre, contenu, date_creation FROM billets WHERE id = ?');
      $billetData -> execute(array($idBillet));

      $billetComment = $bdd->prepare('SELECT id_billet, auteur, commentaire, date_commentaire FROM commentaires WHERE id_billet = ?');
      $billetComment -> execute(array($idBillet));

      $donneesBillet = $billetData->fetch();

      //Recuperation de l'id du billet
      $idbillet = $donneesBillet['id'];

      echo '<div class="news">';
      echo '<h3><strong>'.$donneesBillet['titre'].' </strong>' .dateTimeToString($donneesBillet['date_creation']). '</h3>';
      //nl2br, ajoute une balise br après chaque phrase de la chaine
      echo '<p>' .nl2br($donneesBillet['contenu']). '<br>';
      echo '</p>';
      echo '</div>';

      // On affiche les commentaires
      echo '<h2><strong> Commentaires </strong></h2>';
      echo '<div>';

      while ($commentairesBillet = $billetComment->fetch()) {

        echo '<p><strong>' .htmlspecialchars($commentairesBillet['auteur']). ' ' .dateTimeToString($donneesBillet['date_creation']).'</strong></p>';

        echo '<p>' .htmlspecialchars($commentairesBillet['commentaire']). '</p>';

      }

      echo '</div>';


      //Fermeture de la connexion
      $billetData->closeCursor();

      // Redirection vers index.php :
      // header('Location: index.php');

      //Functions

      //function pour afficher datetime en 2010-03-25 à 16h28min28s
      function dateTimeToString($dateToFormat) {
        $dateFormatee = '';
        //Partie de test de conversion de datetime
        $formatDate = $dateToFormat;
        $formatDate = date_create($formatDate);
        $formatDate = $formatDate->format('Y-m-d');

        $formatTime = $dateToFormat;
        $formatTime = date_create($formatTime);
        $formatTime = $formatTime->format('H\hi\m\i\ni\s');

        $dateFormatee = $formatDate. ' à ' .$formatTime;

        return $dateFormatee;
      }


    ?>


  </body>
</html>
