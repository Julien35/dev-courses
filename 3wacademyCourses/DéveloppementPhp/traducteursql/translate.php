<?php

require 'bddModel.php';
require 'translatefunctions.php';

$result = '';

// vérifier que le mot exite et est non vide
if (isset($_POST['word'])) {
    $word = $_POST['word'];

    if ($word != '') {

      // récupération du sens de traduction
      $direction = $_POST['direction'];

      // traduction
      $result = Translate($word, $direction);
    }
}

include 'translate.phtml';
