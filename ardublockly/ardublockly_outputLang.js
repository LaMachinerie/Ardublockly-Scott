/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview Ajax calls to the Ardublockly Server python program.
 */
'use strict';

Ardublockly.OUTPUT_LANGUAGE_NAME = {
  1: 'Arduino',
  2: 'Python',
  3: 'JavaScript',
};

Ardublockly.OUTPUT_LANGUAGE = 1;

Ardublockly.initOutputLanguage = function() {
  Ardublockly.populateOutputLangMenu(Ardublockly.OUTPUT_LANGUAGE);
};

Ardublockly.populateOutputLangMenu = function(selectedOutputLang) {
  var outputLangMenu = document.getElementById('outputLang');
  outputLangMenu.options.length = 0;

  for (var outputLang in Ardublockly.OUTPUT_LANGUAGE_NAME) {
    var option = new Option(Ardublockly.OUTPUT_LANGUAGE_NAME[outputLang], outputLang);
    if (outputLang == selectedOutputLang) {
      option.selected = true;
    }
    outputLangMenu.options.add(option);
  }
  outputLangMenu.onchange = Ardublockly.changeOutputLang;
};

/** Saves the blocks and reloads with a different language. */
Ardublockly.changeOutputLang = function() {
  var outputLangMenu = document.getElementById('outputLang');
  var newOutputLang = encodeURIComponent(
      outputLangMenu.options[outputLangMenu.selectedIndex].value);
  var outLang = outputLangMenu.options[outputLangMenu.selectedIndex].value;
  Ardublockly.OUTPUT_LANGUAGE = outLang;
  Ardublockly.renderContent();
  return;
};