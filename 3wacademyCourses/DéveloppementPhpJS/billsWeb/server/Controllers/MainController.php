<?php

require_once 'server/classes/Role.php';
require_once 'server/classes/Flashbag.php';

class MainController
{
    protected $data = [
    'view' => 'commons/default.phtml',
    'title' => 'Home',
    'activeLink' => 'home',
  ];

    protected $flashBag;

  // protected $isAdmin = false;

  public function __construct()
  {
      $this->flashBag = new Flashbag();
  }

    public function forbidden()
    {
        $this->data['title'] = 'Access Not Allowed';
        $this->render('errors/forbidden.phtml');
    }

    public function render($view = 'commons/default.phtml')
    {
        $this->data['view'] = $view;
        include VIEWS_PATH.'/layout.phtml';
    }

    public static function getBasePath()
    {
        if (self::isAdmin()) {
            return '/admin/';
        } elseif (self::isUser()) {
            return '/user/';
        }

        return '/';
    }

    public static function redirect($path)
    {
        header('Location:'.$path);
    }

    public static function isAdmin()
    {
        return isset($_SESSION['roles']) && in_array(Role::ADMIN, $_SESSION['roles']);
    }

    public static function isUser()
    {
        return isset($_SESSION['roles']) && in_array(Role::USER, $_SESSION['roles']);
    }
}
