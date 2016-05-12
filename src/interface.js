$(document).ready(function() {
  var thermostat = new Thermostat();
    updateTemperature();
  $("#powerSaving").text(thermostat.powerSavingReport());
  $("#upButton").click(function() {
    thermostat.upButton();
    updateTemperature();
  })
  $("#downButton").click(function() {
    thermostat.downButton();
    updateTemperature();
  })
  $("#resetTemp").click(function() {
    thermostat.resetTemp();
    updateTemperature();
  })
  $("#powerSavingSwitch").click(function() {
    thermostat.powerSavingSwitch();
  $("#powerSaving").text(thermostat.powerSavingReport());
  })
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.updateDisplay());
  };
 })
