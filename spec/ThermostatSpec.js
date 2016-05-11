'user strict';

describe('Thermostat', function() {
   var thermostat;
   beforeEach(function(){
		thermostat = new Thermostat();
		});

 it('has a temperature of 20 degrees', function() {
 		expect(thermostat.temperature).toEqual(20);
 });

 it('can increase temperature when push up button', function() {
 		thermostat.upButton(1)
 		expect(thermostat.temperature).toEqual(21);
 });

 it('can decrease temperature when push down button', function() {
 		thermostat.downButton(1)
 		expect(thermostat.temperature).toEqual(19);
 });

 it('raises an error when temperature gets 10 degrees', function() {
 		expect(function(){thermostat.downButton(11)}).toThrowError('It can not go below 10');
	});


});


