<?php

require_once 'server/Model/Model.php';
/**
 *
 */
class Bill extends Model
{
    public static $table = 'bill';

    public static function findAllByClient($idClient)
    {
      $sql = "SELECT * FROM " . static::$table . " WHERE client_id = :client_id";
      return DataBaseManager::execute($sql, ['client_id' => $idClient])->fetchAll(PDO::FETCH_ASSOC); //, get_called_class()
    }

    public static function insertBill($clientId)
    {
        $sql = 'INSERT INTO '.static::$table.' (`client_id`) VALUES (:client_id)';
        // var_dump($sql);
        DataBaseManager::execute($sql, ['client_id' => $clientId]);

        return DataBaseManager::getLastInsertId();
    }

}
