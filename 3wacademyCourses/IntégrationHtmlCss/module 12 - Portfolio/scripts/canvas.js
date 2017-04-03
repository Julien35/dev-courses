'use strict';

drawTriangle();
drawHTML();
drawCSS();
drawJS();



function drawTriangle() {

    var canvas = document.getElementById('triangle');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');



        drawHTML(ctx);

        ctx.fillStyle = "#7AA35F"; // couleur de fond
        ctx.strokeStyle = "#7AA35F"; // couleur de contour
        ctx.lineWidth = 1; // largeur de ligne

        ctx.beginPath(); // Début du chemin
        ctx.moveTo(60, 500); // Le tracé part du point 1,350
        drawJS(ctx);
        ctx.fillStyle = "#7AA35F"; // couleur de fond
        ctx.lineTo(300, 50); // Un segment est ajouté vers 175,1
        ctx.lineTo(540, 500); // Un segment est ajouté vers 350,350
        drawCSS(ctx);
        ctx.fillStyle = "#7AA35F";
        ctx.closePath(); // Fermeture du chemin
        ctx.fill(); // Remplissage du dernier chemin tracé
        ctx.stroke(); // Application du contour
    }
}

function drawHTML(ctx) {
    ctx.fillStyle = "#8A8A8A";
    ctx.font = "20px Bree Serif";
    ctx.fillText("HTML", 280, 30);
}

function drawJS(ctx) {
    ctx.fillStyle = "#8A8A8A";
    ctx.font = "20px Bree Serif";
    ctx.fillText("JS", 2, 495);
}

function drawCSS(ctx) {
    ctx.fillStyle = "#8A8A8A";
    ctx.font = "20px Bree Serif";
    ctx.fillText("CSS", 565, 495);
}
