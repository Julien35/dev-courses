<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="styles/mystyles.css">
    <title>Formulaire d'inscription</title>
  </head>
  <body>

    <form class="form" action="index.php" id="form" method="post">
        <fieldset>

            <legend>formulaire d'inscription</legend>
            <label for="pseudo">Pseudo</label>
            <input type="text" name="pseudo" placeholder="min de 4 caractères" id="pseudo" required><br>
            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password" placeholder="min 6 caratères" required><br>
            <label for="automatique">Connexion automatique</label>
            <input type="checkbox" name="automatique" id="automatique">
        </fieldset>

        <input type="submit" value="Se connecter">
    </form>

  </body>
</html>
