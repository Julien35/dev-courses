function getRandomInteger(min, max) {
    var rand = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    rand = Math.floor(Math.random() * (max - min)) + min;
    return rand;
}


function getCell(position) {
    return $("#" + position.i + "_" + position.j);
}

function emptyCell(position) {
    $cell = getCell(position);
    $cell.empty();
    return $cell;
}

function displayImageAt(position, img) {
    $cell = emptyCell(position);
    $cell.append("<img src=" + img +">");
    // console.log("<img src=" + img +">");

}
