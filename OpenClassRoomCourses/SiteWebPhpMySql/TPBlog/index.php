<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <meta charset="utf-8">
    <title>Liste des billets</title>
  </head>
  <body>
    <h1>Mon super Blog !</h1>

    <?php

      try
      { //Connexion base à la test
        $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
      }
      catch(Exception $e)
      {
              die('Erreur : '.$e->getMessage());
      }

      //Préparation de la requête de lecture
      $reponse = $bdd->query('SELECT id, titre, contenu, date_creation FROM billets ORDER BY id DESC LIMIT 0, 5');

      echo '<p>Derniers billets du blog :</p>';

      while ($donnees = $reponse->fetch())
      {

        //Recuperation de l'id du billet
        $idbillet = $donnees['id'];

        echo '<div class="news">';
        echo '<h3><strong>'. htmlspecialchars($donnees['titre']).' </strong>' .dateTimeToString($donnees['date_creation']). '</h3>';
        //nl2br, ajoute une balise br après chaque phrase de la chaine
        echo '<p>' .nl2br(htmlspecialchars($donnees['contenu'])). '<br>';

        //Lien vers commentaires avec url + parametre
        echo '<a href="commentaires.php?id_billet=',urlencode($idbillet),'"><em>Commentaires</em></a>';
        echo '</p>';
        echo '</div>';
      }

      //Fermeture de la connexion
      $reponse->closeCursor();

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
