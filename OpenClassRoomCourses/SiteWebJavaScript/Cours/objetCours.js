(function() {

    // Définition de l'objet Person via un constructeur
    function Person(nick, age, sex, parent, work, friends) {
        //Propriété
        this.nick = nick;
        this.age = age;
        this.sex = sex;
        this.parent = parent;
        this.work = work;
        this.friends = friends;

        //Methode
        this.addFriend = function(nick, age, sex, parent, work, friends) {
            this.friends.push(new Person(nick, age, sex, parent, work, friends));
        };
    }

    // On crée des variables qui vont contenir une instance de l'objet Person :
    var seb = new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []);
    var lau = new Person('Laurence', 19, 'f', 'soeur', 'Sous-officier', []);

    // alert(seb.nick); // Affiche : « Sébastien »
    // alert(lau.nick); // Affiche : « Laurence »

    //modifier une méthode
    var result = Object.prototype.toString.call(['test']);
    // alert(result);


    //////////////////////////////////////////////////////////////////////////////
    //Heritage
    function Vehicle(licensePlate, tankSize) {
        this.engineStarted = false; // Notre véhicule est-il démarré ?
        this.licensePlate = licensePlate; // La plaque d'immatriculation de notre véhicule.
        this.tankSize = tankSize; // La taille de notre réservoir en litres.
    }

    //Methodes
    //Permet de démarrer le véhicule.
    Vehicle.prototype.start = function() {
        this.engineStarted = true;
    };

    // Permet d'arrêter le véhicule
    Vehicle.prototype.stop = function() {
        this.engineStarted = false;
    };


    function Car(licensePlate, tankSize, trunkSize) {
        // On appelle le constructeur de « Vehicle » par le biais de la méthode
        // call() afin qu'il affecte de nouvelles propriétés à « Car ».
        Vehicle.call(this, licensePlate, tankSize);

        // Une fois le constructeur parent appelé, l'initialisation de notre objet peut continuer.
        this.trunkOpened = false; // Notre coffre est-il ouvert ?
        this.trunkSize = trunkSize; // La taille de notre coffre en mètres cube.
    }

    // L'objet prototype de « Vehicle » doit être copié au sein du prototype
    // de « Car » afin que ce dernier puisse bénéficier des mêmes méthodes.
    Car.prototype = Object.create(Vehicle.prototype);

    // Il est bien évidemment possible d'ajouter de nouvelles méthodes.
    Car.prototype.openTrunk = function() {
        this.trunkOpened = true;
    };

    Car.prototype.closeTrunk = function() {
        this.trunkOpened = false;
    };

    var myCar = new Car('AA-555-AA', 70, 2.5);


    function Truck(licensePlate, tankSize, trailersNumber) {
        Vehicle.call(this, licensePlate, tankSize);

        this.trailersNumber = trailersNumber; // Le nombre de remorques attachées à notre camion.
    }

    Truck.prototype = Object.create(Vehicle.prototype);

    Truck.prototype.addTrailer = function() {
        this.trailersNumber++;
    };

    Truck.prototype.removeTrailer = function() {
        this.trailersNumber--;
    };

    //Chaine de caracteres
    function isString(variable) {
        return typeof variable.valueOf() === 'string'; // Si le type de la valeur primitive est « string » alors on retourne « true »
    }

    // alert("isString('Test') : ", isString('Test')); // Affiche : « true »
    // alert("isString(new String('Test')) : ", isString(new String('Test'))); // Affiche : « true »

    //Regex
//     var email = prompt("Entrez votre adresse e-mail :", "javascript@siteduzero.com");
//
//     var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
//     if (myRegex.test(email)) {
//         alert("Adresse e-mail valide !");
//     } else {
//         alert("Adresse e-mail invalide !");
//     }
//
//
//     var birth = 'Je suis né en mars';
//
//     /^Je suis né en (\S+)$/.exec(birth);
//
//     alert(RegExp.$1); // Affiche : « mars »
//
//     //Number
//     var max = Number.MAX_VALUE, // Comme vous pouvez le constater, nous n'instancions pas d'objet, comme pour un accès au « prototype »
//     inf = Number.POSITIVE_INFINITY;
//
// if (max < inf) {
//     alert("La valeur maximum est inférieure à l'infini ! Surprenant, n'est-ce pas ?");
// }

//Date
var firstTimestamp = new Date().getTime(); // On obtient le timestamp avant l'exécution

slow(); // La fonction travaille…
// setTimeout(slow(), 2000);

var secondTimestamp = new Date().getTime(), // On récupère le timestamp après l'exécution
    result2 = secondTimestamp - firstTimestamp; // On fait la soustraction

alert("Le temps d'exécution est de : " + result2 + " millisecondes.");

function slow() {
  for (var i = 0; i < 1000; i++) {
    console.log(i);

  }
}


//Tableau
var myArray = ["C'est", "un", "test"];

myArray.forEach(function(value, index, array) {
    alert(
        'Index : ' + index + '\n' +
        'Valeur : ' + value
    );
});

})();
