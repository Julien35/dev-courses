<?php

require_once 'server/Controllers/MainController.php';
require_once 'server/Model/Client.php';

class ClientController extends MainController
{
    public function update($id, $lastname, $firstname, $address, $siret, $phone, $mail)
    {

        $id = intval($id);
        $siret = intval($siret);

    Client::updateAll($id, $lastname, $firstname, $address, $siret, $phone, $mail);

        $this->data['activeLink'] = 'client';
        $this->data['client'] = $this->one($id);
        $this->data['title'] = 'Client List';
        $this->data['view'] = 'client/client.phtml';
    }

    public function all()
    {
        $this->data['activeLink'] = 'client';

        $clients = Client::findAll();

        $this->data['clients'] = $clients;
        $this->data['title'] = 'Client List';

        $this->render('clients/list.phtml');
    }

    public function one($id)
    {
        $client = Client::findOneById($id);

        $this->data['client'] = $client;
        $this->data['title'] = 'Client details';

        $this->render('clients/client.phtml');
    }
}
