function Player(options) {

    var options = options || {};

    this.name = options.name || "Mario";
    this.position = options.position || {
        i: 0,
        j: 0
    };
    this.img = options.img || "img/mario.png";
    this.leftImg = options.leftImg || "img/mario_gauche.gif";
    this.upImg = options.upImg || "img/mario_haut.gif";
    this.rightImg = options.rightImg || "img/mario_droite.gif";
    this.downImg = options.downImg || "img/mario_bas.gif";
}
