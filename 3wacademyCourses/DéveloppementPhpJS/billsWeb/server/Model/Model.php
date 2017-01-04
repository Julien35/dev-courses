<?php

require_once 'server/classes/DataBaseManager.php';

abstract class Model
{

  public static function findOneById($id)
  {
    $sql = "SELECT * FROM " . static::$table . " WHERE id = :id";
    return DataBaseManager::execute($sql, ['id' => $id])->fetch(PDO::FETCH_ASSOC); //, get_called_class()
  }

  public static function findAll()
  {
    $findAll = DataBaseManager::execute('SELECT * FROM ' . static::$table);
    return $findAll->fetchAll(PDO::FETCH_ASSOC);
  }

}
