<?php

require_once 'server/Model/Model.php';

class Article extends Model
{
    public static $table = 'article';


    public static function updateAll($id, $name, $description, $photo, $quantity, $msrp, $buyprice, $saleprice)
    {

      $sql = "UPDATE ". static::$table . " SET name = :name, description = :description,
                                          photo = :photo, quantity = :quantity, msrp=:msrp,
                                          buyprice=:buyprice,saleprice=:saleprice WHERE id = :id";
      DataBaseManager::execute($sql, ['id' => $id,
                                      'name' => $name,
                                      'description' => $description,
                                      'photo' => $photo,
                                      'quantity' => $quantity,
                                      'msrp' => $msrp,
                                      'buyprice' => $buyprice,
                                      'saleprice' => $saleprice,
                                    ]);
    }

    public static function updateQuantity($idArticle, $quantity)
    {
      $sql = "UPDATE ". static::$table . " SET quantity = :quantity WHERE id = :id";
      DataBaseManager::execute($sql, ['id' => $idArticle,
                                      'quantity' => $quantity,]);
    }

    public static function getQuantity($productId)
    {
      $sql = "SELECT quantity FROM " . static::$table . " WHERE id = :id";
      return DataBaseManager::execute($sql, ['id' => $productId])->fetch(PDO::FETCH_ASSOC); //, get_called_class()
    }

    public static function productBill($productId)
    {
      $product = [];
      $article = self::findOneById($productId);

      $product = [
        'id' => $article['id'],
        'name' => $article['name'],
        'description' => $article['description'],
        'photo' => $article['photo'],
        'quantity' => $article['quantity'],
        'msrp' => $article['msrp'],
        'buyprice' => $article['buyprice'],
        'saleprice' => $article['saleprice'],
        'orderQuantity' => 0,
        'totalPrice' => 0.0,
      ];

    return $product;
    }

    public function findByQuantity($quantity, $order = '>'){

    }
}
