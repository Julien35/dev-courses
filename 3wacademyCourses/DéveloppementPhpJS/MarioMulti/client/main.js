'use strick'

$(document).ready(function() {

    console.log("main.js");

    $.get('api.php', {
        method: "getGame"
    }, function(data) {

        console.log(data);

        var program = new Program(data);
        console.log(program);
        program.start();

    }, "json");


    // set.addItem("img/mushroom.png");
    // set.addItem("img/mushroom.png");
    // set.addItem("img/dragon.png");
    // set.addItem("img/dragon.png");
    // set.addItem("img/coffre.png");
    // set.addItem("img/coffre.png");
    // set.addItem("img/coffre.png");
    // set.addItem("img/coffre.png");
    // set.addItem("img/coffre.png");
    // set.addItem("img/coffre.png");

});
