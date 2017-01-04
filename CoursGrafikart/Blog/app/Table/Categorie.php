<?php

namespace App\Table;

use App\App;

class Categorie extends Table
{
    protected static $table = 'categorie';

    public function getUrl()
    {
        return 'index.php?p=article&id=' . $this->id;
    }
}