function Thermostat() {
	 this.temperature = 20
	 this.powerSaving = true
	 this.colorDisplay = 'yellow'
};


Thermostat.prototype.powerSavingMode = function() {
	this.powerSaving = !this.powerSaving
};

Thermostat.prototype.upButton = function(amount) {
		this.temperature += amount
		if (this.powerSaving === true){
			if(this.temperature > 25){
				this.temperature = 25
				throw new Error ('Power saving mode is on, it cannot go above 25');
			};
		};
		if (this.powerSaving === false){
			if(this.temperature > 32){
				this.temperature = 32
				throw new Error ('Power saving mode is off, it cannot go above 32');
			};
		};

	};

Thermostat.prototype.downButton = function(amount) {
		this.temperature -= amount
		if (this.temperature < 10){
			this.temperature = 10
			throw new Error ('It can not go below 10');
		};
	};

Thermostat.prototype.resetButton = function() {
		this.temperature = 20
};

Thermostat.prototype.checkDisplay = function() {
		if (this.temperature < 18){
			this.colorDisplay = "green"
		};
		if (this.temperature > 25){
			this.colorDisplay = "red"
		};
};






