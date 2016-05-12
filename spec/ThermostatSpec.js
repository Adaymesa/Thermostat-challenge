'user strict';

describe('Thermostat', function() {
   var thermostat;
   beforeEach(function(){
		thermostat = new Thermostat();
		});

 it('Has a temperature of 20 degrees', function() {
 		expect(thermostat.temperature).toEqual(20);
 });

 it('Can increase temperature when push up button', function() {
 		thermostat.upButton(1)
 		expect(thermostat.temperature).toEqual(21);
 });

 it('Can decrease temperature when push down button', function() {
 		thermostat.downButton(1)
 		expect(thermostat.temperature).toEqual(19);
 });

 it('Raises an error when temperature gets 10 degrees', function() {
 		expect(function(){thermostat.downButton(11)}).toThrowError('It can not go below 10');
    expect(thermostat.temperature).toEqual(10);
	});

  it('Has powersaving mode on by default', function(){
    expect(thermostat.powerSaving).toEqual(true);
  });

  it('Has powersaving mode on and raises error if temperature rises above 25', function(){
  expect(function(){thermostat.upButton(6)}).toThrowError('Power saving mode is on, it cannot go above 25');
  expect(thermostat.temperature).toEqual(25);
});
  it('Has powersaving mode off and raises error if temperature rises above 32', function(){
    thermostat.powerSavingMode();
    expect(function(){thermostat.upButton(13)}).toThrowError('Power saving mode is off, it cannot go above 32');
    expect(thermostat.temperature).toEqual(32);
  });

  it('Reset the temperature to 20 after push reset button', function() {
    thermostat.upButton(4);
    thermostat.resetButton();
    expect(thermostat.temperature).toEqual(20)
  });

  it('Change the color to green when is - < 18', function() {
    thermostat.downButton(3);
    thermostat.checkDisplay();
    expect(thermostat.colorDisplay).toBe('green')
  });

    it('Change the color to yellow when is between 18 and 25 degrees', function() {
    thermostat.checkDisplay();
    expect(thermostat.colorDisplay).toBe('yellow')
  });

    it('Change the color red when is > 25', function() {
    thermostat.powerSavingMode();
    thermostat.upButton(6);
    thermostat.checkDisplay();
    expect(thermostat.colorDisplay).toBe('red')
  });

});
