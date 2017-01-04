## Enoncé

Construire un programme affichant un rectangle de couleur qui réagit à différentes interactions avec la souris de l'utilisateur.

## Consignes

### HTML

Dans l'en-tête de la page :

* Ajouter un titre au programme : "Gestion de la Souris".
* Créer un bouton (*id : toggle-rectangle*) ayant pour intitulé "Cacher / Afficher le rectangle".

Dans la partie principale de la page :

* Ajouter des paragraphes de texte expliquant ce que le programme peut faire (lire ci-dessous les interactions).
* Créer une balise **div** vide (*class : rectangle*) pour le rectangle.

### CSS

* Le rectangle est bleu (*royalblue*), de taille 400x300 pixels et possède des coins arrondis.
* Lorsqu'on applique la classe *good* en plus au rectangle, il devient vert (*limegreen*).
* Lorsqu'on applique la classe *important* en plus au rectangle, il devient rouge (*firebrick*).
* Le changement de couleur du rectangle doit s'animer.
* Ajouter le CSS nécessaire restant pour que le programme fonctionne.

### Interactions

* Quand on clique sur le bouton *toggle-rectangle*, cela cache ou affiche le rectangle.
* Quand la souris se déplace à l'intérieur du rectangle il devient rouge; il reprend sa couleur originale quand la souris n'est plus dedans.
* Quand on double-clique sur le rectangle il devient vert.

## Détails

* Comme pour l'exercice Dragon Slayer, organiser le code en trois parties : les variables, les fonctions et enfin le code principal.
* Nommer correctement les gestionnaires d'évènements pour qu'ils aient un sens.