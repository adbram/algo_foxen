# algo_foxen

## Énoncé

```
Transformer une chaîne de caractère, SUFIANE, en une chaîne de caractère de la même taille ayant un unique caractère, ______.
L'objectif étant de savoir comment on peut le faire le plus rapidement possible

On ne peut changer une consonne que par des voyelles et vice versa.
La modification ne peut s'opérer que toutes les secondes.

ex: BANANA -> AAAAAA :3s

FBHC -> __ :4s

FOXEN -> __ :5s

resultat attendu: la chaine en sortie + le temps
```

## Solution

Première chose à faire, on cherche la lettre que l’on retrouve le plus dans la chaîne de caractères.  
C'est en ce caractère qu'on voudra modifier les autres. On l'appellera le `max`, `maxV` si c'est une voyelle et `maxC` si c’est une consonne.  

S’il n y a pas de caractères qui se démarque, on prend le premier venu, lettre ou consonne.  
Ici on retrouve A trois fois, donc `maxV = 3`.

On compte les caractères du même type qu'on doit modifier (dans ce cas les voyelles restantes).  
Pour ça on prend le nombre total des voyelles, on l'appellera `nbV`, et on y soustrait `maxV`.

```
nbV - maxV = 3 - 3 = 0
```

Après avoir trouvé ce nombre, on le multiplie par deux car on ne peut pas modifier une voyelle en autre voyelle directement, on est obligé de la transformer en consonne en premier.

```
 0 * 2 = 0
```

Dans cet exemple, on utilise 0 coups pour unifier les voyelles.

Maintenant on va chercher à avoir le nombre de coups nécessaires pour unifier les consonnes, et c’est beaucoup plus simple que pour les voyelles puisque on peut changer une consonne directement en voyelle.

On a qu’à compter le nombre de consonnes.

```
nbC = 3
```

Et on l’ajoute à la somme des coups pour unifier les voyelles.

```
0 + 3 = 3
```

Et voilà, pour unifier cette chaîne de caractères ça nous prend 3 coups.

On appellera cette somme `timeV`.

On peut écrire cette formule => `timeV = (nbV - maxV) * 2 + nbC`.

Encore une fois, si le max était une consonne on aurait écrit => `timeC = (nbC - maxC) * 2 + nbV`, ou plus simplement =>

```
timeX = (nbX - maxX) * 2 + nbY
```

Petit problème…  
Le caractère qui se répète le plus n’est pas la seule variable à prendre en compte.

Il y a des chaînes de caractères avec un `maxX` voyelle par exemple, mais qui prendraient moins de coups à unifier si on le faisait avec une consonne.

Ajoutons par exemple 3 autres voyelles à `BANANA` et appliquons la formule avec un le `maxV` et le `maxC`

```
BANANAEIO
timeV = (nbV - maxV) * 2 + nbC = (6 - 3) * 2 + 3 = 9
timeC = (nbC - maxC) * 2 + nbV = (3 - 2) * 2 + 6 = 8
```

Il faut donc toujours calculer et comparer `timeV` et `timeC`.
