// Script entier en mode strict
"use strict";
// main :

// generer le tableau de jeu

// récupère une référence dom de la balise body
var body = document.getElementsByTagName("body")[0];
// récupère la référence dom de la balise main
var main = document.getElementsByTagName("main")[0];
// crée l'élément <table>
var table = document.createElement("table");

var boardSize = 5;
boardGameInit(boardSize, table);
// ajoute <table> à l'élément <main>
main.appendChild(table);



/////////////////////////// EN COURS DE DEV  /////////////////////////


// Placement initial du joueur
// <i class="fa fa-android fa-2x fa-spin" aria-hidden="true"></i>
var joueur = document.createElement("i");
joueur.setAttribute('class', 'fa fa-android fa-2x fa-spin');
joueur.setAttribute('aria-hidden', 'true');


// recuperer tr 3, td 3
// à présent, trouve tous les éléments td enfants de cet élément body
var trElements = document.getElementsByTagName("tr");
console.log("trElements : ", trElements);
// récupère l'élément du milieu
var tabCenter = middleCoord(boardSize);
var myTr = trElements[tabCenter];
console.log("myTr : ", myTr);



main.appendChild(joueur);



// dev functions in progress

// Récupérer coord central du tableau
function getTabCoord(boardSize) {
  var coordX = 0;
  var coordY = 0;

  return [coordX, coordY];
}

console.log(getTabCoord(boardSize));
// tabCenter = middleCoord(boardSize);
console.log(tabCenter);


// functions OK

// function coord milieu du tableau
function middleCoord(boardSize) {
  var tabCenter = 0;
  tabCenter = Math.round(boardSize / 2);
  // console.log(tabCenter);
  return tabCenter;
}

// fonction de creation du tableau de jeux
function boardGameInit(boardSize, table) {
  // crée l'élément <tbody>
  var tablebody = document.createElement("tbody");

  // boucle de création de colonnes et lignes
  var col = [];
  var row = [];
  var n = boardSize;

  // boucle pour créer les colonnes
  for (var i = 0; i < n; i++) {

    col[i] = document.createElement("tr");

    // boucle pour créer les lignes
    for (var j = 0; j < n; j++) {
      // creation de la ligne j puis insertion dans la col i
      row[j] = document.createElement("td");
      col[i].appendChild(row[j]);
    }

    // place <tr> dans l'élement tbody
    tablebody.appendChild(col[i]);
  }

  // place <tbody> dans l'élément <table>
  table.appendChild(tablebody);

  // border du tableau à 3
  // table.setAttribute("border", "3");

}
