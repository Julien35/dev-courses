'use strict';

/***************************************************************************************/
/***************************** DONNEES CARNET D'ADRESSES *******************************/
/***************************************************************************************/

const DOM_STORAGE_ITEM_NAME = 'Address Book';



/***************************************************************************************/
/***************************** FONCTIONS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function createContact(title, firstName, lastName, phone)
{
    var contact;

    contact           = new Object();
    contact.firstName = firstName;
    contact.lastName  = lastName.toUpperCase();
    contact.phone     = phone;

    switch(title)
    {
        case '1':
        contact.title = 'Mme.';
        break;

        case '2':
        contact.title = 'Mlle.';
        break;

        case '3':
        contact.title = 'M.';
        break;
    }

    return contact;
}

function loadAddressBook()
{
    var addressBook;

    // Chargement du carnet d'adresses depuis le DOM storage.
    addressBook = loadDataFromDomStorage(DOM_STORAGE_ITEM_NAME);

    // Est-ce qu'il n'y avait aucune donnée dans le DOM storage ?
    if(addressBook == null)
    {
        // Oui, création d'un carnet d'adresses vide.
        addressBook = new Array();
    }

    return addressBook;
}

function refreshAddressBook()
{
    var addressBook;
    var addressBookList;
    var hyperlink;
    var index;

    addressBook = loadAddressBook();

    // Suppression de l'ensemble du carnet d'adresses HTML.
    $('#address-book').empty();

    // Construction de la liste <ul> contenant le carnet d'adresses HTML.
    addressBookList = $('<ul>');


    // Affichage HTML du carnet d'adresses, un contact à la fois.
    for(index = 0; index < addressBook.length; index++)
    {
        // Construction de l'hyperlien <a> contenant le nom et prénom du contact.
        hyperlink = $('<a>').attr('href', '#').data('index', index).text
        (
            addressBook[index].firstName + ' ' + addressBook[index].lastName
        );

        /*
         * 1. Insertion de la balise <a> dans une nouvelle balise <li>
         * 2. Ajout de la balise <li> à l'intérieur de la balise <ul>
         */
        addressBookList.append($('<li>').append(hyperlink));
    }

    $('#address-book').append(addressBookList);
}

function saveAddressBook(addressBook)
{
    // Enregistrement du carnet d'adresses dans le DOM storage.
    saveDataToDomStorage(DOM_STORAGE_ITEM_NAME, addressBook);
}