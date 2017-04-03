// Ce que nous vous demandons ici, c'est de stocker les prénoms dans un tableau.
// Pensez à la méthode push().
// À la fin, il faudra afficher le contenu du tableau, avec alert(),
// seulement si le tableau contient des prénoms ;
// en effet, ça ne sert à rien de l'afficher s'il ne contient rien.
// Pour l'affichage, séparez chaque prénom par une espace.
// Si le tableau ne contient rien, faites-le savoir à l’utilisateur,
// toujours avec alert().
(function() {
  'use strict';

  var nicks = [],
    nick;
  console.log("nicks.length = ", nicks.length);

  //Si nick n'est pas null > true
  while (nick = prompt('Entrez un prénom :')) {
    console.log("nick = ", nick);
    nicks.push(nick); //ajout du prénom dans le tableau si nick existe.
  }

  if (nicks.length > 0) {
    //on affiche le tableau
    alert(nicks.join(' '));

  } else {
    alert("Le tableau ne contient pas de prénom.");
  }

}());
