function Player(options) {

    var options = options || {};

    this.name = options.name || "Mario";
    this.position = options.position || {
        i: 0,
        j: 0
    };
    this.img = options.img || "img/mario.png";
    this.border = options.border;

}

Player.prototype.move = function(newPosition) {

    if (newPosition) {
        if (!this.isAllowed(newPosition)) return;
    }

    $id = emptyCell(this.position);
    this.position = newPosition || this.position;
    displayImageAt(this.position, this.img);
}

Player.prototype.isAllowed = function(wantedPosition) {
    var bool = true;

    var heightMax = this.border.height;
    var widthMax = this.border.width;

    if (wantedPosition.i < 0 ||
        wantedPosition.j < 0 ||
        wantedPosition.i >= heightMax ||
        wantedPosition.j >= widthMax) {
        bool = false;
    }

    return bool;
}


Player.prototype.bindControls = function() {

    var that = this;

    $(document).keydown(function(key) {

        var i = that.position.i;
        var j = that.position.j;
        // console.log(i,j);

        switch (parseInt(key.which, 10)) {
            // Left arrow key pressed
            case 37:
                console.log("Left");
                // i, j--
                that.img = "img/mario_gauche.gif";
                that.move({
                    i: i,
                    j: --j
                });
                break;
                // Up Arrow Pressed
            case 38:
                console.log("Top");
                // i--, j
                that.img = "img/mario_haut.gif";
                that.move({
                    i: --i,
                    j: j
                });
                break;
                // Right Arrow Pressed
            case 39:
                console.log("Right");
                // i, j++
                that.img = "img/mario_droite.gif";
                that.move({
                    i: i,
                    j: ++j
                });
                break;
                // Down Arrow Pressed
            case 40:
                console.log("Down");
                // i++, j
                that.img = "img/mario_bas.gif";
                that.move({
                    i: ++i,
                    j: j
                });
                break;
        }

    });
}
