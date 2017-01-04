'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

function getRandom(min, max) {
  var rand = 0;
  rand = Math.random();
  // console.log(rand);
  rand = rand * (max - min + 1);
  // console.log(rand);
  rand = rand + min;
  // console.log(rand);
  return rand;
}

function getRandomInteger(min, max) {
  var rand = 0;
  rand = Math.random();
  // console.log(rand);
  rand = rand * (max - min + 1);
  // console.log(rand);
  rand = Math.floor(rand);
  // console.log(rand);
  rand = rand + min;
  // console.log(rand);
  return rand;
}

function weaponTypeCheck(weaponType) {
    var check = false;
    weaponType = weaponType.toUpperCase();

    if (weaponType == 'WOOD' || weaponType == 'BRONZE' || weaponType == 'IRON') {
        check = true;
    }
    return check;
}

function difficultyCheck(difficulty) {
    var check = false;
    difficulty = difficulty.toUpperCase();

    if (difficulty == 'EASY' || difficulty == 'NORMAL' || difficulty == 'HARD') {
        check = true;
    }
    return check;
}

function showWinner(winner) {
    // window.write(img/)
}


/* TEST */
// console.log(difficultyCheck("noRmal"));
// console.log(getRandomInteger(1, 10));
