class Diaporama {

    constructor(cible, tableau, duree) {

        this.Imag = '';
        this.Tableau = tableau;
        this.temp = duree;
        this.tbmage = -1;
        this.conteneur = document.getElementById(cible);

        this.creation();
    }

    diap() {

        this.tbmage++;
        this.Image.src = this.Tableau[this.tbmage];

        if (this.tbmage == this.Tableau.length - 1) {
            this.tbmage = -1
        }

        setTimeout(this.diap.bind(this), this.temp);
    }

    creation() {

        this.Image = document.createElement('img');
        this.Image.src = this.repertoir_image + this.Tableau[0] + '.jpg';
        this.conteneur.appendChild(this.Image);

        var lui = this;
        this.Image.onmouseout = function() {
            lui.diap()
        };
        this.Image.onmouseover = function() {
            clearTimeout(lui.timer)
        };

        this.diap();
    }

}


function inimage() {

    var tbdiapo_1 = new Array('d1.jpg', 'd2.jpg', 'd3.jpg', 'd10.jpg', 'd11.jpg', 'd12.jpg')
    var tbdiapo_2 = new Array('d4.jpg', 'd5.jpg')
    var tbdiapo_3 = new Array('d6.jpg', 'd7.jpg', 'd8.jpg', 'd9.jpg')

    new Diaporama('conteneur', tbdiapo_1, 500, 'ff')
    new Diaporama('conteneur', tbdiapo_2, 1000, 'gg')
    new Diaporama('conteneur', tbdiapo_3, 1500, 'hh')

}
