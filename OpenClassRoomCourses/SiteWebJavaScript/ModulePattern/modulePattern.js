(function() {

  //PREMIER MODULE

  // Gestionnaire de logs
  var Logger = (function() {
    var self = {};
    var logger = new Array(); // attribut privé

    //méthode privée
    function displayLog(log) {
      console.log(log.module + " : " + log.message);
    }

    //methodes publiques

    self.log = function(moduleName, msg) {
      var log = {
        module: moduleName,
        message: msg
      };
      displayLog(log);
      logger.push(log);
    };

    self.showAll = function() {
      for (var i = 0; i < logger.length; i++)
        displayLog(logger[i]);
    };

    return self;
  })();


  // DEUXIEME MODULE et SOUS-MODULE

  // Gestionnaire d'un div particulier (inscription, connexion,...)
  //variable self sert pour l'encapsulation. Elle est vide à la déclaration,
  // à la création du module, on y met plusieurs choses :
  //attributPublic et methodePublique.
  //Ces deux éléments appartiennent à l'objet self.

  //Module parent
  var DivManager = (function() {
    var self = {};
    self.div = undefined; //div appartient à self.

    self.init = function() {
      self.div = document.getElementById('monDiv');
      DivManager.Events.init(); //Découpage en sous-module
    };

    return self;
  })();

  //Module enfant
  DivManager.Events = (function() {
    var self = {};

    self.init = function() {
      // on récupère div qui est public et on lui affecte un écouteur (click)
      DivManager.div.onclick = onClick;

      //ici je peux ajouter d'autres écouteurs
    };

    function onClick() {
      console.log("J'ai été cliqué !");
    }

    // je peux ajouter ici les fonctions spécifiques à de nouveaux écouteurs

    return self;
  })();

  DivManager.init(); //on appelle la fonction du module pour initialiser l'ensemble

})();
