'use strict';

function Thermostat() {
  this.temperature = 20;
  this.tempMin = 10;
  this.powerSaving = true;
  this.displayColor = 'yellow';
}

Thermostat.prototype.up_button = function() {
  if (this.powerSaving) {
    if (this.temperature === this.maxTemp()) { throw new Error("Power saving mode on: max temp 25 degrees") };
  } else if(!this.powerSaving) {
    if (this.temperature === this.maxTemp()) { throw new Error("Power saving mode off: max temp 32 degrees") };
  };
  this.temperature += 1;
  this.updateDisplay
};

Thermostat.prototype.down_button = function() {
  if (this.temperature === this.tempMin) {
    throw new Error("at minimum temperature of 10 degrees");
  }
  this.temperature -= 1;
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.maxTemp = function() {
  if (this.powerSaving){
    return 25;
  } else {
    return 32;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.updateDisplay = function() {
  if (this.temperature < 18) {
    this.displayColor = 'green';
  }
  else if (this.temperature < 25) {
    this.displayColor = 'yellow';
  }
  else {
    this.displayColor = 'red'
  };
};
