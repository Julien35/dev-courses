function Set(options) {

    var options = options || {};
    var that = this;
    this.height = options.height || 15;
    this.width = options.width || 15;
    this.attach = options.attach || "#canvas";
    this.grid = options.grid || false;
    this.cellSize = 30;
    this.items = [];

    //joueur
    this.player;


    $('input').on('click', function() {
        if (that.grid) {
            $('td').addClass('border');
            that.grid = false;
        } else {
            $('td').removeClass('border');
            that.grid = true;
        }
    });
}

Set.prototype.newPlayer = function(options) {
    var options = options || {};
    this.player = new Player(options);
}

Set.prototype.movePlayer = function(newPosition) {
    if (newPosition) {
        if (!this.isAllowed(newPosition)) return;
    }

    emptyCell(this.player.position);
    this.player.position = newPosition || this.player.position;
    this.isOnItemCell(this.player.position)
    displayImageAt(this.player.position, this.player.img);
}

Set.prototype.isAllowed = function(wantedPosition) {
    var heightMax = this.height;
    var widthMax = this.width;

    if (wantedPosition.i < 0 ||
        wantedPosition.j < 0 ||
        wantedPosition.i >= heightMax ||
        wantedPosition.j >= widthMax) {
        return false;
    }
    return true;
}

Set.prototype.createControls = function() {

    var that = this;

    $(document).keydown(function(key) {

        var i = that.player.position.i;
        var j = that.player.position.j;
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

Set.prototype.isOnItemCell = function(playerPosition) {
    var itemsLengh = this.items.length;
    for (var i = 0; i < itemsLengh; i++) {
        if (this.items[i].position.i == playerPosition.i && this.items[i].position.j == playerPosition.j) {
            alert("Item Found");
        }
    }
}

Set.prototype.addItem = function(img) {

    maxHeight = this.height;
    maxWidght = this.width;

    playerPosition = this.player.position;

    var i = getRandomInteger(playerPosition.i + 1, maxHeight);
    var j = getRandomInteger(playerPosition.j + 1, maxWidght);

    var item = new Item({
        position: {
            i: i,
            j: j
        },
        img: img
    });

    this.items.push(item);
    item.display();


}

Set.prototype.draw = function() {

    var attach = $(this.attach);

    // crée l'élément <tbody> et <table>
    var $table = $('<table>');
    var $tablebody = $('<tbody>');

    // boucle de création de colonnes et lignes
    var $tr;
    var $td;
    var h = this.height;
    var l = this.width;
    var cellSize = this.cellSize;
    var id;


    // boucle pour créer les colonnes
    for (var i = 0; i < h; i++) {

        $tr = $('<tr>');

        // boucle pour créer les lignes
        for (var j = 0; j < l; j++) {
            // creation de la ligne j puis insertion dans la col i
            $td = $('<td>');
            $td.height(cellSize + 'px');
            $td.width(cellSize + 'px');
            $td.addClass('grass');
            id = i + "_" + j;
            $td.attr('id', id);

            $tr.append($td);
        }

        // place <tr> dans l'élement tbody
        $tablebody.append($tr);
    }

    // place <tbody> dans l'élément <table>
    $table.append($tablebody);
    // place <table> dans l'élément <attach>
    attach.append($table);

    $('input').trigger('click');

    // console.log($table);
}
