<?php

require_once 'server/Controllers/MainController.php';
require_once 'server/Model/Client.php';

class AuthController extends MainController
{

    public function register($dataClient)
    {
        $dataClient['password'] = hash('sha512', $dataClient['password']);

        $client = Client::insertNewClient($dataClient);
        if ($client == null) {
            $this->flashBag->Add('Register Error');
            return false;
        }

        $this->flashBag->Add('Register Client');
      
        // $this->path = USER_PATH;
        // Redirection by MainControler::Destruct()
        // self::redirect(self::getBasePath());
    }

    public function login($email, $mdp)
    {
        $client = Client::findOneByEmail($email);
        if ($client == null) {
            $this->flashBag->Add('Invalid credencials, email not found');

            return false;
        }
        if (strcasecmp($client['password'], hash('sha512', $mdp)) !== 0) {
            $this->flashBag->Add('Invalid credencials');

            return false;
        }

        $_SESSION['roles'] = $client['roles'];
        $_SESSION['id'] = $client['id'];

    }
}
