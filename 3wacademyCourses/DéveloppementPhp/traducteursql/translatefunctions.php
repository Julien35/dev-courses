<?php

function translate($word, $direction = 'toEnglish')
{

  if ($direction == 'toFrench') {
      $translation = getTraductionDb($word, 'fr')['fr'];
  } else { // toEnglish
      $translation = getTraductionDb($word, 'en')['en'];
  }

    return $translation;
}
