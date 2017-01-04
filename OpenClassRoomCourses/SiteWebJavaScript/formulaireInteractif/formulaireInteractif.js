/*Information à relever                         Condition à respecter
Sexe                                            Un sexe doit être sélectionné
Nom                                             Pas moins de 2 caractères
Prénom                                          Pas moins de 2 caractères
Âge                                             Un nombre compris entre 5 et 140
Pseudo                                          Pas moins de 4 caractères
Mot de passe                                    Pas moins de 6 caractères
Mot de passe (confirmation)                     Doit être identique au premier mot de passe
Pays                                            Un pays doit être sélectionné
Si l'utilisateur souhaite recevoir des mails    Pas de condition
*/

(function() {
  'use strick';

  var form = document.getElementById('form');
  // console.log(form);
  form.addEventListener('submit', function(e) {
    submit(e);
  });

  //functions
  function submit(e) {
    e.preventDefault(); //Test : evite de supprimer les données du formulaire

    var msg = "";
    var boolResult = false;

    var name = document.getElementById('nom');
    var premom = document.getElementById('premom');
    var boolName = isValueMinOk(name, 2);
    var boolPrenom = isValueMinOk(prenom, 2);

    var age = document.getElementById('age');
    var boolAge = isAgeOk(age, 5, 140);

    var pseudo = document.getElementById('pseudo');
    var boolPseudo = isValueMinOk(pseudo, 4);

    console.log(
      "boolName & boolPrenom & boolAge & isSex() & boolPseudo & isPwdOk() & isPaysOk() : ",
      boolName, boolPrenom, boolAge, isSex(), boolPseudo, isPwdOk(),
      isPaysOk());

    boolResult = boolName && boolPrenom && boolAge && isSex() && boolPseudo &&
      isPwdOk() && isPaysOk();
    msg = boolResult ? "formulaire envoyé !!!" : "champs non valide";
    alert(msg);
  }

  //fonction pour vérifier la sélection d'un pays
  function isPaysOk() {
    var bool = false;
    var list = document.getElementById('list');
    var choixPays = list.options[list.selectedIndex].value;
    console.log(choixPays);
    if (choixPays !== "vide") {
      bool = true;
      console.log("choixPays : ", choixPays);
    }
    return bool;
  }

  //fonction qui vérifie la correspondante des mots de passes
  function isPwdOk() {
    var bool = false;
    var password1 = document.getElementById('password1');
    var password2 = document.getElementById('password2');
    var boolPassword = password1.value === password2.value;
    password1.style.backgroundColor = "";
    password2.style.backgroundColor = "";

    if (isValueMinOk(password1, 6) && boolPassword) {
      bool = true;
    } else {
      password1.style.backgroundColor = "red";
      password2.style.backgroundColor = "red";
    }
    return bool;
  }

  //fonction qui vérifie si le genre est selectionné.
  function isSex() {
    var bool = false;
    var femme = document.getElementById('femme');
    var homme = document.getElementById('homme');
    if (femme.checked || homme.checked) {
      bool = true;
    }
    return bool;
  }

  //fonction pour vérifier l'age
  function isAgeOk(age, min, max) {
    var bool = false;
    age.style.backgroundColor = "";
    if (age.value >= min && age.value <= max) {
      bool = true;
    } else {
      age.style.backgroundColor = "red";
    }
    return bool;
  }

  //fonction qui verifie la valeur min d'un champ texte
  function isValueMinOk(tag, min) {
    var bool = false;
    tag.style.backgroundColor = "";
    if (tag.value.length >= min) {
      bool = true;
    } else {
      tag.style.backgroundColor = "red";
    }
    return bool;
  }



  function check() {
    var inputs = document.querySelectorAll('input[type=radio]:checked'),
      inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
      alert('La case cochée est la n°' + inputs[i].value);
    }


  }


})();
