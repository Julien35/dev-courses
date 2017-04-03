<?php

require_once 'server/Controllers/MainController.php';
require_once 'server/Model/Bill.php';
require_once 'server/Model/BillDetails.php';
require_once 'server/Model/Article.php';
require_once 'server/Model/Client.php';

class BillController extends MainController
{

    public function createBillData($products)
    {
        // var_dump($products);
      $clientId = intval($products['client']['id'], 10);
      $billDetails = 0;
      $stockQuantity = 0;
      // insert into bill -> get new id

        foreach ($products as $key => $element) {
            if (isset($element['product'])) {
                $product = $element['product'];

                $stockQuantity = Article::getQuantity(intval($product['id'], 10));
                $ordered_quantity = $product['orderQuantity'];

                if ($ordered_quantity > $stockQuantity) {
                    $this->flashBag->Add('Un ou plusieurs produits ne sont plus en stock');

                    return false;
                }
            }
        }

        $newId = Bill::insertBill($clientId);
      // var_dump($newId);
      // insert into billDetails
      foreach ($products as $key => $element) {
          if (isset($element['product'])) {
              $product = $element['product'];

              $article_id_fk = intval($product['id'], 10);
              $bill_id_fk = $newId;
              $ordered_quantity = $product['orderQuantity'];
              $vat = 20.0;
              $unit_price = floatval($product['msrp']);

              BillDetails::insertBillDetails($article_id_fk, $bill_id_fk, $ordered_quantity, $vat, $unit_price);

              $stockQuantity = Article::getQuantity($article_id_fk);
              $stockQuantity = intval($stockQuantity['quantity']);
              // var_dump($article_id_fk);
              // var_dump($stockQuantity);
              // die();
              // var_dump($ordered_quantity);
              $quantity = $stockQuantity - $ordered_quantity;
              article::updateQuantity($article_id_fk, $quantity);
          }
      }
        $this->flashBag->Add('paiment accepté, merci !!!');
    }


    public function getBillDetails($idBill)
    {
      $bill = Bill::findOneById($idBill);
      $billDetails = billDetails::findOneById($idBill);

      $client_id = $bill['client_id'];
      $client = Client::findOneById($client_id);
      // var_dump($bill);
      // var_dump($billDetails);
      // var_dump($client);

      $this->data['client'] = $client;
      $this->data['bill'] = $bill;
      $this->data['billDetails'] = $billDetails;
      $this->data['title'] = 'Bill details';
    }

    public function getBillData($products)
    {
        // var_dump($products);
        $productsDetails = [];
        $totalCart = 0;

        foreach ($products as $productId => $count) {
            $article = Article::productBill($productId);

            $article['orderQuantity'] = intval($count);
            $article['totalPrice'] = intval($count) * floatval($article['msrp']);
            $totalCart += $article['totalPrice'];
            // var_dump($article);

            $productsDetails[$productId] = ['product' => $article];
        }

        $date = date('Y-m-d H:i:s');
        $client = Client::findOneById($_SESSION['id']);
        $productsDetails['date'] = $date;
        $productsDetails['client'] = $client;
        $productsDetails['totalCart'] = $totalCart;

        $this->data['bill'] = $productsDetails;
        $_SESSION['bill'] = $this->data['bill'];

        return $productsDetails;
    }

    public function clientBills($idClient)
    {
        // var_dump($idClient);
      $bills = Bill::findAllByClient($idClient);
      // var_dump($bills);
      // die();
      $this->data['bills'] = $bills;
      $this->data['title'] = 'Bills list';

      $this->render('bills/list.phtml');
    }

    public function all()
    {
        $this->data['activeLink'] = 'bill';

        $bills = Bill::findAll();
        $this->data['bills'] = $bills;
        $this->data['title'] = 'Bills List';

        $this->render('bills/list.phtml');
    }

    public function one($id)
    {
        $bill = Bill::findOneById($id);
        $this->data['bill'] = $bill;
        $this->data['title'] = 'Bill details';

        $this->render('bills/bill.phtml');
    }
}
