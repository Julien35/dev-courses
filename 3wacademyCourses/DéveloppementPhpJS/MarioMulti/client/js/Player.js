function Player(options) {

    var options = options || {};

    this.name = options.name || "Mario";
    this.coord = options.coord || {
        i: 0,
        j: 0
    };
    this.img = options.img || "client/img/mario.png";
    this.leftImg = options.leftImg || "client/img/mario_gauche.gif";
    this.upImg = options.upImg || "client/img/mario_haut.gif";
    this.rightImg = options.rightImg || "client/img/mario_droite.gif";
    this.downImg = options.downImg || "client/img/mario_bas.gif";
}

Player.prototype.move = function(newCoord) {
    emptyCell(this.coord);
    this.coord = newCoord || this.coord;
    // this.isOnItemCell(this.player.coord);
    displayImageAt(this.coord, this.img);
}

// Player.prototype.isOnItemCell = function(position) {
//     var itemsLengh = this.items.length;
//     for (var i = 0; i < itemsLengh; i++) {
//         if (this.items[i].position.i == osition.i && this.items[i].position.j == osition.j) {
//             alert("Item Found");
//         }
//     }
// }
