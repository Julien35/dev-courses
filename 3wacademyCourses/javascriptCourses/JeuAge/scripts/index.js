// Déclaration de quatre variables.
var age = 0;
var aTrenteAns = false;
var estMajeur = false;
var estPasCentenaire = false;


// Affectation de la saisie de l'utilisateur à une variable.
age = window.prompt('Quel est votre âge ?');

if (age > 0) {

  if (age >= 30) {
    aTrenteAns = true;
    document.write('<p>Vous avez trente ans : ' + aTrenteAns + '.</p>');
  }
  if (age >= 18) {
    estMajeur = true;
    document.write('<p>Vous êtes majeur : ' + estMajeur + '.</p>');
  }
  if (age >= 100) {
    estPasCentenaire = true;
    document.write("<p>Vous n'êtes pas centenaire : " + estPasCentenaire +
      '.</p>');
  }

}
// else {
//   window.prompt("Ce n'est pas un nombre !!!");
// }
