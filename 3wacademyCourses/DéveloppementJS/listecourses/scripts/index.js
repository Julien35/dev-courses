// Enoncé
//
// Gérer une liste de courses en affichant les informations
// dans la console du navigateur web.
//
// Détails
//
//     La liste de courses est stockée dans une seule variable.
//     Le code ne doit pas se répéter, il faut donc organiser
//      le programme en fonctions.
//     Les fonctionnalités de gestion de la liste de courses sont :
//         Ajouter un produit par son nom
//         Supprimer un produit ayant un nom spécifique
//         Supprimer tous les produits
//         Afficher la taille et le contenu de la liste
//     Créer des noms de fonctions clairs, en rapport avec
//     la fonctionnalité implémentée
//     Les tableaux sont des objets de la classe Array,
//     s'appuyer sur des méthodes de cette classe pour implémenter
//      les fonctionnalités
//     Pour vérifier le bon fonctionnement du programme
//     il faut écrire du code de test, par exemple :
//         Ajouter 4 produits simples puis afficher les informations
//         Demander à l'utilisateur de saisir le nom d'un produit,
//         essayer de supprimer celui-ci puis afficher les informations
//         Supprimer tous les produits puis afficher les informations
//



(function() {
    'use strict';


    var shoppingList = [];


    // Tests
    addProduct("Chocolat");
    // console.log(shoppingList);

    // removeProduct("Chocolat");
    // console.log(shoppingList);

    addProduct("lait");
    addProduct("Chocolat");
    addProduct("céréales");
    addProduct("café");

    displayList();

    userAddProduct();
    // userRemoveProduct();

    // emptyList();



    // functions
    // <script>alert("Julien")</script>

    function userAddProduct() {
        var productToAdd = prompt("Entrez un produit à ajouter à la liste");
        addProduct(productToAdd);
        // document.write(productToAdd);
        displayList();
    }

    function userRemoveProduct() {
        displayList();

        var productToRemove = prompt("Entrez un produit à supprimer parmi la liste");
        removeProduct(productToRemove);

        displayList();
    }

    function addProduct(product) {
        shoppingList.push(product);
    }

    function removeProduct(product) {
        var elementToRemove = shoppingList.indexOf(product);
        if (elementToRemove != -1) {
            shoppingList.splice(elementToRemove, 1);
        }

    }

    function emptyList() {
        shoppingList = [];
        console.log(shoppingList);
        document.write(shoppingList);
    }

    function displayList() {
        console.log(shoppingList);

        var table = document.getElementById('coursesTable');
        console.log(table);

        // boucle de création de colonnes et lignes
        var col = [];
        var row = [];
        var n = shoppingList.length;

        var tablebody = document.createElement("tbody");

        // boucle pour créer les colonnes
        // for (var i = 0; i <= n; i++) {
        //
        //     col[i] = document.createElement("tr");
        //
        //     // boucle pour créer les lignes
        //     for (var j = 0; j <= n; j++) {
        //
        //         row[j] = document.createElement("td");
        //
        //         if (i == 0 && j == 0) {
        //             var tabText = document.createTextNode("X");
        //             // continue;
        //         } else {
        //             // creation de la ligne j puis insertion dans la col i
        //
        //
        //             var tabText = document.createTextNode(shoppingList[j]);
        //         }
        //         row[j].appendChild(tabText);
        //         col[i].appendChild(row[j]);
        //
        //     }
        //
        //     // place <tr> dans l'élement tbody
        //     tablebody.appendChild(col[i]);
        // }
        //
        // // place <tbody> dans l'élément <table>
        // table.appendChild(tablebody);

    }





}());
