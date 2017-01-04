## Toujours faire un mockup
Réfléchir et faire un schéma sur papier avant de commencer à coder. Toujours faire par niveau.

## Bien formater son code
Indenter votre code correctement, n'hésitez pas à le commenter, pensez à minify votre CSS pour la mise en production.

## Utiliser un reset
reset.css ou normalize.css en fonction de vos besoin.

## Faire un code valide
Passer **toujours** votre code HTML au validateur.

## On fait le HTML puis le CSS
On commence toujours par la mise en page, on fait ensuite la mise en forme.

## A chaque cas son idéal
Il n'y a pas de règle stricte sur quand doit-on utiliser le flex, le inline-block, etc. Il faut faire en fonction de vos critères ! Ce site doit-il etre compatible avec un maximum de navigateurs ? Doit-il être responsive ? Quel public vise t-il ? C'est toutes ces questions qui vous diront quel est la propriété la plus optimisé pour vos besoins.

## Préferez le fluide au fixe
On utilisera plutot des tailles en pourcentage ou en em, on évite les valeurs fixe des pixels ! Cela vous simplifiera le travail du responsive.

## Pas de height
Il sera **très rare** que vous ayez besoin de limiter la hauteur de votre bloc. Laissez le au maximum fluide, un bloc prend la taille dont il a besoin. Jouez avec le padding, le margin, le line-height, etc.

## Pas de position absolute
Sauf si on a tester toutes les autres solutions avant ! Le position absolute peut vite vous casser votre page si vous en mettez sans réelle utilité.

## Vérifier la compatibilité
Sur les navigateurs, en fonction de vos besoin. Pensez à préfixer votre code.

## Image sémantique ou décorative ?
Faire le bon choix pour les images : balise <img> si elle a un véritable poids sémantique, sinon la propriété background si elle ne sert qu'a décorer.
