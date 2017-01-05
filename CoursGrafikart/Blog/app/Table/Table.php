<?php

namespace App\Table;

use App\App;
use App\DataBase;


class Table
{
    protected $table;
    protected $db;

    public function __construct(DataBase $db)
    {
        $this->db = $db;
        if (is_null($this->table)) {
            $parts = explode('\\', get_class($this));
            $class_name = end($parts);
            $this->table = strtolower(str_replace('Table', '', $class_name));
        }
    }

}
