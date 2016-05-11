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

});
