/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview Ajax calls to the Ardublockly Server python program.
 */
'use strict';
/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

/**********************************
	Permet de réduire la quantité 
	de bloc en fonction du besoin
	1- Débutant (Bloc basique)
	2- Intermédiaire
	3- Comfirmé
	4- Expert (Tous les blocs)
***********************************/
Ardublockly.DIFFICULTY_NAME = {
  1: 'Novice',
  2: 'Debutant',
  3: 'Moyen',
  4: 'Expert'
};

/**********************************
	Permet de réduire la quantité 
	de bloc en fonction du besoin
	1- Débutant (Bloc basique)
	2- Intermédiaire
	3- Comfirmé
	4- Expert (Tous les blocs)
***********************************/
Ardublockly.DIFFICULTY = 1;

Ardublockly.initDifficulty = function() {
  Ardublockly.populateDifficultyMenu(Ardublockly.DIFFICULTY);
};

Ardublockly.populateDifficultyMenu = function(selectedDifficulty) {
  var difficultyMenu = document.getElementById('difficulty');
  difficultyMenu.options.length = 0;

  for (var difficulty in Ardublockly.DIFFICULTY_NAME) {
    var option = new Option(Ardublockly.DIFFICULTY_NAME[difficulty], difficulty);
    if (difficulty == selectedDifficulty) {
      option.selected = true;
    }
    difficultyMenu.options.add(option);
  }
  difficultyMenu.onchange = Ardublockly.changeDifficulty;
};

/** Saves the blocks and reloads with a different language. */
Ardublockly.changeDifficulty = function() {
  var difficultyMenu = document.getElementById('difficulty');
  var newDifficulty = encodeURIComponent(
      difficultyMenu.options[difficultyMenu.selectedIndex].value);
  var diff = difficultyMenu.options[difficultyMenu.selectedIndex].value;
  Ardublockly.DIFFICULTY = diff;
  Ardublockly.changeToolbox();
  Ardublockly.xmlTree = Blockly.Xml.textToDom(Ardublockly.TOOLBOX_XML);
  Ardublockly.updateToolboxLanguage();
  Ardublockly.workspace.updateToolbox(Ardublockly.xmlTree);
  return;
};