<!DOCTYPE html>
<html>
    <head>
        <title>Mon blog</title>
        <meta charset="utf-8" />
        <link href="vue/blog/style.css" rel="stylesheet" type="text/css" />
    </head>

    <body>
        <h1>Mon super blog !</h1>
        <p>Derniers billets du blog :</p>

    <?php

    // foreach($billets as $billet)
      foreach($billets as $cle => $billet)
      {
        ?>
        <div class="news">
            <h3>
                <?php echo $billets[$cle]['titre']; ?>
                <em>le <?php echo $billet['date_creation_fr']; ?></em>
            </h3>

            <p>
            <?php echo $billet['contenu']; ?>
            <br />
            <em><a href="commentaires.php?billet=<?php echo $billet['id']; ?>">Commentaires</a></em>
            </p>
        </div>
        <?php
      }
    ?>
    </body>
</html>
