// var helloWorld = "hello World";
// console.log(helloWorld);

// Afficher dynamiquement la date d'aujourd'hui
// sous la forme "Nous domme le [1][2]"
// ex "Nous sommes le 8 juillet"

var dateDuJour = new Date();
var month = dateDuJour.getMonth();
var day = dateDuJour.getDate();

var monthString = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

console.log("dateDuJour : ", dateDuJour);
console.log("day : ", day);
console.log("month : ", month);

console.log("Nous sommes le", day, monthString[month]);
