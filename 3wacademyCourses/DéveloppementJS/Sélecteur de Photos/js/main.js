/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var photoList = document.querySelectorAll('#photo-list li img');
console.log("photoList", photoList);

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function selectionImage() {

    for (index = 0; index < photoList.length; index++) {
        onClickImage(photoList[index]);
        console.log(photoList[index]);
    }

}


function onClickImage(image) {

    var selected;
    var compteur = document.querySelector('span');

    image.addEventListener("click", function(event) {
        // highlight the mouseenter target
        // this equivalent currentTarget
        this.classList.toggle("selected");

        selected = document.querySelectorAll('.selected');
        console.log("selected : ", selected);

        // compteur.firstChild.nodeValue = selected.length;
        compteur.textContent = selected.length;
        console.log(compteur);

    }, false);

}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
selectionImage();
