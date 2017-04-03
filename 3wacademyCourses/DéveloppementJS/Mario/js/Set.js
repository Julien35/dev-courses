function Set(options) {

    var options = options || {};
    var that = this;
    this.height = options.height || 15;
    this.width = options.width || 15;
    this.attach = options.attach || "#canvas";
    this.grid = options.grid || false;
    this.cellSize = 30;
    // Creation du joueur
    this.mario = new Player({
        name: 'Mario',
        position: {
            i: 0,
            j: 0
        },
        img: "img/mario.png",
        border: {
            height: this.height,
            width: this.width
        }
    });
    // this.mario = new Player();


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

Set.prototype.addItem = function(img) {

    maxHeight = this.height;
    maxWidght = this.width;

    playerPosition = this.mario.position;

    var i = getRandomInteger(playerPosition.i + 1, maxHeight);
    var j = getRandomInteger(playerPosition.j + 1, maxWidght);

    this.item = new Item({
        position: {
            i: i,
            j: j
        },
        img: img
    });
    this.item.display();

};


Set.prototype.newPlayer = function(options) {
    this.mario.move();
    this.mario.bindControls();
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
