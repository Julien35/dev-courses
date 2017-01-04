/*
étapes de fonctionnement d'un système de drag & drop :
L'utilisateur enfonce (et ne relâche pas) le bouton gauche de sa souris sur un élément.
Le drag & drop s'initialise alors en sachant qu'il va devoir gérer le déplacement de cet élément.
 Pour information,l'événement à utiliser ici est mousedown.

L'utilisateur, tout en laissant le bouton de sa souris enfoncé,commence à déplacer son curseur,
l'élément ciblé suit alors ses mouvements à la trace.
L'événement à utiliser est mousemove et nous vous conseillons de l'appliquer à l'élément document.

L'utilisateur relâche le bouton de sa souris.
Le drag & drop prend alors fin et l'élément ne suit plus le curseur de la souris.
L'événement utilisé est mouseup.
*/

(function() {
  "use strick";
  //contient l'objet de la div en déplacement
  var storage = {};

  init();

  // functions
  function init() { //la fonction d'initialisation
    var elements = document.querySelectorAll('.draggableBox');
    elementsLength = elements.length;
    // console.log(elements);

    for (var i = 0; i < elementsLength; i++) {
      //initialise le drag and drop
      elements[i].addEventListener('mousedown', function(e) {
        mouseDown(e);
      });

      //Termine le drag & drop
      elements[i].addEventListener('mouseup', mouseUp);
    }

    // Permet le suivi du drag & drop
    document.addEventListener('mousemove', function(e) {
      mouseMove(e);
    });

  } //fin init

  function mouseDown(e) {
    // console.log("Hello mouseDown");
    var s = storage;
    s.target = e.target;
    s.offsetX = e.clientX - s.target.offsetLeft;
    s.offsetY = e.clientY - s.target.offsetTop;
    // console.log("s : ", s);
  }

  function mouseUp() {
    // console.log("Hello mouseUP");
    // console.log("storage avant", storage);
    storage = {};
    // console.log("storage après", storage);
  }

  function mouseMove(e) {
    // console.log("Hello mouseMove");
    var target = storage.target;

    if (target) {
      target.style.top = e.clientY - storage.offsetY + 'px';
      target.style.left = e.clientX - storage.offsetX + 'px';
      // console.log("target.style :", target.style);
    }
  }

})();
