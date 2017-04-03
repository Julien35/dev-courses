'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/

var dragon = {
    health: 100,
    weapon: 1,
    armor: 1
}

var player = {
    health: 100,
    weapon: 1,
    armor: 1
}

var game = {
    difficulty: 1,
    round: 0,
    hit: 10
}

var weaponType = {
    'wood': 1 / 2,
    'bronze': 1,
    'iron': 3 / 2
}


/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
function showGameState() {
    console.log("Dragon : ", dragon);
    console.log("Player :", player);
    console.log("Game : ", game);
    console.log("WeaponType : ", weaponType);
}

function promptUserValuesForce() {
    var weapon = 'iron';
    var armor = 'iron';
    var difficulty = 'easy';

    // console.log(weapon);
    player.weapon = weaponTypeSet(weapon);
    player.armor = weaponTypeSet(armor);
    levelSetter(difficulty.toUpperCase());

}

function promptUserValues() {
    var weapon;
    var armor;
    var difficulty;

    do {
        weapon = prompt("Choose your weapon (wood, bronze or iron) : ");
    } while (!weaponTypeCheck(weapon));

    do {
        armor = prompt("Choose your armor (wood, bronze or iron) : ");
    } while (!weaponTypeCheck(armor));

    do {
        difficulty = prompt("choose difficulty level (easy, normal, hard) : ");
    } while (!difficultyCheck(difficulty));

    // console.log(weapon);
    player.weapon = weaponTypeSet(weapon);
    player.armor = weaponTypeSet(armor);
    levelSetter(difficulty.toUpperCase());

}

function weaponTypeSet(typeWeapon) {
    if (typeWeapon.toUpperCase() == 'WOOD') {
        return weaponType.wood;
    } else if (typeWeapon.toUpperCase() == 'BRONZE') {
        return weaponType.bronze;
    } else {
        return weaponType.iron;
    }
}

function levelSetter(difficulty) {
    /*Détermination des points de vie de départ du joueur
    et du dragon selon le niveau de difficulté.*/
    switch (difficulty) {
        case "EASY":
            dragon.health = getRandomInteger(150, 200);
            player.health = getRandomInteger(200, 250);
            break;

        case "NORMAL":
            dragon.health = getRandomInteger(200, 250);
            player.health = getRandomInteger(200, 250);
            break;

        case "HARD":
            dragon.health = getRandomInteger(200, 250);
            player.health = getRandomInteger(150, 200);
            break;
    }
}


function attack(attacker, target) {

    var hitPoints = computeHitPoints(attacker);
    var defPoints = computeDefPoints(target);

    hit(target, hitPoints, defPoints);

}

function computeHitPoints(attacker) {
    var hitPoints = game.hit * attacker.weapon * (3 / 2) * getRandom(0.8, 1.2);
    return hitPoints;
}

function computeDefPoints(target) {
    var defPoints = game.hit / (target.armor * getRandom(0.8, 1.2));
    return defPoints;
}

function hit(target, hitPoints, defPoints) {
    var hitTotal = hitPoints - defPoints;

    (hitTotal < 0) ?  (hitTotal = 0) : (hitTotal = hitPoints - defPoints);
    // console.log("hitTotal = ", hitTotal, "hitPoints - ", hitPoints, "defPoints", defPoints);
    // console.log("target.health", target.health);

    target.health -= hitTotal;
    // console.log("target.health", target.health);
}

function isDragonAlive() {
    var bool = false;
    if (dragon.health > 0) {
        bool = true;
    }
    return bool;
}

function isPlayerAlive() {
    var bool = false;
    if (player.health > 0) {
        bool = true;
    }
    return bool;
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// init
// showGameState();
// prompt
// promptUserValues();
promptUserValuesForce(); // Debug
showGameState();

// Play

do {
    console.log("------ A L'ATTAQUE -------");

    attack(player, dragon);
    attack(dragon, player)

    showGameState();

    // break; //Debug

} while (isDragonAlive() && isPlayerAlive());
