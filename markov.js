// Utilitaires pour manipuler des fichiers
var fs = require("fs");

var readFile = function(path) {
  return fs.readFileSync(path).toString();
};

var writeFile = function(path, texte) {
  fs.writeFileSync(path, texte);
};

// TODO : compléter cette fonction
var creerModele = function(texte) {
  //on lit le texte dans le fichier:
  var texte = readFile(texte);
  //la variable dictionnaire est un tableau contenant tous les mots du texte
  //dans leur ordre d'apparition
  var dictionnaire = decouperMot(texte);
  //la variable prochainsMots est une matrice comportant des enregistrements
  //de mots associés à leur fréquence d'apparition
  var prochainsMots = [];
  //modele est un enregistrement qui contient un tableau dictionnaire et
  //un tableau de tableau nommé prochainsMots.
  var modele = { dictionnaire, prochainsMots };

  //on appelle une fonction qui découpe les mots

  //on vérifie si le mot est déjà dans le dictionnaire, si il n'y est pas on
  //le rajoute et on modifie prochainsMots sinon on modifie seulement
  //prochainsMots
  //la probabilité dépend du mot précédent, la probabilité c'est la fréquence
  //d'appartion dans le texte ou après le mot en question ?
  return dictionnaire;
};

//decouperMot prend un texte en paramêtre et renvoie un tableau avec les mots
//du texte. Cette fonction s'inspire de la fonction decouper des diapos sur le
//traitement de texte
var decouperMot = function(texte) {
  var resultat = [];
  var debut = 0;
  var i = 0;
  while (i < texte.length) {
    if (texte.charAt(i) == "\n" ||texte.charAt(i) == " "  ) {
      resultat.push(texte.slice(debut, i));
      debut = i + 1;
    }
    i++;
  }
  resultat.push(texte.slice(debut, i));
  return resultat;
};

// TODO : compléter cette fonction
var genererProchainMot = function(modele, motActuel) {};

// TODO : compléter cette fonction
var genererPhrase = function(modele, maxNbMots) {};

// TODO : compléter cette fonction
var genererParagraphes = function(
  modele,
  nbParagraphes,
  maxNbPhrases,
  maxNbMots
) {};

//var tests = function() {
// TODO : Écrivez des tests ici

/* Les tests seront lancés automatiquement si vous appelez ce
    fichier avec :

       node markov.js

     */

// Utilisez console.assert(a == b); pour faire des tests unitaires
//console.log("TODO : exécuter des tests");
//};

//if (require.main === module) {
// Si on se trouve ici, alors le fichier est exécuté via : nodejs markov.js
//tests(); // On lance les tests
//} else {
/* Sinon, le fichier est inclus depuis index.js
       On exporte les fonctions importantes pour le serveur web */
//  exports.creerModele = creerModele;
//exports.genererParagraphes = genererParagraphes;
//}

console.log(creerModele("corpus/exemple"));
