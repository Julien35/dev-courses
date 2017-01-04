<?php

require_once 'server/Model/Model.php';
/**
 *
 */
class BillDetails extends Model
{
    public static $table = 'billDetails';

    public static function findOneById($id)
    {
      $sql = "SELECT * FROM " . static::$table . " WHERE bill_id_fk = :id";
      return DataBaseManager::execute($sql, ['id' => $id])->fetchAll(PDO::FETCH_ASSOC); //, get_called_class()
    }

    public static function insertBillDetails($article_id_fk, $bill_id_fk, $ordered_quantity, $vat, $unit_price)
    {
      // var_dump($article_id_fk, $bill_id_fk, $ordered_quantity, $vat, $unit_price);

        $sql = 'INSERT INTO '.static::$table.' (`article_id_fk`, `bill_id_fk`, `ordered_quantity`, `vat`, `unit_price`)
      VALUES (:article_id_fk, :bill_id_fk, :ordered_quantity, :vat, :unit_price)';

        DataBaseManager::execute($sql, [
          'article_id_fk' => $article_id_fk,
          'bill_id_fk' => $bill_id_fk,
          'ordered_quantity' => $ordered_quantity,
          'vat' => $vat,
          'unit_price' => $unit_price,
          ]);

        return DataBaseManager::getLastInsertId();
    }
}
