/**
*	Scott Robot Blocks Library
*	    La Machinerie 2017
*
*          Adrien Bracq
*
*
*/

'use strict';

goog.provide('Blockly.Blocks.scotty');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.scotty.HUE = 60;

/*

Blockly.Blocks['scotty_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Avancer de ")
        .appendField(new Blockly.FieldNumber(0, 0), "distance")
        .appendField("mm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("Fait avancer le robot de x mm");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scotty_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reculer de ")
        .appendField(new Blockly.FieldNumber(0, 0), "distance")
        .appendField("mm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("Fait reculer le robot de x mm");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scotty_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tourner à droite de")
        .appendField(new Blockly.FieldAngle(90), "angle");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scotty_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tourner à gauche de")
        .appendField(new Blockly.FieldAngle(90), "angle");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

*/

Blockly.Blocks['scotty_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("S'arreter pendant ")
        .appendField(new Blockly.FieldNumber(0, 0), "time")
        .appendField("ms");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scotty_turn_go'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tourner de ")
        .appendField(new Blockly.FieldAngle(90), "angle")
        .appendField("puis avancer de ")
        .appendField(new Blockly.FieldNumber(0, 0), "distance")
        .appendField("mm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scotty_polygone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dessine un polygone régulier de")
        .appendField(new Blockly.FieldNumber(3, 0), "nbr_cote")
        .appendField("cotés de")
        .appendField(new Blockly.FieldNumber(0), "taille")
        .appendField("mm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['scotty_cercle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Trace un cercle de diamètre ")
        .appendField(new Blockly.FieldNumber(0, 0), "diametre")
        .appendField("mm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scotty_ligne'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Position de la ligne");
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("=50 : ligne au centre / >50 : ligne à gauche / <50 : ligne à droite");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scotty_contact'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Position de l'objet en contact");
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("=0 : pas de contact / 1 : contact à droite / 2 : contact à gauche / 3 : contact à gauche et à droite");
 this.setHelpUrl("");
  }
};
/*
Blockly.Blocks['scotty_lever_crayon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lever le crayon");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scotty_descendre_crayon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Descendre le crayon");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/
Blockly.Blocks['scotty_deplacement'] = {
  init: function() {
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["Avancer","Avancer"], ["Reculer","Reculer"]]), "TYPE")
        .appendField("de");
    this.appendDummyInput()
        .appendField("mm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scotty_rotation'] = {
  init: function() {
	this.appendDummyInput()
          .appendField("Tourner à");
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["gauche","gauche"], ["droite","droite"]]), "TYPE")
        .appendField("de");
    this.appendDummyInput()
        .appendField("°");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scotty_crayon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Lever","Lever"], ["Descendre","Descendre"]]), "TYPE")
        .appendField("le crayon");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
