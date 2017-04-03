/* Le total des paiements effectués de chaque client (numéro, nom et pays) américain, allemand ou français de plus de 50000$ trié par pays puis par total des paiements décroissant */
SELECT customers.customerNumber, customerName, country, SUM(amount) AS totalPayment
FROM customers
INNER JOIN payments ON payments.customerNumber = customers.customerNumber
WHERE country IN ('France', 'Germany', 'USA')
GROUP BY customers.customerNumber, customerName, country
HAVING totalPayment > 50000
ORDER BY country, totalPayment DESC

/* RESULTAT ==> 38 lignes / 146 / 130305.35 */



/* Le montant total de chaque commande (numéro et date) des clients New-Yorkais (nom) trié par nom du client puis par date de commande */
SELECT customerName, orders.orderNumber, orderDate, SUM(quantityOrdered * priceEach) AS totalAmount
FROM customers
INNER JOIN orders ON orders.customerNumber = customers.customerNumber
INNER JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber
WHERE city = 'NYC'
GROUP BY city, customerName, orderNumber, orderDate
ORDER BY customerName, orderDate

/* RESULTAT ==> 16 lignes / Classic Legends / 10115 / 21665.98 */
