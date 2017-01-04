<?php

function getTraductionDb($word, $direction)
{
    $bdd = getBdd();

    if ($direction == 'fr') {
        $query = $bdd->prepare('SELECT fr FROM words WHERE en = :word');
    } else {
        $query = $bdd->prepare('SELECT en FROM words WHERE fr = :word');
    }

    $query->execute(['word' => $word]);
    $translation = $query->fetchAll(PDO::FETCH_ASSOC);

    if (count($translation) > 0) {
        return $translation[0];
    }
}

function getBdd()
{
    $bdd = new PDO('mysql:host=localhost;dbname=dictionary;charset=utf8', 'root', 'troiswa');

    return $bdd;
}
