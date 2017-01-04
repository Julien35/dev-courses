<?php

namespace App\Table;

use App\App;


class Table
{

    public static function find($id)
    {
        return App::getDb()->prepare("
            SELECT *
            FROM " . static::$table . "
            WHERE id = ?
            ", [$id], get_called_class(), true);
    }


    public static function query($statement, $attributes = null, $one = false)
    {
        if ($attributes) {
            return App::getDb()->prepare($statement, $attributes, get_called_class(), $one);
        } else {
            return App::getDb()->query($statement, get_called_class(), $one);
        }
    }


    public static function all()
    {
        return App::getDb()->query("
            SELECT *
            FROM " . static::$table . "
            ", get_called_class());
    }


    public function __get($key)
    {
        $method = 'get' . ucfirst($key);
        $this->$key = $this->$method();
        return $this->$key;
    }

}
