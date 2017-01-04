function Set(options) {

    var options = options || {};
    var that = this;

    this.height = options.height || 15;
    this.width = options.width || 15;
    this.cell = options.cell;

    this.attach = options.attach || "#canvas";
    this.grid = options.grid || false;


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
    var cellSize = this.cell.size;
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
