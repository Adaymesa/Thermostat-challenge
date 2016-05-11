describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a start temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

});
