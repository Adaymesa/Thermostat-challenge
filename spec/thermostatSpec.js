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

});
