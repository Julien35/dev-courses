<?php

if (!MainController::isAdmin()) {
    MainController::redirect('/forbidden');
}

if (count($arr) == 2) {
    $method = $arr[1];
}
// die('admin/router');
// var_dump($method);

switch ($method) {

  case 'updateArticle':

      if (isset($_POST['id'])) {
          require_once 'server/Controllers/ArticleController.php';
          $article_controller = new ArticleController();
          $article_controller->update($_POST['id'], $_POST['name'], $_POST['description'], $_POST['photo'], $_POST['quantity'], $_POST['msrp'], $_POST['buyprice'], $_POST['saleprice']);
          $article_controller->render('articles/article.phtml');
      } else {
          require_once 'server/Controllers/MainController.php';
          $mc = new MainController();
          $mc->render();
      }
  break;

  case 'logout':
    session_destroy();
    // require_once 'server/Controllers/MainController.php';
    $mc = new MainController();
    $mc->render();
    break;

  //?method=clients
  case 'clients':
    require_once 'server/Controllers/ClientController.php';
    $client_controller = new ClientController();
    $client_controller->all();
    $client_controller->render();
    break;

  case 'client':

        if (isset($_POST['id'])) {
            require_once 'server/Controllers/ClientController.php';
            $client_controller = new ClientController();
            $client_controller->one($_POST['id']);
        } else {
            require_once 'server/Controllers/MainController.php';
            MainController::redirect('/admin');
        }
        break;

  case 'bills':
      require_once 'server/Controllers/BillController.php';
      $bill_controller = new BillController();
      $bill_controller->all();
      break;

  case 'bill':
      var_dump($_GET);
      if (isset($_POST['id'])) {
          require_once 'server/Controllers/BillController.php';
          $bill_controller = new BillController();
          $bill_controller->one($_POST['id']);
      } else {
          require_once 'server/Controllers/MainController.php';
          MainController::redirect('/admin');
      }
      break;

  case 'articles':
        require_once 'server/Controllers/ArticleController.php';
        $article_controller = new ArticleController();
        $article_controller->all();
        $article_controller->render('articles/list.phtml');
      break;

  case 'article':

      if (isset($_GET['id'])) {
          require_once 'server/Controllers/ArticleController.php';
          $article_controller = new ArticleController();
          $id = intval($_GET['id']);
          $article_controller->one($id);
          $article_controller->render('articles/article.phtml');
      } else {
          require_once 'server/Controllers/MainController.php';
          $mc = new MainController();
          $mc->render();
      }
      break;

  default:
    require_once 'server/Controllers/MainController.php';
    $mc = new MainController();
    $mc->render();
    break;
}
