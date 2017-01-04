function findInTab() {

    // Définir un tableau. Dans une boucle de 50 itérations,
    //l'initialiser avec des valeurs entières aléatoires comprises entre 0 et 100. (edited)
    // 3:06 1: Afficher le tableau
    // 3:07 2: Augmenter les valeurs strictement inférieur à 50 de 10
    // 3:07 3: Réduire les valeurs supérieur ou égale à 50 de 15
    // 3:08 4: Afficher le nouveau tableau
    // 3:09 5: Afficher pour chaque élément du tableau s'il est pair ou impair
    //(indice : opérateur % )
    // 3:09 6: Compter le nombre d'éléments Pairs et d'éléments Impairs
    // 3:10 7: Quel est l'index et la valeur du plus grand élément ? (edited)
    // 3:11 8: Quel est l'index et la valeur du plus petit élément ?

    var tabRand = [];
    for (var i = 0; i < 50; i++) {
        tabRand[i] = Math.trunc(Math.random() * 100);
    }
    console.log(tabRand);

    window.document.write(tabRand + "<br>");

    for (var i = 0; i < 50; i++) {
        if (tabRand[i] < 50) {
            tabRand[i] = increase(tabRand[i], 10);
        } else {
            tabRand[i] = decrease(tabRand[i], 15);
        }
    }
    window.document.write(tabRand + "<br>");


    var pair = 0;
    var impair = 0;
    for (var i = 0; i < 50; i++) {

        window.document.write(tabRand[i]);

        if (tabRand[i] % 2 == 0) { // pair
            window.document.write(" est pair <br>");
            pair++;
        } else {
            window.document.write(" est impair <br>");
            impair++;
        }
    }
    window.document.write("Il y a " + pair + " numéros pairs et " + impair  + " numéros impair <br>");

}


function increase(value, step) {
    newValue = 0;
    newValue = value + step;
    return newValue;
}

function decrease(value, step) {
    newValue = 0;
    newValue = value - step;
    return newValue;
}
