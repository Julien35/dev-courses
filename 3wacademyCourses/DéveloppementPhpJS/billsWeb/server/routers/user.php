<?php

if (!MainController::isUser() && !MainController::isAdmin()) {
    MainController::redirect('/forbidden');
}

if (count($arr) == 2) {
    $method = $arr[1];
}

switch ($method) {

  case 'payment':
  if (isset($_SESSION['bill'])) {
      require_once 'server/Controllers/BillController.php';

      $bill_controller = new BillController();
      $bill_controller->render('commons/payment.phtml');
  } else {
      require_once 'server/Controllers/MainController.php';
      $mc = new MainController();
      $mc->render();
  }

  break;

  case 'paid':
  if (isset($_SESSION['bill'])) {
      require_once 'server/Controllers/BillController.php';

      $bill_controller = new BillController();
      $bill_controller->createBillData($_SESSION['bill']);
      $bill_controller->render();
  } else {
      require_once 'server/Controllers/MainController.php';
      $mc = new MainController();
      $mc->render();
  }

  break;

  case 'recap':

    if (isset($_POST['products'], $_SESSION['roles'], $_SESSION['id'])) {
        require_once 'server/classes/Role.php';

        require_once 'server/Controllers/BillController.php';
        $bill_controller = new BillController();
        if ($bill_controller->getBillData($_POST['products'])) {
            $bill_controller->render('bills/recap.phtml');
        } else {
            require_once 'server/Controllers/MainController.php';
            $mc = new MainController();
            $mc->render('articles/article.phtml');
        }
    } else {
        require_once 'server/Controllers/MainController.php';
        $mc = new MainController();
        $mc->render('articles/article.phtml');
    }
  break;

  case 'logout':
    // die("logout");
    session_destroy();
    require_once 'server/Controllers/MainController.php';
    $mc = new MainController();
    $mc->render();
    break;

    case 'updateClient':
      if (isset($_POST['id'])) {
          require_once 'server/Controllers/ClientController.php';
          $client_controller = new clientController();
          $client_controller->update($_POST['id'],$_POST['lastname'],$_POST['firstname'],$_POST['address'],$_POST['siret'],$_POST['phone'],$_POST['mail']);
          $client_controller->render('clients/client.phtml');
      } else {
          require_once 'server/Controllers/MainController.php';
          $mc = new MainController();
          $mc->render();
      }
    break;

  case 'client':

        if (isset($_SESSION['id'])) {
            require_once 'server/Controllers/ClientController.php';
            $client_controller = new ClientController();
            $client_controller->one($_SESSION['id']);
        } else {
            require_once 'server/Controllers/MainController.php';
            MainController::redirect('/user');
        }
        break;

  case 'bills':
      require_once 'server/Controllers/BillController.php';
      $bill_controller = new BillController();
      $bill_controller->clientBills($_SESSION['id']);
      // $bill_controller->render('bills/list.html');
      break;

  case 'bill':
      // var_dump($_GET);

      if (isset($_GET['id'])) {
          require_once 'server/Controllers/BillController.php';
          $bill_controller = new BillController();
          $bill_controller->getBillDetails($_GET['id']);
          $bill_controller->render('bills/bill.phtml');
      } else {
          require_once 'server/Controllers/MainController.php';
          MainController::redirect('/user');
      }
      break;

  case 'articles':
      require_once 'server/Controllers/ArticleController.php';
      $article_controller = new ArticleController();
      $article_controller->all();
      $article_controller->render('articles/list.phtml');
      break;

  case 'article':
      if (isset($_POST['id'])) {
          require_once 'server/Controllers/ArticleController.php';
          $article_controller = new ArticleController();
          $article_controller->one($_POST['id']);
      } else {
          require_once 'server/Controllers/MainController.php';
          MainController::redirect('/user');
      }
      break;

  default:
    require_once 'server/Controllers/MainController.php';
    $mc = new MainController();
    $mc->render();
    break;
}
