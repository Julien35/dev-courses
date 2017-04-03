function imgTab() {
    // Définir un tableau JavaScript avec dans chaque case
    // un chemin menant à une image.  Afficher les images
    // dans un tableau HTML
    var imgTab = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];

    // récupère une référence dom de la balise body
    var body = document.getElementsByTagName("body")[0];
    var table = document.createElement("table");

    var td = [];
    var imgLink = [];
    for (var i = 0; i < imgTab.length; i++) {
        td[i] = document.createElement("td");
        imgLink[i] = document.createElement("img");
        imgLink[i].setAttribute('src', imgTab[i]);
        imgLink[i].setAttribute('width', '100px');
        imgLink[i].setAttribute('height', '100px');
        table.appendChild(imgLink[i]);
    }

    body.appendChild(table);
}
