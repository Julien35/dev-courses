"use strict"; // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var barToggle = document.getElementById("toolbar-toggle");
var toolbar = document.getElementsByClassName("toolbar");

var previous = document.getElementById("slider-previous");
var toggle = document.getElementById("slider-toggle");
var next = document.getElementById("slider-next");
var randomImage = document.getElementById("slider-random");
var slider = document.getElementById("slider");
// console.log(barToggle, toolbar, previous, next, random, slider);

// var previousImage;
// var nextImage;
var currentImage = 0;
var isToggleImage = false;
var isRandomImage = false;
var image = slider.childNodes[1];
var figcaption = slider.childNodes[3];
// console.log(slider.childNodes);
// console.log("image", image, "figcaption", figcaption);
var imagesList = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg"
];
var textImage = ["Gribouilli sur mur", "Virage sur l'eau", "Colorfull building",
    "gros vis à vis", "lumière dans la ville", "Paris"
];
// console.log(imagesList, textImage);
var intervalID;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onclickPrevious() {
    if (isToggleImage) {
        stopAnimation();
    }
    if (isRandomImage) {
        currentImage = RandomImageNumber();
        displayImage(currentImage);
    } else {
        decreaseCurrentImage();
    }
}

function decreaseCurrentImage() {
    if (currentImage === 0) {
        currentImage = imagesList.length - 1;
    } else {
        currentImage--;
    }
    displayImage(currentImage);
}

function onclickPlay() {
    if (isToggleImage) {
        stopAnimation();
    } else {
        startAnimation();
    }
}

function startAnimation() {
    isToggleImage = true;
    if (isRandomImage) {
        intervalID = setInterval(function(){
            currentImage = RandomImageNumber();
            displayImage(currentImage);
        }, 500);
    } else {
        intervalID = setInterval(increaseCurrentImage, 500);
    }
}

function stopAnimation() {
    isToggleImage = false;
    clearInterval(intervalID);
}

function increaseCurrentImage() {
    if (currentImage == imagesList.length - 1) {
        currentImage = 0;
    } else {
        currentImage++;
    }
    displayImage(currentImage);
}

function onclickNext() {
    if (isToggleImage) {
        stopAnimation();
    }
    if (isRandomImage) {
        currentImage = RandomImageNumber();
        displayImage(currentImage);
    } else {
        increaseCurrentImage();
    }
}

function onclickIsRandom() {
    if (!isRandomImage) {
        randomImage.classList.add('enabled');
        isRandomImage = true;
    } else {
        randomImage.classList.remove('enabled');
        isRandomImage = false;
    }
}

function RandomImageNumber() {
    var rand = 0;
    do {
        rand = getRandomInteger(0, 5);
    } while (rand == currentImage);
    return rand;
}

function getRandomInteger(min, max) {
    var rand = 0;
    rand = Math.random();
    rand = rand * (max - min + 1);
    rand = Math.floor(rand);
    rand = rand + min;
    return rand;
}

function displayImage(imageNumber) {
    image.src = imagesList[imageNumber];
    figcaption.textContent = textImage[imageNumber];
}

function onClickToolBar() {
    if (toolbar[0].style.display != 'none') {
        toolbar[0].style.display = 'none';
    } else {
        toolbar[0].style.display = 'block';
    }
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
barToggle.addEventListener('click', onClickToolBar);
previous.addEventListener('click', onclickPrevious);
toggle.addEventListener('click', onclickPlay);
next.addEventListener('click', onclickNext);
randomImage.addEventListener('click', onclickIsRandom);
