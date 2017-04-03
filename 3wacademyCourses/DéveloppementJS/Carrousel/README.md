## Enoncé

Afficher un diaporama de photos avec un titre sous la forme d'un carrousel (quand on est à la fin, on revient au début et inversement).

Une barre d'outils permet à l'utilisateur d'avancer ou de reculer manuellement dans le diaporama, de démarrer ou arrêter le carrousel, etc. Le diaporama réagit également au clavier.

## Consignes

### HTML

Dans l'en-tête de  la page :

* Ajouter un titre au programme : "Sliders".
* Créer une interface de navigation (*class : toolbar*) pour la barre d'outils, avec un hyperlien (*id : toolbar-toggle*) permettant d'afficher ou de cacher la barre d'outils.

La barre d'outils est une liste de boutons, par défaut cachée :

* Un bouton (*id : slider-previous*) pour reculer dans le diaporama.
* Un bouton (*id : slider-toggle*) pour démarrer ou arrêter le carrousel.
* Un bouton (*id : slider-next*) pour avancer dans le diaporama.
* Un bouton (*id : slider-random*) pour se déplacer aléatoirement dans le diaporama.

Dans la partie principale de la page :

* Créer une figure (*id* et *class : slider*) représentant le diaporama, avec une seule image et un seul titre pour les balises. Ne pas oublier de mettre un texte alternatif pour l'image pour le référencement.

### CSS

* Les boutons de la barre d'outil sont disposés les uns à côté des autres, utiliser Font Awesome pour les icônes des boutons.
* Utiliser la font web *Open Sans* de chez Google pour l'ensemble de l'exercice.

### Interactions

* Quand on clique sur l'hyperlien de l'interface de navigation *toolbar-toggle* les boutons de la barre d'outils s'affichent ou se cachent, comme un bouton on/off.
* Quand on clique sur les boutons de la barre d'outils l'une des actions spécifiées précédemment s'exécute.
* Quand on clique sur le bouton *slider-toggle* le carrousel démarre ou s'arrête alternativement, comme un bouton on/off.
* Quand on appuie sur les touches fléchées gauche et droite du clavier on peut respectivement reculer et avancer dans le diaporama.

## Détails

* Comme pour l'exercice Dragon Slayer, il faut séparer le code réutilisable dans d'autres projets du code spécifique au projet.
* Comme pour l'exercice Dragon Slayer, organiser le code en trois parties : les variables, les fonctions et enfin le code principal.
* Nommer correctement les gestionnaires d'évènements pour qu'ils aient un sens.
* Pour le bouton *slider-random*, faire en sorte que le choix aléatoire soit différent de l'endroit où se trouve actuellement.