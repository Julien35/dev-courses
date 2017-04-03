<?php

function getDico($isJSON){

  $dic=[];

  if ($isJSON) {
  $string = file_get_contents("dictionary.json");
  $json = json_decode($string, true);
  $dic = $json;
  } else {
    $dic =  [
    'cat' => 'chat',
    'dog' => 'chien',
  ];
  }
return $dic;
}

function translate($word, $direction = 'toEnglish')
{
    $translation = '';
    $dic = getDicogetDico(true);

    if ($direction == 'toFrench') {
        foreach ($dic as $en => $fr) {
            if ($en == $word) {
                $translation = $fr;
            }
        }
    } else { // toEnglish

    foreach ($dic as $en => $fr) {
        if ($fr == $word) {
            $translation = $en;
        }
    }
    }

    return $translation;
}

function translate2($word, $direction = 'toEnglish')
{
    $translation = '';
    $dic = getDico(true);

    if ($direction == 'toFrench') {
        if (array_key_exists($word, $dic)) {
            $translation = $dic[$word];
        } else {
            $translation = 'Not found';
        }
    } else {
        if (in_array($word, $dic)) {
            $translation = array_search($word, $dic);
        }
    }

    return $translation;
}
