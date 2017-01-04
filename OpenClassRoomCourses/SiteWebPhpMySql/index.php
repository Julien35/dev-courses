<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Mon super site</title>
    </head>

    <body>

    <!-- L'en-tête -->
    <?php include("entete.php") ?>

    <!-- Le menu -->

    <?php include("menus.php") ?>

    <!-- Le corps -->

    <a href="bonjour.php?nom=Dupont&amp;prenom=Jean">Dis-moi bonjour !</a>

    <div id="corps">
        <h1>Mon super site</h1>

        <p>
            Bienvenue sur mon super site !<br />
            Vous allez adorer ici, c'est un site génial qui va parler de... euh... Je cherche encore un peu le thème de mon site. :-D
        </p>
    </div>

    <div id="fileslist">

      <?php
        $path = realpath('');
        $files1 = scandir($path);
        // print_r($files1);

        echo '<br>';
        unset($files1[0]);
        unset($files1[1]);

        foreach ($files1 as $key => $value) {

          $info = new SplFileInfo($value);

          if (is_file($value) && (($info->getExtension()) ==='php')) {
            // echo "Je suis un fichier php";
            echo '<a href="'.nl2br($value).'">' .$value;
          } else {
            echo $value;
          }

          echo '<br>';
        }

      ?>

    </div>



    <!-- Le pied de page -->
    <?php include("pied_de_page.php") ?>

    </body>
</html>
