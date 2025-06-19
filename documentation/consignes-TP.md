# TP - Full tests

## Setup

- Créer un nouveau projet vite `tp-full-tests`  
- installer vitest  
- installer playwright  

## Projet

nous allons créer un projet pour donner l'heure en Corodinsite Jupiterienne.  
Il s'agit d'une région retranchée de la planète Jupiter, qui a développé sa propre unité de temps.  
L'heure possède 4 valeurs possibles : mortin, aprenoon, soirning et nuight.  
Pour connaitre l'heure, il faut connaitre la valeur de 3 cadrans différents.  
NB : les pouvoirs sont effectués dans l'ordre suivant :
- le cadran de la lune :  
    - 1 : réduit le total de 2  
    - 2 : divise le total par 2 (en dernier et arrondi à l'entier inférieur)  
- le cadran du soleil :  
    - 1 : n'utilise pas le cadran de la terre (ni pouvoir, ni valeur)
    - 2 : double la valeur du cadran de la terre (pas le pouvoir)  
- le cadran de la terre :  
    - 1 : ajoute 2 au total  
    - 2 : le resultat total est 6 (plus fort que tout)  

Le résultat est la somme des 3 cadrans (sauf si désactivés) + l'application des 3 pouvoirs associés.  
Ainsi si le cadran de la lune vaut 1, le cadran du soleil vaut 1 et le cadran de la terre vaut 2  
alors le résultat est (1 + 1) - 2 = 0  
il s'agit de l'heure mortin.

Si le résultat est <= 2 alors l'heure est mortin  
sinon si le résultat est <= 4, alors l'heure est aprenoon  
sinon si le résultat est <= 5 alors l'heure est soirning  
sinon l'heure est nuight. 

## Consignes

- setup du projet vite et de vitest avec React / Vanilla (1pt)
- créer le squellette de la fonction de calcul de l'heure (1pt)
- créer des tests unitaires permettant de faire du TDD sur la fonction de calcul de l'heure :  (4pt)
- coder la fonction de calcul de l'heure et rapportez du fonctionnement de la fonction par rapport aux tests (saisir dans Readme.md). Pas besoin d'un fonctionnement à 100% pour avoir tous les points mais il faudra justifier et expliquer ce qu'il manque pour que ce soit le cas. (2pt)
- ajouter le lancement des tests unitaires en pre-commit (1pt)
  NB: La commande pour lancer les tests sans watch mode est `vitest run`
- créer une interface graphique permettant de saisir les valeurs des 3 cadrans et d'afficher le résultat.  (1pts)
    - Trois champs de saisie de nombre (type="number", min="1", max="2") pour les cadrans
    - Un bouton de calcul  
    - une zone de texte pour afficher le résultat quand il y en a un  
- setup de playwright (1pt)
- créer une commande npm pour lancer les tests avec `npm run e2e` (1pt)
- créer des tests e2e permettant de tester l'interface graphique (4pt)
    - le bouton de calcul doit être désactivé tant que les 3 champs de saisie ne sont pas remplis  
    - le champ de saisie ne doit jamais être inférieur à 1 ou supérieur à 2, écrire un test qui permet de le vérifier  
    - le texte de résultat doit être vide tant que le bouton de calcul est désactivé  
    - le texte de résultat apparait quand le bouton de calcul est cliqué  
- créer des screenshots et tests sur ces derniers (1pt)
- Modifier la github action pour lancer vos tests e2e sur la CI (1pt)
- Mettre à jour le README.md avec les instructions pour lancer le projet et les tests (2pt)