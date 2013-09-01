var Car = function(settings) {
	this.model = settings.model || "no model provided";
	this.color = settings.color || "no color provided";
};

var Mixin = function() {};

Mixin.prototype = {
	driveForward: function(){
		console.log("drive forword");
	},

	driveBackward: function(){
		console.log("drive backward");
	},

	driveSideways: function(){
		console.log("drive sideways");
	}
};

function augment(receivingClass, givingClass) {
	if (arguments[2]) {
		for (var i = 2, len = arguments.length; i < len; i++) {
			receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
		}
	} else {
		for (var methodName in givingClass.prototype) {
			if(!Object.hasOwnProperty(receivingClass.prototype, methodName) ) {
				receivingClass.prototype[methodName] = givingClass.prototype[methodName];
			}
			// Alternatively:
			//if( !receivingClass.prototype[methodName]) {
			//	receivingClass.prototype[methodName] = givingClass.prototype[methodName];
			//}
		}
	}
}

augment(Car, Mixin, "driveForward", "driveBackward");

var myCar = new Car({
	model: "Ford Escort",
	color: "blue"
});

myCar.driveForward();
myCar.driveBackward();

augment(Car, Mixin);

var mySportCar = new Car({
	model: "Prosche",
	color: "red"
});

mySportCar.driveSideways();