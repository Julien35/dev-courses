(function() {

  var links = document.getElementsByTagName('a'),
    linksLen = links.length;

  for (var i = 0; i < linksLen; i++) {

    links[i].addEventListener('click', function(e) {
      clickImage(e);
    });

  }

  document.getElementById('overlay').addEventListener('click', function(e) {
    // currentTarget est utilisé pour cibler l'overlay et non l'image
    e.currentTarget.style.display = 'none';
  });


  //function
  function clickImage(e) {
    e.preventDefault(); // On bloque la redirection

    // On appelle notre fonction pour afficher les images
    // currentTarget est utilisé pour cibler le lien et non l'image
    displayImg(e.currentTarget);
  }


  function displayImg(link) {

    var img = new Image(),
      overlay = document.getElementById('overlay');

    img.addEventListener('load', function() {
      overlay.innerHTML = '';
      overlay.appendChild(img);
    });

    img.src = link.href;
    overlay.style.display = 'block';
    overlay.innerHTML = '<span>Chargement en cours...</span>';

  }

})();
