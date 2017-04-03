// # Refaire l'exercice en utilisant non plus
// un 'form' mais un 'div' pour la saisie utilisateur
// # inclure un script en bas du body (index.js)
// # ne rien toucher au code d'index.php
// # apporter des modifications au fichier index.phtml
// # créer la fonction de filtrage des films et
// l'appliquer on 'click' sur le bouton

'use strict';

// DATA ///
var lists = document.querySelectorAll("li");
var listLength = lists.length;

// functions
function filtreMoviesDeuxLeRetour(durationChoice, choiceSelect) {
    durationChoice = parseInt(durationChoice.value);
    choiceSelect = parseInt(choiceSelect.value);
    var durationMovie;

    for (var i = 0; i < listLength; i++) {
        lists[i].className = "";
        durationMovie = parseInt(lists[i].getAttribute("duration"));

        if (durationChoice != 0) {
            if ((choiceSelect == -1 && durationMovie > durationChoice) ||
                (choiceSelect == 0 && durationMovie != durationChoice) ||
                (choiceSelect == 1 && durationMovie < durationChoice)) {
                lists[i].className = "hide";
            }
        }
    }
}
