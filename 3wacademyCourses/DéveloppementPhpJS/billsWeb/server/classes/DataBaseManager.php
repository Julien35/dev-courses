<?php

class DataBaseManager
{

    private static $lastIndex = 0;
    private static $pdo;

    private static function getPdo()
    {
        if (isset(self::$pdo)) {
          return self::$pdo;
        }

        $pdo = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=utf8',
        DB_USER, DB_PASSWORD);

         $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
         self::$pdo =  $pdo;

        return $pdo;
    }

    public static function execute($sql, $params = []) //, $class
    {
        $pdo = self::getPdo();

        // echo $class;
        $resultat = $pdo->prepare($sql);  // requête préparée
        // $resultat->setFetchMode(PDO::FETCH_CLASS, $class);

        $resultat->execute($params);
        self::$lastIndex = intval($pdo->lastInsertId(), 10);
        // var_dump(self::$lastIndex);
        return $resultat;
    }

    public static function getLastInsertId()
    {
      return self::$lastIndex;
    }
}
