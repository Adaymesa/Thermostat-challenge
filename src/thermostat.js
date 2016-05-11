'use strict';

function Thermostat() {
  this.temperature = 20;
  this.tempMin = 10;
  this.powerSaving = true;
}

Thermostat.prototype.up_button = function() {
  if (this.powerSaving) {
    if (this.temperature === this.maxTemp()) { throw new Error("Power saving mode on: max temp 25 degrees") };
  } else if(!this.powerSaving) {
    if (this.temperature === this.maxTemp()) { throw new Error("Power saving mode off: max temp 32 degrees") };
  };
  this.temperature += 1;
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


//
// Airport.prototype.dock = function(plane) {
//   this.isFull();
//   this._hangar.push(plane);
// };
//
// Airport.prototype.isFull = function() {
//   if (this._hangar.length === this.MAX_CAPACITY) {
//     throw new Error("nope, full!");
//   }
//   return false;
// };
//
// Airport.prototype.landedPlanes = function() {
//   return this._hangar;
// };
