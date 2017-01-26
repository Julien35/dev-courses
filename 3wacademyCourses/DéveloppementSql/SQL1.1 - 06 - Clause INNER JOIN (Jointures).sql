/* La liste des employés (nom, prénom et fonction) et des bureaux (adresse et ville) dans lequel ils travaillent */
SELECT lastName, firstName, jobTitle, addressLine1, addressLine2, city
FROM employees
INNER JOIN offices ON offices.officeCode = employees.officeCode

/* RESULTAT ==> 23 lignes / Diane Murphy */



/* La liste des clients français ou américains (nom du client, nom, prénom du contact et pays) et de leur commercial dédié (nom et prénom) triés par nom et prénom du contact */
SELECT customerName, contactLastName, contactFirstName, country, lastName, firstName
FROM customers
INNER JOIN employees ON employees.employeeNumber = customers.salesRepEmployeeNumber
WHERE country IN ('France', 'USA')
ORDER BY contactLastName, contactFirstName

/* RESULTAT ==> 48 lignes / Miguel Barajas */



/* La liste des lignes de commande (numéro de commande, code, nom et ligne de produit) et la remise appliquée aux voitures ou motos commandées triées par numéro de commande puis par remise décroissante */
SELECT orderNumber, orderdetails.productCode, productName, productLine, (MSRP - priceEach) AS discount
FROM orderdetails
INNER JOIN products ON products.productCode = orderdetails.productCode
WHERE productLine IN ('Classic Cars', 'Vintage Cars', 'Motorcycles')
ORDER BY orderNumber, discount DESC

/* RESULTAT ==> 2026 lignes / 34 */
