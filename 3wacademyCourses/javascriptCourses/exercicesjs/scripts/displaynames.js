function displayNames() {
    // Définir un tableau JavaScript
    // contenant un prénom dans chaque case.
    // Afficher son contenu sous forme d'une liste HTML.
    // Proposer un code qui cette fois affiche
    // le contenu du tableau en le parcourant
    // de la dernière à la première case.

    var namesTab = ['Nathalie', 'Julien', 'Benoit'];
    // récupère une référence dom de la balise body
    var body = document.getElementsByTagName("body")[0];

    var ul = document.createElement("ul");

    var li = [];
    for (var i = namesTab.length - 1; i >= 0; i--) {

        li[i] = document.createElement("li");
        var name = document.createTextNode(namesTab[i]);
        li[i].appendChild(name);
        ul.appendChild(li[i]);
    }
    body.appendChild(ul);
}
