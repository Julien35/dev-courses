'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function letterA() {
    return "A";
}

function letterB() {
    return "B";
}

function letterC() {
    return "C";
}



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

var result = "";

// chaine A
result = letterA();
console.log(result);
// chaine AC
result += letterC();
console.log(result);

// chaine ABBCCC
result = letterA();
for (var i = 0; i < 2; i++) {
    result += letterB();
}
for (var i = 0; i < 3; i++) {
    result += letterC();
}
console.log(result);

// Chaine CBCBA
result = "";
for (var i = 0; i < 2; i++) {
    result += letterC() + letterB();
}
result += letterA();
console.log(result);

// Chaine CB! CCB!B CB!A
result = letterC() + letterB() + '!';
var resultTemp = result;

for (var i = 0; i < 2; i++) {
    if (i == 0) {
        result += letterC();
    } else if (i == 1) {
        result += letterB();
    }
    result += " ";
    result += resultTemp;
}
result += letterA();
console.log(result);
