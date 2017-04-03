'use strict';

var nbRand = Math.trunc(Math.random() * 100);
console.log(nbRand);
// console.log(typeof(nbRand));
var nbJoueur = 0;
var bool = true;

// while (bool) {
//
//   nbJoueur = prompt("Entrez un numéro entre 0 et 100.");
//
//   if (nbJoueur >= 0 && nbJoueur <= 100) {
//
//     console.log(nbJoueur > 0 && nbJoueur < 100);
//
//     if (nbJoueur == nbRand) {
//
//       console.log(nbJoueur == nbRand);
//       alert("Vous avez trouvé le bon nombre.");
//       bool = false;
//
//     } else if (nbJoueur < nbRand) {
//
//       alert("Votre nombre est inférieur");
//
//     } else if (nbJoueur > nbRand) {
//
//       alert("Votre nombre est supérieur");
//
//     }
//
//   }
//
// }

do {

  nbJoueur = prompt("Entrez un numéro entre 0 et 100.");

  if (nbJoueur < nbRand) {

    alert("Votre nombre est inférieur");

  } else if (nbJoueur > nbRand) {

    alert("Votre nombre est supérieur");

  }

} while (nbJoueur != nbRand);
alert("Vous avez trouvé le bon nombre.");
