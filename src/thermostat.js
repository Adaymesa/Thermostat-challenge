'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MIN_TEMP = 10;
  this.powerSaving = true;
  this.displayColor = 'yellow';
  this.LOW_USAGE_LIMIT = 18;
}

Thermostat.prototype.upButton = function() {
  if (this.powerSaving) {
    if (this.temperature === this.maxTemp()) { throw new Error("Power saving mode on: max temp 25 degrees") };
  } else if(!this.powerSaving) {
    if (this.temperature === this.maxTemp()) { throw new Error("Power saving mode off: max temp 32 degrees") };
  };
  this.temperature += 1;
  this.updateDisplay;
};

Thermostat.prototype.downButton = function() {
  if (this.temperature === this.MIN_TEMP) {
    throw new Error("at minimum temperature of 10 degrees");
  }
  this.temperature -= 1;
  this.updateDisplay;
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.maxTemp = function() {
  if (this.powerSaving){
    return this.MAX_LIMIT_PSM_ON;
  } else {
    return this.MAX_LIMIT_PSM_OFF;
  }
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.updateDisplay = function() {
  if (this.temperature < this.LOW_USAGE_LIMIT) {
    this.displayColor = 'green';
  }
  else if (this.temperature < this.MAX_LIMIT_PSM_ON) {
    this.displayColor = 'yellow';
  }
  else {
    this.displayColor = 'red'
  };
};
