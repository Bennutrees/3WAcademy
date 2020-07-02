# Le code doit être S.O.L.I.D

## Single Responsability Principle (SRP)

Le principe de _responsabilité unique_ dit qu'**une classe doit avoir une seule et unique raison de changer**.

Concrètement cela signifie que chaque classe doit se concentrer sur une seule tâche à la fois.

## Présentation

Le fichier `original.php` contient une classe représentant un document de rapport (par exemple une thèse).

_Il faut l'analyser avant de lire l'énoncé._

## Énoncé

Un problème majeur est identifié : l'inflation galopante du nombre de lignes de code nécessaires pour implémenter le
rapport, suite aux nombreuses demandes du chef de projet.

Il y a en effet besoin d'ajouter toujours plus de fonctionnalités : gestion d'une table des matières, d'un index, 
d'une bibliographie, génération d'un PDF, d'une version Office Word, d'une version HTML très riche, etc.

La classe atteint plusieurs milliers de lignes de code et plus personne n'ose y toucher !

Il paraît évident qu'actuellement la classe a deux responsabilités : 
- _Manipulation du contenu_ du rapport
- _Formatage_ du rapport

Dans une architecture MVC, cela correspondrait à avoir une classe s'occupant du Modèle et de la Vue en même temps...

L'implémentation actuelle est clairement fragile et ne résiste pas à l'ajout de nouvelles fonctionnalités...

Une séance de **refactoring** paraît indispensable !