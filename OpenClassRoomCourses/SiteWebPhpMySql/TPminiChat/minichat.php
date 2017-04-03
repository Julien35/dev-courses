<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>MiniChat</title>
  </head>
  <body>
    <!-- contient le formulaire permettant d'ajouter un message
    et liste les 10 derniers messages-->
    <form class="form" action="minichat_post.php" id="form" method="post" enctype="multipart/form-data">
      <fieldset>
        <legend>MiniChat</legend>

        <label for="pseudo">Pseudo : </label>
        <input type="text" name="pseudo" id="pseudo" required
        value="<?php echo lastPseudo(); ?>"><br>

        <label for="message">Message : </label>
        <input type="text" name="message" id="message" required><br>

        <input type="submit" value="envoyer" />
      </fieldset>

        <fieldset>
          <div id="lastmessage">

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
            $reponse = $bdd->query('SELECT id, pseudo, message, date_creation FROM minichat ORDER BY id DESC LIMIT 0, 10');

            while ($donnees = $reponse->fetch())
            {
              if($donnees['date_creation']) {
                  echo '[' .dateTimeToString($donnees['date_creation']). '] ';
              }

            	echo '<strong>'.$donnees['pseudo'].'</strong> : ' .$donnees['message']. '<br />';
            }

            //Fermeture de la connexion
            $reponse->closeCursor();

            //Functions

            //Last pseudo
            Function lastPseudo() {
              $pseudo = "";

              if (isset($_GET['pseudo'])) {
                $pseudo = $_GET['pseudo'];
              }

              return $pseudo;
            }

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

          </div>

        </fieldset>


    </form>

  </body>
</html>
