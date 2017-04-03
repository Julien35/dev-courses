<?php

// die('front/router');

switch ($method) {

  case 'forbidden':
    require_once 'server/Controllers/MainController.php';
    $mc = new MainController();
    $mc->forbidden();
    break;

  case 'recap':
    require_once 'server/Controllers/AuthController.php';
    require_once 'server/classes/Flashbag.php';
    //var_dump('front/recap');

    // AJOUTER AU CONTROLEUR
    $flashBag = new FlashBag();
    $flashBag->add('Please Login or register');

    require_once 'server/Controllers/MainController.php';
    $mc = new MainController();
    $mc->render();
    
  break;

  case 'register':

  require_once 'server/Controllers/AuthController.php';
  require_once 'server/classes/Validate.php';

  if (isset($_POST['email'], $_POST['password'])) {
      $dataClient = [
        'firstname' => $_POST['firstname'],
        'lastname' => $_POST['lastname'],
        'siret' => $_POST['siret'],
        'mail' => $_POST['email'],
        'password' => $_POST['password'],
      ];

      if (Validate::email($dataClient['mail']) && Validate::password($dataClient['password']
      && Validate::siret($dataClient['siret']))) {
          $auth_controller = new AuthController();
          $isRegisterOk = $auth_controller->register($dataClient);
          $isLoginOk = $auth_controller->login($dataClient['mail'], $dataClient['password']);
          $auth_controller->render();
      } else {
          require_once 'server/Controllers/MainController.php';
          $mc = new MainController();
          $mc->render();
      }
  }
  break;

  case 'login':

  require_once 'server/Controllers/AuthController.php';
  require_once 'server/classes/Validate.php';

  if (isset($_POST['email'], $_POST['password'])) {
      $email = $_POST['email'];
      $mdp = $_POST['password'];

      if (Validate::email($email) && Validate::password($mdp)) {
          $auth_controller = new AuthController();
          $isLoginOk = $auth_controller->login($email, $mdp);
          $auth_controller->render();
          // $auth_controller::redirect($auth_controller::getBasePath());
      }
  } else {
      require_once 'server/Controllers/MainController.php';
      $mc = new MainController();
      $mc->render();
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
      MainController::redirect('/');
  }
    break;

  default:
    require_once 'server/Controllers/MainController.php';
    $mc = new MainController();
    $mc->render();
    break;
}
