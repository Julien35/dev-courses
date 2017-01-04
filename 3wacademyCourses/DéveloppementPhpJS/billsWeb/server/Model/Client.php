<?php

require_once 'server/Model/Model.php';
/**
 *
 */
class Client extends Model
{

  public static function updateAll($id, $lastname, $firstname, $address, $siret, $phone, $mail)
  {

    $sql = "UPDATE ". static::$table . " SET lastname = :lastname, firstname = :firstname,
                                        address = :address, siret = :siret, phone=:phone,
                                        mail=:mail WHERE id = :id";
    DataBaseManager::execute($sql, ['id' => $id,
                                    'lastname' => $lastname,
                                    'firstname' => $firstname,
                                    'address' => $address,
                                    'siret' => $siret,
                                    'phone' => $phone,
                                    'mail' => $mail,
                                  ]);
  }


    public static $table = 'client';

    public static function findOneByEmail($email)
    {
        $sql = 'SELECT * FROM '.static::$table.' WHERE mail = :email';
        $client = DataBaseManager::execute($sql, ['email' => $email]);
        $client = $client->fetch(PDO::FETCH_ASSOC);

        if (is_array($client) && isset($client['roles'])) {
            $client['roles'] = unserialize($client['roles']);
        }
        return $client;
    }

    public static function insertNewClient($client)
    {
        $sql = 'INSERT INTO ' .static::$table. '( `lastname`, `firstname`,
           `siret`,`mail`, `password`, `roles`)
            VALUES (:lastname,:firstname,:siret,:mail,:password,:roles)';

        $newClient = DataBaseManager::execute($sql, [
          'lastname' => $client['lastname'],
          'firstname' => $client['firstname'],
          'siret' => $client['siret'],
          'mail' => $client['mail'],
          'password' => $client['password'],
          'roles' => serialize([Role::USER]),
        ]);

        return $newClient;
    }
}
