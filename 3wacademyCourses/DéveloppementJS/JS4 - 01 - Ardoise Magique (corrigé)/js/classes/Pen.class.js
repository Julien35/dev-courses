// **********************************************************************************
// ********************************* Classe Pen *************************************
// **********************************************************************************

var Pen = function()
{
    this.color = 'black';
    this.size  = 1;
};


// Méthode de préparation de l'ardoise à l'exécution d'un dessin avec le crayon
Pen.prototype.configure = function(slateCanvasContext)
{
    // Mise à jour des propriétés de dessin de l'ardoise.
    slateCanvasContext.strokeStyle = this.color;
    slateCanvasContext.lineWidth   = this.size;
};

// Méthode de configuration de la couleur du crayon (valeur HTML hexadécimale ou nom de couleur CSS prédéfini)
Pen.prototype.setColor = function(color)
{
    this.color = color;
};

// Méthode de configuration de la couleur du crayon avec les trois composantes RGB
Pen.prototype.setColorAsRgb = function(red, green, blue)
{
    // Stockage de la couleur au format RGB (comme la fonction CSS)
    this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
};

// Méthode de configuration de l'épaisseur du crayon.
Pen.prototype.setSize = function(size)
{
    this.size = size;
};