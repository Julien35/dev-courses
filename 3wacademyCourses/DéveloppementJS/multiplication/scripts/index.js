// Construire une table des multiplications dans une variable
// puis afficher en HTML le contenu de cette variable.
// Détails
//
// Pour rappel, une boucle permet d'initialiser un tableau...
// Il faut utiliser un tableau HTML pour construire l'affichage
// Pour l'affichage HTML, lorsque le nombre est multiplié par
// lui-même (1x1, 2x2, 3x3, etc.),
// la cellule du tableau doit s'afficher
// d'une autre couleur que les autres cellules.
// La solution doit être en CSS.


(function() {
    'use strict';

    // récupère une référence dom de la balise body
    var body = document.getElementsByTagName("body")[0];
    // crée l'élément <table>
    var table = document.createElement("table");

    var tableSize = 10;


    // ajoute <table> à l'élément <body>
    body.appendChild(table);

    var tabMulti = multi(tableSize);
    console.log(tabMulti);
    multiDisplay(tabMulti, table);



    // functions

    function multi(tableSize) {
        var tab = [];
        for (var i = 0; i < tableSize; i++) {
            tab[i] = [];
            for (var j = 0; j < tableSize; j++) {
                tab[i][j] = (i + 1) * (j + 1);
            }
        }
        return tab;
    }


    function multiDisplay(tabMulti, table) {

        // crée l'élément <tbody>
        var tablebody = document.createElement("tbody");

        // boucle de création de colonnes et lignes
        var col = [];
        var row = [];
        var n = tabMulti.length;

        // boucle pour créer les colonnes
        for (var i = 0; i <= n; i++) {

            col[i] = document.createElement("tr");

            // boucle pour créer les lignes
            for (var j = 0; j <= n; j++) {
                // creation de la ligne j puis insertion dans la col i
                row[j] = document.createElement("td");

                if (i == 0 && j == 0) {
                    var tabText = document.createTextNode("X");
                    // continue;
                } else if (i == 0) {
                    var tabText = document.createTextNode(j);
                    // continue;
                } else if (j == 0) {
                    var tabText = document.createTextNode(i);
                    // continue;
                } else {
                    var tabText = document.createTextNode(tabMulti[i - 1][j - 1]);
                    console.log(tabMulti[i - 1][j - 1]);
                }

                row[j].appendChild(tabText);
                if (i == j) {
                    row[i].setAttribute("class", "iegalj");
                }
                col[i].appendChild(row[j]);

            }

            // place <tr> dans l'élement tbody
            tablebody.appendChild(col[i]);
        }

        // place <tbody> dans l'élément <table>
        table.appendChild(tablebody);

    }

}());
