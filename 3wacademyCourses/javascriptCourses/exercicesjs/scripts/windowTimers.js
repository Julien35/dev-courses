// Afficher "1" toutes les 500ms 10X
const S = 1000;

var intervalID = window.setInterval(myCallback, S / 5);
var cpt = 0;

function myCallback() {
    console.log("myCallback()");
    window.document.write(cpt + " <br>");

    cpt++;
    if (cpt == 30) {
        window.clearInterval(intervalID);
    }
}

// Afficher "Banco!" ou bout de 6s
var timeoutBanco = window.setTimeout(banco, 6 * S);

function banco() {
    console.log("banco()");
    window.document.write("Banco ! <br>");
}
