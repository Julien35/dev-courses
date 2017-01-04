// **********************************************************************************
// ********************************* Classe Slate ***********************************
// **********************************************************************************

var Slate = function(pen)
{
    this.canvas          = document.getElementById('slate');    // Récupération du <canvas>
    this.context         = this.canvas.getContext('2d');        // Récupération du contexte du canvas
    this.currentLocation = null;                                // Au début on ne sait pas où se trouve la souris
    this.isDrawing       = false;                               // Au début on ne dessine pas
    this.pen             = pen;                                 // Stockage de l'objet crayon


    // Installation des gestionnaires d'évènements de l'ardoise.
    this.canvas.addEventListener('mousedown',  this.onMouseDown.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    this.canvas.addEventListener('mousemove',  this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup',    this.onMouseUp.bind(this));
};


// Méthode de nettoyage de l'ardoise
Slate.prototype.clear = function()
{
    // Effacement de tout le contenu de l'ardoise.
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

// Méthode de récupération des coordonnées X,Y de la souris relative à l'ardoise
Slate.prototype.getMouseLocation = function(event)
{
    var location;
    var rectangle;

    // Récupération des coordonnées de l'ardoise.
    rectangle = this.canvas.getBoundingClientRect();

    // Création d'un objet contenant les coordonnées X,Y de la souris relative à l'ardoise.
    location =
    {
        x: event.clientX - rectangle.left,
        y: event.clientY - rectangle.top
    };

    return location;
};

// Gestionnaire d'évènement d'appui sur un bouton de la souris.
Slate.prototype.onMouseDown = function(event)
{
    // On peut dessiner sur l'ardoise.
    this.isDrawing = true;

    // Enregistrement de la position actuelle de la souris.
    this.currentLocation = this.getMouseLocation(event);
};

// Gestionnaire d'évènement de sortie de l'ardoise par la souris.
Slate.prototype.onMouseLeave = function()
{
    // On ne peut plus dessiner sur l'ardoise.
    this.isDrawing = false;
};

// Gestionnaire d'évènement de déplacement de la souris sur l'ardoise.
Slate.prototype.onMouseMove = function(event)
{
    var location;

    // Récupération de la position actuelle de la souris.
    location = this.getMouseLocation(event);

    // Est-ce qu'on peut dessiner sur l'adoise ?
    if(this.isDrawing == true)
    {
        // Préparation de l'ardoise à l'exécution d'un dessin.
        this.pen.configure(this.context);


        // Début du dessin.
        this.context.beginPath();

        // Dessine un trait entre les précédentes coordonnées de la souris et les nouvelles.
        this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
        this.context.lineTo(location.x, location.y);

        // Fin du dessin.
        this.context.closePath();

        // Applique les changements dans le canvas.
        this.context.stroke();


        // Enregistrement de la nouvelle position de la souris.
        this.currentLocation = location;
    }
};

// Gestionnaire d'évènement de relachement d'un bouton de la souris.
Slate.prototype.onMouseUp = function()
{
    // On ne peut plus dessiner sur l'ardoise.
    this.isDrawing = false;
};