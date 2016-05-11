describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should increase temperature with up button", function(){
    thermostat.upButton();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should decrease temperature with down button", function(){
    thermostat.downButton();
    expect(thermostat.temperature).toEqual(19);
  });


  describe("when power saving mode is off", function() {
    it("max temp is 32 when power saving is off", function(){
      thermostat.powerSavingSwitch();
      for (var i = 1; i<=12; i++){
        thermostat.upButton();
      }
      expect(function(){
        thermostat.upButton();
      }).toThrowError("Power saving mode off: max temp 32 degrees");
    });

    it("allows user to change Power Saving mode off", function(){
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toEqual(false);
    });
  });

  describe("limits and default values", function(){
    it("should have a temperature of 20 degrees after reset", function() {
      thermostat.upButton();
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });

    it("should have a start temperature of 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it("should have a minimum temperature of 10 degrees", function() {
      for (var i = 1; i <= 10; i++) {
        thermostat.downButton();
      }
      expect(function() {
        thermostat.downButton();
      }).toThrowError("at minimum temperature of 10 degrees");
    });

    it("should have power saving switched on by default", function() {
      expect(thermostat.powerSaving).toEqual(true);
    });

    it("max temp is 25 when power saving is on", function(){
      for (var i = 1; i<=5; i++) {
        thermostat.upButton();
      }
      expect(function(){
        thermostat.upButton();
      }).toThrowError("Power saving mode on: max temp 25 degrees");
    });
  });

  describe("display", function(){
    it("display color defaults to yellow", function(){
      expect(thermostat.displayColor).toEqual('yellow');
    });

    it("display color is green if temp < 18", function(){
      thermostat.temperature = 16;
      thermostat.updateDisplay();
      expect(thermostat.displayColor).toEqual('green');
    });

    it("display color is red if temp > 25", function(){
      thermostat.temperature = 26;
      thermostat.updateDisplay();
      expect(thermostat.displayColor).toEqual('red');
    });
  });
});
