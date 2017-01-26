/* La liste des avions (code et nom) triés par vendeur et par quantité en stock décroissants */
SELECT productCode, productName
FROM products
WHERE productLine = 'Planes'
ORDER BY productVendor DESC, quantityInStock DESC

/* RESULTAT ==> 12 lignes / 1900s Vintage Tri-Plane */



/* La liste des produits (code, nom, échelle et quantité) qui ont une échelle soit de 1:10, soit de 1:18 triés par quantité en stock décroissante */
SELECT productCode, productName, productScale, quantityInStock
FROM products
WHERE productScale IN ('1:10', '1:18')	/* équivalent à WHERE productScale = '1:10' OR productScale = '1:18' */
ORDER BY quantityInStock DESC

/* RESULTAT ==> 48 lignes / 1995 Honda Civic */



/* La liste des produits (nom, vendeur et prix de vente) qui sont vendus au moins 132$ triés par nom du produit */
SELECT productName, productVendor, MSRP
FROM products
WHERE MSRP >= 132
ORDER BY productName

/* RESULTAT ==> 24 lignes / 1903 Ford Model A */



/* La liste des produits (code, nom et prix d'achat) des produits achetés au moins 60$ au plus 90$ triés par prix d'achat */
SELECT productCode, productName, buyPrice
FROM products
WHERE buyPrice BETWEEN 60 AND 90	/* équivalent à WHERE buyPrice >= 60 AND buyPrice <= 90 */
ORDER BY buyPrice

/* RESULTAT ==> 34 lignes / 1937 Lincoln Berline */
