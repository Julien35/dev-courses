$canvas = $('#canvas');
$table = $('<table>');
$tbody = $('<tbody>');



var tabLength = 15;

var td;
var tr;

// Boucle pour générer les lignes tr
for (var i = 0; i < tabLength; i++) {

    tr = $('<tr>');

    // Boucle pour générer les colonnes td
    for (var j = 0; j < tabLength; j++) {

        td = $('<td>');
        td.addClass("border");

        tr.append(td);
    }

    $tbody.append(tr);

}
$table.append($tbody);
$canvas.append($table);
