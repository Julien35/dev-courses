$(document).ready(function() {

    var optionsSet = {
        height: 15,
        width: 15,
        attach: "#canvas",
        grid: false
    };

    var set = new Set(optionsSet);
    set.draw();
    set.newPlayer();
    set.movePlayer();
    set.createControls();

    set.addItem("img/mushroom.png");
    set.addItem("img/mushroom.png");
    set.addItem("img/dragon.png");
    set.addItem("img/dragon.png");
    set.addItem("img/coffre.png");
    set.addItem("img/coffre.png");
    set.addItem("img/coffre.png");
    set.addItem("img/coffre.png");
    set.addItem("img/coffre.png");
    set.addItem("img/coffre.png");

});
