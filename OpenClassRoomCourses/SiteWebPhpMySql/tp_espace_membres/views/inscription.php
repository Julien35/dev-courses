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
            <input type="text" name="pseudo" id="pseudo" placeholder="min de 4 caractères" required><br>
            <label for="password">Mot de passe</label>
            <input type="password" name="password1" id="password1" placeholder="min 6 caratères" required><br>
            <label for="password">Retaper votre mot de passe</label>
            <input type="password" name="password2" id="password2" required><br>
            <label for="email">Adresse email</label>
            <input type="email" name="email" id="email" placeholder="toto@toto.com" required>

        </fieldset>

        <input type="submit" value="Submit">
    </form>

  </body>
</html>
