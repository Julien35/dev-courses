<?php

switchValues();



















function switchValues()
{
    // Ecrire un programme permettant d’échanger
  // les valeurs de deux variables first et second,
  // et ce quel que soit leur contenu préalable
  $first = 1;
    $second = 5;
    echo $first.' et '.$second.'<br>';
    $temp = $first;
    $first = $second;
    $second = $temp;
    echo $first.' et '.$second;
}
