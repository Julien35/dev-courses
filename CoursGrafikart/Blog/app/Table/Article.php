<?php

namespace App\Table;

use App\App;

class Article extends Table
{

    protected static $table = 'article';

    public static function getLast()
    {
        return self::query("
            SELECT article.id, article.titre, article.contenu, categorie.titre as categorie
            FROM article 
            LEFT JOIN categorie 
            ON category_id = categorie.id
            ");
    }

    public static function lastByCategory($category_id)
    {
        return self::query("
            SELECT article.id, article.titre, article.contenu, categorie.titre as categorie
            FROM article 
            LEFT JOIN categorie 
            ON category_id = categorie.id
            WHERE category_id = ?
            ", [$category_id]);
    }

    public function getUrl()
    {
        return 'index.php?p=article&id=' . $this->id;
    }

    public function getExtrait()
    {
        $html = '<p>' . substr($this->contenu,0 ,50) . '...</p>';
        $html .= '<p><a href="' . $this->getURL() . '">Voir la suite</a></p>';
        return $html;
    }

}
