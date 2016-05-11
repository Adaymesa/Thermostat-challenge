describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a start temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase temperature with up button", function(){
    thermostat.up_button();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should decrease temperature with down button", function(){
    thermostat.down_button();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should have a temperature of 20 degrees after reset", function() {
    thermostat.up_button();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    for (var i = 1; i <= 10; i++) {
      thermostat.down_button();
    }
    expect(function() {
      thermostat.down_button();
    }).toThrowError("at minimum temperature of 10 degrees");
  });

  it("should have power saving switched on by default", function() {
    expect(thermostat.powerSaving).toEqual(true);
  });

  it("max temp is 25 when power saving is on", function(){
    for (var i = 1; i<=5; i++) {
      thermostat.up_button();
    }
    expect(function(){
      thermostat.up_button();
    }).toThrowError("Power saving mode on: max temp 25 degrees");
  });

  it("max temp is 32 when power saving is off", function(){
    thermostat.powerSavingSwitch();
    for (var i = 1; i<=12; i++){
      thermostat.up_button();
    }
    expect(function(){
      thermostat.up_button();
    }).toThrowError("Power saving mode off: max temp 32 degrees");
  });

  it("allows user to change Power Saving mode off", function(){
    thermostat.powerSavingSwitch();
    expect(thermostat.powerSaving).toEqual(false);
  });

});
