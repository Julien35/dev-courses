// **********************************************************************************
// ********************************* Classe Program *********************************
// **********************************************************************************

var Program = function()
{
    this.colorPalette = new ColorPalette();
    this.pen          = new Pen();
    this.canvas       = new Slate(this.pen);
};


// Gestionnaire d'évènement de clic sur l'outil de pipette.
Program.prototype.onClickColorPicker = function()
{
    $('#color-palette').fadeIn('slow');
};

// Gestionnaire d'évènement de clic pour sélectionner une couleur de crayon prédéfinie.
Program.prototype.onClickPenColor = function(event)
{
    var div;
    var penColor;

    // Récupération de la <div> qui a déclenché l'évènement.
    div = event.currentTarget;

    // Récupération de l'attribut HTML5 data-color.
    penColor = div.dataset.color;   // Avec jQuery cela donnerait $(div).data('color')

    // Modification de la couleur du crayon.
    this.pen.setColor(penColor);
};

// Gestionnaire d'évènement de clic pour changer la taille du crayon.
Program.prototype.onClickPenSize = function(event)
{
    var button;
    var penSize;

    // Récupération du <button> qui a déclenché l'évènement.
    button = event.currentTarget;

    // Récupération de l'attribut HTML5 data-size.
    penSize = button.dataset.size;   // Avec jQuery cela donnerait $(button).data('size')

    // Modification de l'épaisseur du crayon.
    this.pen.setSize(penSize);
};

// Gestionnaire d'évènement de changement de la couleur du crayon.
Program.prototype.onPickColor = function()
{
    var color;

    // Récupération de la couleur sur laquelle l'utilisateur a cliqué.
    color = this.colorPalette.getPickedColor();

    // Changement de la couleur du crayon.
    this.pen.setColorAsRgb(color.red, color.green, color.blue);

    $('#color-palette').fadeOut('slow');
};


// Méthode appelée au démarrage de l'application.
Program.prototype.start = function()
{
    // Installation des gestionnaires d'évènements des outils.
    $('#tool-clear-canvas').on('click', this.canvas.clear.bind(this.canvas));
    $('#tool-color-picker').on('click', this.onClickColorPicker.bind(this));

    // Installation des gestionnaires d'évènements de configuration du crayon.
    $('.pen-color').on('click', this.onClickPenColor.bind(this));
    $('.pen-size').on('click',  this.onClickPenSize.bind(this));


    // Création d'un évènement spécifique à l'application.
    $(document).on('magical-slate:pick-color', this.onPickColor.bind(this));
};