<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Bonjour.php</title>
  </head>
  <body>

    <?php
    if (isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['repeter']))
    {
    	// 1 : On force la conversion en nombre entier
    	$_GET['repeter'] = (int) $_GET['repeter'];

    	// 2 : Le nombre doit être compris entre 1 et 100
    	if ($_GET['repeter'] >= 1 AND $_GET['repeter'] <= 100)
    	{
    		for ($i = 0 ; $i < $_GET['repeter'] ; $i++)
    		{
    			echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !<br />';
    		}
    	}
    }
    else
    {
       echo 'Il faut renseigner un nom, un prénom et un nombre de répétitions !';
    }
    ?>

  </body>
</html>
