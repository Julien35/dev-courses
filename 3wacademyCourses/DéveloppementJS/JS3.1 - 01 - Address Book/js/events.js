'use strict';

/***************************************************************************************/
/**************************** EVENEMENTS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function onClickAddContact() {
    // Affiche le formulaire de contact

    // Réinitialisation du formulaire (efface les champs texte, etc.).
    $('#contact-form').trigger('reset');

    // Basculement du formulaire en mode ajout puis affichage.
    $('#contact-form').data('mode', 'add').fadeIn('fast');
}

function onClickClearAddressBook() {
    // window.localStorage.removeItem('addressBook');
    saveAddressBook([]);
    refreshAddressBook();
}

function onClickEditContact() {
    var addressBook;
    var contact;
    var index;

    /*
     * this = objet DOM qui a déclenché l'évènement,
     *        il s'agit donc de l'hyperlien généré dans onClickShowContactDetails()
     *
     * On initialise jQuery avec la variable this pour obtenir un objet jQuery
     * représentant l'hyperlien qui a donc déclenché l'évènement.
     *
     * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx
     */

    addressBook = loadAddressBook();

    index = $(this).data('index');
    // console.log("index : ", index);

    // console.log(addressBook[index]);

    var gender = addressBook[index].title;
    // console.log(gender);

    var lastName = addressBook[index].lastName;
    var firstName = addressBook[index].firstName;
    var phone = addressBook[index].phone;

    $('#title').val(gender);
    $('#lastName').val(lastName);
    $('#firstName').val(firstName);
    $('#phone').val(phone);

    $('#contact-form').data('mode', 'update').data('index', index).fadeIn('fast');
}

function onClickSaveContact() {
    var index;

    // chargement du carnet d'adresse en local
    var addressBook = loadAddressBook();

    var title = $('#title').val();
    var lastName = $('#lastName').val();
    var firstName = $('#firstName').val();
    var phone = $('#phone').val();

    if ($('#contact-form').data('mode') == 'add') {
        // Add
        // creation d'un nouveau contact
        var contact = createContact(title, firstName, lastName, phone);
        // sauvegarde de l'addressBook
        addressBook.push(contact);

        $('#contact-form').trigger('reset');
    } else {
        // Update
        index = $('#contact-form').data('index');

        addressBook[index].title = title;
        addressBook[index].firstName = firstName;
        addressBook[index].lastName = lastName;
        addressBook[index].phone = phone;
    }
    saveAddressBook(addressBook);
    refreshAddressBook();
}

function onClickShowContactDetails() {

}
