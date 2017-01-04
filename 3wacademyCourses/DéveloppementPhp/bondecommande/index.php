<?php

/*
 * Construction d'un objet PDO représentant la connexion à la base de données.
 *
 * Le premier argument est un Data Source Name (DSN) représentant où est-ce qu'il
 * faut se connecter. Une adresse IP ou un nom de domaine peut être spécifié.
 *
 * /!\ Tout le DSN doit être écrit en minuscules et sans espaces.
 *
 */
$pdo = new PDO('mysql:host=localhost;dbname=3waN12', '3waN12', '3waN12');

// Paramétrage de la liaison PHP <-> MySQL, les données sont encodées en UTF-8.
$pdo->exec('SET NAMES UTF8');

/*
 * Préparation de la requête SQL, PDO renvoie un objet de la classe PDOStatement
 * http://www.php.net/manual/fr/class.pdostatement.php
 *
 * On peut dire que cet objet représente la requête SQL, on appelle donc la
 * variable $query.
 */
$query = $pdo->prepare(
    'SELECT
        orderNumber,
        orderDate,
        shippedDate,
        status
     FROM orders
     ORDER BY orderDate'
);

// Demande à PDO d'envoyer la requête à MySQL pour exécution.
$query->execute();

/*
 * Récupération de toutes les données renvoyées par MySQL.
 *
 * La méthode fetchAll() renvoie un tableau à deux dimensions :
 * - la première dimension représente les différentes lignes de données
 * - la deuxième dimension représente les colonnes SQL de chaque ligne de données
 */
$orders = $query->fetchAll(PDO::FETCH_ASSOC);

include 'index.phtml';
