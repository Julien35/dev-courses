'use strict';

/***************************************************************************************/
/***************************** DONNEES CARNET D'ADRESSES *******************************/
/***************************************************************************************/

const DOM_STORAGE_ITEM_NAME = 'Address Book';




/***************************************************************************************/
/***************************** FONCTIONS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function createContact(title, firstName, lastName, phone) {
    var contact;

    contact = {};
    contact.firstName = firstName;
    contact.lastName = lastName.toUpperCase();
    contact.phone = phone;
    contact.title = title;


    return contact;
}

function loadAddressBook() {
    var addressBook = loadDataFromDomStorage(DOM_STORAGE_ITEM_NAME);
    if (addressBook == null) {
        return [];
    }
    return addressBook;
}

function refreshAddressBook() {
    var addressBook = loadAddressBook();
    console.log(addressBook);

    if (addressBook != null) {

        var section = $('#address-book');
        section.html("");
        var ul = $('<ul>');

        length = addressBook.length;
        var link;
        var contact;

        for (var i = 0; i < length; i++) {
            link = $('<a>').attr('href', '#').data('index', i);
            link.text(addressBook[i].firstName + " " + addressBook[i].lastName);

            contact = $('<li>').append(link);
            ul.append(contact);
        }
        section.append(ul);
    }

}

function saveAddressBook(addressBook) {
    // Enregistrement du carnet d'adresses dans le DOM storage.
    saveDataToDomStorage(DOM_STORAGE_ITEM_NAME, addressBook);
}
