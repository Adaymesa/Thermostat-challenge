function Thermostat() {
	 this.temperature = 20
};
Thermostat.prototype.upButton = function(amount) {
		this.temperature += amount
	};

Thermostat.prototype.downButton = function(amount) {
		if (this.temperature < 10){ 
			throw new Error ('It can not go below 10');
		this.temperature = 10};
		this.temperature -= amount
	};