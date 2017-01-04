<?php

namespace App;

use \PDO;

class DataBase
{

    private $db_name;
    private $db_user;
    private $db_pass;
    private $db_host;
    private $pdo;

    /**
     * DataBase constructor.
     * @param $db_name
     * @param $db_user
     * @param $db_pass
     * @param $db_host
     */
    public function __construct($db_name, $db_user = 'root', $db_pass = '', $db_host = 'localhost')
    {
        $this->db_name = $db_name;
        $this->db_user = $db_user;
        $this->db_pass = $db_pass;
        $this->db_host = $db_host;
    }


    private function getPDO()
    {
        if ($this->pdo === null) {
            $pdo = new PDO('mysql:host=localhost;dbname=grafikart_blog', 'root', '');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo = $pdo;
        }
        return $this->pdo;
    }

    public function query($statement, $class_name, $one = false)
    {
        $req = $this->getPDO()->query($statement);
        $req->setFetchMode(PDO::FETCH_CLASS, $class_name);
        if ($one) {
            $data = $req->fetch();
        } else {
            $data = $req->fetchAll();
        }

        return $data;
    }

    public function prepare($statement, $attributes, $class_name, $one = false)
    {
        $req = $this->getPDO()->prepare($statement);
        $req->execute($attributes);
        $req->setFetchMode(PDO::FETCH_CLASS, $class_name);

        if ($one) {
            $data = $req->fetch();
        } else {
            $data = $req->fetchAll();
        }
        return $data;
    }

}
