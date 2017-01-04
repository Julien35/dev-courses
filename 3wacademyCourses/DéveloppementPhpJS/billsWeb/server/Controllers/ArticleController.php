<?php

require_once 'server/Controllers/MainController.php';
require_once 'server/Model/Article.php';

class ArticleController extends MainController
{
    public function update($id, $name, $description, $photo, $quantity, $msrp, $buyprice, $saleprice)
    {
      $id = intval($id);
      $quantity = intval($quantity);
      $msrp = floatval($msrp);
      $buyprice = floatval($buyprice);
      $saleprice = floatval($saleprice);

      // var_dump($id, $name, $description, $photo, $quantity, $msrp, $buyprice, $saleprice);
      Article::updateAll($id, $name, $description, $photo, $quantity, $msrp, $buyprice, $saleprice);

      $this->data['activeLink'] = 'article';
      $this->data['articles'] = $this->one($id);
      $this->data['title'] = 'Articles List';
      $this->data['view'] = 'articles/list.phtml';

    }

    public function all()
    {
        $articles = Article::findAll();
        $this->data['activeLink'] = 'article';
        $this->data['articles'] = $articles;
        $this->data['title'] = 'Articles List';
        $this->data['view'] = 'articles/list.phtml';
    }

    public function one($id)
    {
        $article = Article::findOneById($id);
        $this->data['article'] = $article;
        $this->data['title'] = 'Article details';
        $this->data['view'] = 'articles/bill.phtml';
    }
}
