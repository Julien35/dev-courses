(function() {
  'use strict';

  // L'utilisateur est invité à entrer un nombre entre 0 et 999.
  // Ce nombre doit être envoyé à une fonction qui se charge de le convertir en toutes lettres.
  // Cette même fonction doit contenir un système permettant de séparer les centaines,
  // les dizaines et les unités.
  // Ainsi, la fonction doit être capable de voir que dans le nombre 365 il y a trois centaines,
  // six dizaines et cinq unités.
  //  Pour obtenir ce résultat, pensez bien à utiliser le modulo. Exemple : 365 % 10 = 5.
  // Une fois le nombre découpé en trois chiffres, il ne reste plus qu'à convertir ces derniers en toutes lettres.
  // Lorsque la fonction a fini de s'exécuter, elle renvoie le nombre en toutes lettres.
  // Une fois le résultat de la fonction obtenu, il est affiché à l'utilisateur.
  // Lorsque l'affichage du nombre en toutes lettres est terminé,
  // on redemande un nouveau nombre à l'utilisateur.

  console.log("Debut programme");
  //Lancement programme
  conversion();


  //Déroulement du programme
  function conversion() {
    var myNumber = userChoice();
    var unite, dizaines, centaines;
    var tab = numberToString(myNumber);
    unite = tab[0];
    dizaines = tab[1];
    centaines = tab[2];
    console.log("unite, dizaines, centaines : ", unite, dizaines, centaines);

    displayNumber(tab);
  }


  function displayNumber(tabString) {
    var stringNumber = "";

    for (var i = tabString.length - 1; i > 0; i--) {
      stringNumber += tabString[i] + "-";
      console.log(stringNumber);
    }
    stringNumber += tabString[0];

    alert(stringNumber);
  }


  //myNumber is a number > String conversion
  function numberToString(numberToConvert) {
    //decomposition
    var unite, dizaines, centaines;
    //unité
    unite = numberToUnite(numberToConvert);
    unite = unitNumberConversion(unite);
    //dizaines
    dizaines = numberToDizaines(numberToConvert);
    dizaines = dizainesConversion(dizaines);
    //centaines
    centaines = numberToCentaines(numberToConvert);
    centaines = centainesConversion(centaines);

    return [unite, dizaines, centaines];
  }


  //Number conversion
  function unitNumberConversion(unit) {
    var unitString;

    switch (unit) {
      case 1:
        unitString = "un";
        break;
      case 5:
        unitString = "cinq";
        break;

      default:
        break;

    }
    return unitString;
  }

  function dizainesConversion(dizaines) {
    var dizainesString;

    switch (dizaines) {
      case 1:
        dizainesString = "dix";
        break;
      case 6:
        dizainesString = "soixante";
        break;

      default:
        break;
    }
    return dizainesString;
  }

  function centainesConversion(centaines) {
    var centainesString;

    switch (centaines) {
      case 1:
        centainesString = "cent";
        break;

      case 3:
        centainesString = "trois-cent";
        break;
      default:

    }

    return centainesString;
  }



  //fonctions pour récupérer les différentes valeurs
  function numberToUnite(numberToConvert) {
    var unite;
    //unité
    unite = numberToConvert % 10;
    // console.log("unite = ", unite);
    return unite;
  }

  function numberToDizaines(numberToConvert) {
    var unite = numberToUnite(numberToConvert);
    var dizaines;
    //dizaines
    dizaines = (numberToConvert - unite) % 100;
    dizaines /= 10;
    // console.log("dizaines = ", dizaines);
    return dizaines;
  }

  function numberToCentaines(numberToConvert) {
    var unite = numberToUnite(numberToConvert);
    var dizaines = numberToDizaines(numberToConvert);
    var centaines;
    //centaines
    centaines = (numberToConvert - dizaines * 10 - unite) % 1000;
    centaines /= 100;
    // console.log("centaines = ", centaines);
    return centaines;
  }


  //User number choice
  function userChoice() {
    var myNumber = NaN;

    while (Number.isNaN(myNumber)) { //true if number is not a number
      myNumber = prompt("entrer un nombre entre 0 et 999");

      if (0 <= myNumber && 1000 > myNumber) {
        myNumber = parseInt(myNumber, 10);
        // console.log("parseInt");
      } else {
        myNumber = NaN;
        // console.log("number dans else : ", myNumber);
      }

      // console.log("number n'est pas un nombre ? ", Number.isNaN(myNumber));
      // console.log("number = ", myNumber);
    }

    return myNumber;
  }

  console.log("Fin programme");
})();
