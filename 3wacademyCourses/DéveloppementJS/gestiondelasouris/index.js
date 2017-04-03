'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES **************************************** */
/*************************************************************************************************/
var button = document.getElementById("toggle-rectangle");
var rectangle = document.getElementById('rectangle');

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function afficherMasquerButton(button) {

    console.log("afficherMasquerButton(button)");
    button.addEventListener('click', onClickButton);

}

function onClickButton() {

    console.log("onClickButton()");

    if (rectangle.style.display != 'none') {
        rectangle.style.display = 'none';
    } else {
        rectangle.style.display = 'block';
    }

}

function rectangleHover(rectangle) {
    console.log("rectangleHover()");

    // this handler will be executed only once when the cursor moves over the unordered list
    rectangle.addEventListener("mouseenter", function(event) {
        // highlight the mouseenter target
        event.target.classList.remove("rectangleClass");
        event.target.classList.add("important");
        console.log(event.target);
        // reset the color after a short delay
        // setTimeout(function() {
        //     event.target.style.backgroundColor = "";
        // }, 500);
    }, false);

    // this handler will be executed every time the cursor is moved over a different list item
    rectangle.addEventListener("mouseout", function(event) {
        // highlight the mouseover target
        event.target.classList.remove("important");
        event.target.classList.add("rectangleClass");
        console.log(event.target);

        // reset the color after a short delay
        // setTimeout(function() {
        //     event.target.style.backgroundColor = "";
        // }, 500);
    }, false);

}


function onDoubleClickRectangle() {

    console.log("onDoubleClickRectangle()");

    rectangle.ondblclick = function() {
      console.log("Hello");
        rectangle.classList.remove("rectangleClass");
        rectangle.classList.add("good");
    }

}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
afficherMasquerButton(button);
rectangleHover(rectangle);
onDoubleClickRectangle();
