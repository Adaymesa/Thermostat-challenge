$(document).ready(function() {
  var thermostat = new Thermostat();
  
  function getSettings() {
    $.getJSON('http://localhost:4567/settings', function(data){
    var response = data
    thermostat.temperature = response.temperature
    thermostat.powerSaving = response.powerSaving
    updateTemperature();
    $("#powerSaving").text(thermostat.powerSavingReport());
    })
  }
    getSettings()
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
    postSettings(thermostat.temperature, thermostat.powerSaving)

  })
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.updateDisplay());
      postSettings(thermostat.temperature, thermostat.powerSaving)
  };
  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#currentTemp').text(data.main.temperature);
    })
  }

  function postSettings(temperature, powerSaving){
    $.ajax ({
      type: "POST",
      url: "http://localhost:4567/settings",
      dataType: "json",
      data: JSON.stringify({"temperature":temperature,"powerSaving":powerSaving}),
      // contentType: "application/json; charset=utf-8",
      failure: function(errMsg) {
        alert(errMsg)
      }
    })
  }
})
