// Tranche d'âge	Exemple de commentaire
// 1 à 17 ans
// « Vous n'êtes pas encore majeur. »
// 18 à 49 ans
// « Vous êtes majeur mais pas encore senior. »
// 50 à 59 ans
// « Vous êtes senior mais pas encore retraité. »
// 60 à 120 ans
// « Vous êtes retraité, profitez de votre temps libre ! »

// Le déroulement du code sera le suivant :
//     L'utilisateur charge la page Web ;
//     Il est ensuite invité à taper son âge dans une fenêtre d'interaction ;
//     Une fois l'âge fourni l'utilisateur obtient un petit commentaire.

var age = prompt("Entrez votre age : ");
age = parseInt(age);
console.log("typeof(age) = ", typeof(age));
console.log("age = ", age);

if (age >= 1 && age <= 17) {
  alert("Vous n'êtes pas encore majeur.");
} else if (age >= 18 && age <= 49) {
  alert("Vous êtes majeur mais pas encore sénior.");
} else if (age >= 50 && age <= 59) {
  alert("Vous êtes senior mais pas encore retraité.");
} else if (age >= 60 && age <= 120) {
  alert("Vous êtes retraité, profitez de votre temps libre.");
} else {
  alert("Vous n'avez pas entré d'age");
}
