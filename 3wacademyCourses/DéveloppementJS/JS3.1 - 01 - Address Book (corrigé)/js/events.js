'use strict';

/***************************************************************************************/
/**************************** EVENEMENTS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function onClickAddContact()
{
    // Réinitialisation du formulaire (efface les champs texte, etc.).
    $('#contact-form').trigger('reset');

    // Basculement du formulaire en mode ajout puis affichage.
    $('#contact-form').data('mode', 'add').fadeIn('fast');
}

function onClickClearAddressBook()
{
    // Sauvegarde d'un carnet d'adresse vide, écrasant le carnet d'adresse existant.
    saveAddressBook(new Array());

    // Mise à jour de l'affichage.
    $('#contact-details').hide();
    refreshAddressBook();
}

function onClickEditContact()
{
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
    index = $(this).data('index');

    addressBook = loadAddressBook();
    contact     = addressBook[index];

    $('#firstName').val(contact.firstName);
    $('#lastName').val(contact.lastName);
    $('#phone').val(contact.phone);

    // Sélection de la bonne <option> HTML de la liste déroulante.
    switch(contact.title)
    {
        case 'Mme.':
        $('#title').val(1);
        break;

        case 'Mlle.':
        $('#title').val(2);
        break;

        case 'M.':
        $('#title').val(3);
        break;
    }

    // Basculement du formulaire en mode édition puis affichage.
    $('#contact-form').data('mode', 'edit').fadeIn('slow');
}

function onClickSaveContact()
{
    var addressBook;
    var contact;
    var index;

    // Création d'un objet contact avec les données du formulaire.
    contact = createContact
    (
        $('select[name=title]').val(),
        $('input[name=firstName]').val(),
        $('input[name=lastName]').val(),
        $('input[name=phone]').val()
    );

    addressBook = loadAddressBook();

    if($('#contact-form').data('mode') == 'add')
    {
        // Mode "ajout", il faut ajouter le contact au carnet d'adresses.

        addressBook.push(contact);
    }
    else
    {
        // Mode "édition", il faut modifier un contact existant.

        index = $('#contact-details a').data('index');

        addressBook[index] = contact;
    }

    saveAddressBook(addressBook);

    // Mise à jour de l'affichage.
    $('#contact-form').fadeOut('slow');
    $('#contact-details').hide();
    refreshAddressBook();
}

function onClickShowContactDetails()
{
    var addressBook;
    var contact;
    var index;

    /*
     * this = objet DOM qui a déclenché l'évènement,
     *        il s'agit donc de l'un des hyperliens généré dans refreshAddressBook()
     *
     * On initialise jQuery avec la variable this pour obtenir un objet jQuery
     * représentant l'hyperlien qui a donc déclenché l'évènement.
     *
     * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx
     */
    index = $(this).data('index');

    // Chargement du carnet d'adresses puis récupération du contact sur lequel on a cliqué.
    addressBook = loadAddressBook();
    contact     = addressBook[index];

    /*
     * Affichage des données du contact, enregistrement du numéro (index) du contact dans
     * l'attribut HTML data-index de l'hyperlien "Editer ce contact"
     */
    $('#contact-details h3').text(contact.title + ' ' + contact.firstName + ' ' + contact.lastName);
    $('#contact-details p').text(contact.phone);
    $('#contact-details a').data('index', index);

    // Mise à jour de l'affichage.
    $('#contact-details').show();
}