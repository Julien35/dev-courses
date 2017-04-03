(function() {


  // Test Iframe 
  var frame = document.getElementById('myFrame').contentDocument;
  var frame_links = frame.getElementsByTagName('a').length;


  function loadFile(file) {

    var xhr = new XMLHttpRequest();

    // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
    xhr.open('GET', file);

    xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone

      console.log(
        "xhr.readyState === XMLHttpRequest.DONE && xhr.status =",
        xhr.readyState, xhr.status);
      //en local xhr.status === 0 sinon 200
      if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 ||
          xhr.status === 0)) { // Si le fichier est chargé sans erreur

        document.getElementById('fileContent').innerHTML = '<span>' +
          xhr
          .responseText + '</span>'; // Et on affiche !

      } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !=
        200) { // En cas d'erreur !

        alert('Une erreur est survenue !\n\nCode :' + xhr.status +
          '\nTexte : ' + xhr.statusText);

      }

    });

    xhr.send(null); // La requête est prête, on envoie tout !

  }

  // événements qui déclencheront tout le processus
  (function() { // Comme d'habitude, une IIFE pour éviter les variables globales

    var inputs = document.getElementsByTagName('input'),
      inputsLen = inputs.length;

    for (var i = 0; i < inputsLen; i++) {

      inputs[i].addEventListener('click', function() {
        loadFile(this.value); // À chaque clique, un fichier sera chargé dans la page
      });

    }

  })();



})();
