<?php
// echo $_GET['orderNumber'];
// die($_GET['orderNumber']);

if (!isset($_GET['orderNumber'])) {
    die('client inconnu');
};

    // orderdetails
$pdo = new PDO('mysql:host=localhost;dbname=3waN12', '3waN12', '3waN12');
    $pdo->exec('SET NAMES UTF8');

    $query = $pdo->prepare(
    'SELECT products.productName, orderdetails.*
     FROM orderdetails
     INNER JOIN products ON products.productCode = orderdetails.productCode
     WHERE orderdetails.orderNumber  = :orderNumber
     '
);

    $query->execute(['orderNumber' => $_GET['orderNumber']]);
    $orderDetails = $query->fetchAll(PDO::FETCH_ASSOC);
  // $query->closeCursor();

// customers
$query = $pdo->prepare(
    'SELECT customers.*
     FROM orders
     INNER JOIN customers ON customers.customerNumber = orders.customerNumber
     WHERE orders.orderNumber  = :orderNumber
     '
);
    $query->execute(['orderNumber' => $_GET['orderNumber']]);
    $customer = $query->fetchAll(PDO::FETCH_ASSOC);

// var_dump(isset($orderDetails[0]));
// var_dump(isset($customer[0]));

if (count($orderDetails) && count($customer[0])) {
  $customer = $customer[0];
  include 'order-form.phtml';
} else {
  echo "Client inconnu";
}

// var_dump($orderDetails);
// var_dump($customer);
