/* La liste des bureaux (adresse et ville) triés par pays décroissant puis par état */
SELECT addressLine1, addressLine2, city, country, state
FROM offices
ORDER BY country DESC, state

/* RESULTAT ==> 7 lignes / 100 Market Street */
