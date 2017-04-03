/* Le prix moyen d'un produit vendu par chaque vendeur triés par prix moyen décroissant */
SELECT productVendor, AVG(MSRP) AS averagePrice
FROM products
GROUP BY productVendor
ORDER BY averagePrice DESC

/* RESULTAT ==> 13 lignes / Welly Diecast Productions / 113.9325 */



/* Le nombre de produits pour chaque ligne de produit */
SELECT productLine, COUNT(productCode)
FROM products
GROUP BY productLine

/* RESULTAT ==> 7 lignes / Classic Cars / 38 */



/* Le total du stock et le total de la valeur du stock à la vente de chaque ligne de produit pour les produits vendus plus de 100$ trié par total de la valeur du stock à la vente */
SELECT productLine, SUM(quantityInStock) AS totalStock, SUM(quantityInStock * MSRP) AS totalStockValue
FROM products
WHERE MSRP > 100
GROUP BY productLine
ORDER BY totalStockValue

/* RESULTAT ==> 7 lignes / Ships / 429177.74 */



/* La quantité du produit le plus en stock de chaque vendeur trié par vendeur */
SELECT productVendor, MAX(quantityInStock) AS maxInStock
FROM products
GROUP BY productVendor
ORDER BY productVendor

/* RESULTAT ==> 13 lignes / Autoart Studio Design / 9354 */



/* Le prix de l'avion qui coûte le moins cher à l'achat */
SELECT MIN(buyPrice) AS cheapestPricePlane
FROM products
WHERE productLine = 'Planes'

/* RESULTAT ==> 1 ligne / 29.34$ */



/* Le crédit des clients qui ont payé plus de 20000$ durant l'année 2004 trié par crédit décroissant */
SELECT customerNumber, SUM(amount) AS totalCredit
FROM payments
WHERE paymentDate BETWEEN '2004-01-01' AND '2004-12-31'
GROUP BY customerNumber
HAVING totalCredit > 20000
ORDER BY totalCredit DESC

/* RESULTAT ==> 69 lignes / 141 / 293 765.51 */
