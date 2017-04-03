/* La liste des motos (nom, vendeur, quantité et marge) triés par marge décroissante */
SELECT productName, productVendor, quantityInStock, (MSRP - buyPrice) AS margin
FROM products
WHERE productLine = 'Motorcycles'
ORDER BY margin DESC

/* RESULTAT ==> 13 lignes / 2003 Harley-Davidson Eagle Drag Bike */



/* La liste des commandes (numéro, date de commande, date d'expédition, écart en jours entre les deux dates et statut) qui sont en cours de traitement ou qui ont été expédiées et ont un écart de plus de 10j triés par écart décroissant puis par date de commande */
SELECT orderNumber, orderDate, shippedDate, (shippedDate - orderDate) AS processTime, status
FROM orders
WHERE status = 'In Process' OR (status = 'Shipped' AND (shippedDate - orderDate) > 10)
ORDER BY processTime DESC, orderDate

/* RESULTAT ==> 33 lignes / 10165 */



/*La liste des produits (nom et valeur du stock à la vente) des années 1960 */
SELECT productName, (quantityInStock * MSRP) AS stockValue
FROM products
WHERE productName LIKE '196%'

/* RESULTAT ==> 16 lignes / 1969 Harley Davidson Ultimate Chopper */
