//abstractfactory.js

//types.js

function Car(options) {
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
}

function Truck(options) {
	this.state = options.state || "used";
	this.wheelSize = options.wheelSize || "large";
	this.color = options.color || "blue";
}

var AbstractVehicleFactory = (function(){
	var types = {};

	return {
		getVehicle: function (type, customizations) {
			var Vehicle = types[type];
			return (Vehicle ? new Vehicle(customizations): null);
		},
		registerVehicle: function(type, Vehicle) {
			var proto = Vehicle.prototype;

			//only register classes that fulfill the vehicle contract
			//if (proto.drive && proto.breakDown) {
				types[type] = Vehicle;
			//}

			return AbstractVehicleFactory;
		}
	};
})();

// Usage:
AbstractVehicleFactory.registerVehicle( "car", Car);
AbstractVehicleFactory.registerVehicle( "truck", Truck);

var car = AbstractVehicleFactory.getVehicle( "car", {
	color: "lime green",
	state: "like new"
});

var truck = AbstractVehicleFactory.getVehicle( "truck", {
	wheelSize: "medium",
	color: "neon yellow"
});

console.log(car instanceof Car);

console.log(car);

console.log(truck instanceof Truck);

console.log(truck);