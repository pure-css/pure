## Fonctionalités

Pure est un point de départ pour chaque site web ou application web. Nous nous occupons
de tout le travail CSS dont chaque site a besoin sans le rendre uniforme :

- Une grille réactive qui peut être personnalisée selon vos besoins..

- Une base solide construite sur [Normalize.css][] pour résoudre les problèmes de compatibilité entre navigateurs.

- Des boutons stylisés de manière cohérente qui fonctionnent avec les éléments `<a>` et `<button>` .

- Des styles pour les menus verticaux et horizontaux, y compris le support des menus déroulants.
- Alignements de formulaire utiles qui ont fière allure sur toutes les tailles d'écran.

- Divers styles de table courants.

- Un aspect extrêmement minimaliste qui est très facile à personnaliser.

- Réactif par défaut, avec une option non réactive.

- Taille de fichier extrêmement petite: **3.7KB minified + gzip**.

## Commencer

Consultez la page [Get Started][started] pour plus d'informations.

## Construction à partir de la Source

Optionnellement, vous pouvez construire Pure à partir de sa source sur Github. Pour faire cela, vous devrez avoir Node.js et npm installés. Nous utilisons [Grunt][] pour construire Pure.

```shell
git clone git@github.com:pure-css/pure.git
cd pure
npm install
grunt
```

### Fichier de Construction

Maintenant, tous les fichiers CSS Pure devraient être construits dans le répertoire `pure/build/`.
Tous les fichiers qui sont dans ce répertoire de construction sont également disponibles sur le CDN. Les conventions de nommage des fichiers dans le répertoire `build/` suivent ces règles :

- `[module]-core.css`: L'ensemble minimal de styles, généralement structurels, qui fournissent la base sur laquelle reposent les autres styles du module.

- `[module]-nr.css`: Un regroupement de `[module]-core.css` + `[module].css` + `[module]-[feature].css` du répertoire `src/[module]/` .
  C'est la version non réactive d'un module.

- `[module].css`: Un regroupement de `[module]-nr.css` + `[module]-r.css` du répertoire
  `build/` . C'est la version réactive d'un module.
- `*-min.css`: Une version minifiée des fichiers du même nom.

- `pure.css`: Un regroupement de tous les fichiers `[module].css` dans le répertoire `build/`. C'est
  un regroupement réactif de tout, non minifié. Remarque : ne contient pas de grilles réactives avec des requêtes @media .

- `pure-min.css`: Version minifiée de `pure.css` qui doit être utilisée en production.

- `pure-nr.css`: Un regroupement de tous les modules sans des requêtes @media.C'est un regroupement non réactif de tout, non minifié.

- `pure-nr-min.css`: Version minifiée de `pure-nr.css` qui doit être utilisée en production.

- `grids-responsive.css`: Version non minifiée de la feuille de style de grille de Pure qui inclut des requêtes @media.

- `grids-responsive-min.css`: Version minifiée de `grids-responsive.css` qui doit être utilisée en production.

## Prise en charge des navigateurs et tests:

Pure est testé et fonctionne sous :

- Dernière version stable: Firefox, Chrome, Safari

## Documentation et site web:

[Le site web de pure][pure] se trouve dans le répertoire [`site`][pure-site]. N'hésitez pas à ouvrir des problèmes ou des questions dans l'onglet des problèmes.

## Contribution

Consulter le fichier [CONTRIBUTING file][] pour obtenir des informations sur la façon de contribuer à Pure.

## Licence

Ce logiciel est libre d'utilisation sous la licence BSD-3-Clause de Yahoo! Inc
Consulter le fichier [LICENSE][] pour le texte de la licence et les informations sur les droits d'auteur.

[grunt]: http://gruntjs.com/
[contributing file]: https://github.com/pure-css/pure/blob/master/CONTRIBUTING.md
[license file]: https://github.com/pure-css/pure/blob/master/LICENSE
[normalize.css]: http://necolas.github.io/normalize.css/
[pure]: http://purecss.io/
[pure-site]: https://github.com/pure-css/pure/tree/master/site
[started]: https://purecss.io/start/
