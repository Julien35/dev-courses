'use strick';

function Program(data) {


    this.players;
    this.set = new Set(data.set);
    this.player;

}

Program.prototype.start = function() {
    this.set.draw();
}

Program.prototype.createPlayer = function (name, img) {

  this.addPlayer();
  console.log(this.player);

  this.createControls();
  this.movePlayer();
};

Program.prototype.addPlayer = function(options) {
    var options = options || {};
    this.player = new Player(options);

    //Mise à jour bdd
    $.post('api.php?method=addPlayer', {
        name: this.player.name,
        img: this.player.img
    }, function(data) {
        // console.log(data);
    });
    this.player.move();
}

Program.prototype.movePlayer = function(newCoord) {

    // console.log(newCoord);
    var that = this;

    if (newCoord) {
        // if (!this.isAllowed(newCoord)) return;

        $.post('api.php?method=movePlayer', {
            x: newCoord.i,
            y: newCoord.j
        }, function(acceptedCoord) {
            // console.log("data : ", data);

            console.log("that.player.coord : ", that.player.coord);
            that.player.move(acceptedCoord);

        }, "json");


    }
}

Program.prototype.isAllowed = function(wantedPosition) {
    var bool = true;

    var heightMax = this.set.height;
    var widthMax = this.set.width;

    if (wantedPosition.i < 0 ||
        wantedPosition.j < 0 ||
        wantedPosition.i >= heightMax ||
        wantedPosition.j >= widthMax) {
        bool = false;
    }

    return bool;
}


Program.prototype.createControls = function() {

    var that = this;

    $(document).keydown(function(key) {

        var i = that.player.coord.i;
        var j = that.player.coord.j;
        // console.log(i,j);

        switch (parseInt(key.which, 10)) {
            // Left arrow key pressed
            case 37:
                that.player.img = that.player.leftImg;
                --j;
                break;
                // Up Arrow Pressed
            case 38:
                that.player.img = that.player.upImg;
                --i;
                break;
                // Right Arrow Pressed
            case 39:
                that.player.img = that.player.rightImg;
                ++j;
                break;
                // Down Arrow Pressed
            case 40:
                that.player.img = that.player.downImg;
                ++i;
                break;
        }
        that.movePlayer({
            i: i,
            j: j
        });
    });
}


Program.prototype.addItem = function(img) {

    maxHeight = this.height;
    maxWidght = this.width;

    playerPosition = this.player.coord;

    var i = getRandomInteger(playerPosition.i + 1, maxHeight);
    var j = getRandomInteger(playerPosition.j + 1, maxWidght);

    var item = new Item({
        coord: {
            i: i,
            j: j
        },
        img: img
    });

    this.items.push(item);
    item.display();
}
