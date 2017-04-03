// Script entier en mode strict
"use strict";

// Créer puis afficher en HTML un objet contenant
// les propriétés d'une voiture :
//
//     La marque de la voiture
//     Son année de fabrication
//     Sa date d'achat
//     La liste des passagers (au moins 2),
// avec le prénom de chacun des passagers


// ou var voiture = new Object();
var voiture = {
  marque: "Renault",
  color: 'red',
  anneeFabrication: new Date('2014-04-05'),
  anneeAchat: new Date('2014-05-01'),
  passagers: ['Henri', 'Odette']
};

console.log(voiture);

document.write("<ul>");
document.write("<li>" + voiture.marque + "</li>");
document.write("<li>" + voiture.color + "</li>");
document.write("<li>" + voiture.anneeFabrication.toDateString() + "</li>");
document.write("<li>" + voiture.anneeAchat.toDateString() + "</li>");
document.write("<li>" + voiture.passagers[0] + "</li>");
document.write("<li>" + voiture.passagers[1] + "</li>");
