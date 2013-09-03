//types.js
//var types = require('./types'), Car = types.Car, Truck = types.Truck;

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

// factory.js

function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function(options) {
	if(options.vehicleType === "car") {
		this.vehicleClass = Car;
	} else {
		this.vehicleClass = Truck;
	}
	return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
	vehicleType: "car",
	color: "yellow",
	doors: 6
});

console.log(car instanceof Car);

console.log(car);

// Approach #1: Modify a VehicleFactory instance to use the Truck class
var movingTruck = carFactory.createVehicle({
	vehicleType: "truck",
	state: "like new",
	color: "red",
	wheelSize: "small"
});

console.log(movingTruck instanceof Truck);

console.log(movingTruck);

// Approach #2: Subclass VehicleFactory to create a factory class that builds Trucks
function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.class = Truck;

var truckFactory = new TruckFactory();
var myTruck = truckFactory.createVehicle({
	state: "omg.. so bad.",
	color: "pink",
	wheelSize: "so big"
});

console.log(myTruck instanceof Truck);
console.log(myTruck);