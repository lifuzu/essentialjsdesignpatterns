//object.js

var assert = require('assert');

// Define object: 3 kinds
var newObject = {};

// or
var newObject2 = Object.create(null);

// or
var newObject3 = new Object();

// Assign keys and values to an object
// 1. Dot syntax
newObject.someKey = "Hello world!";
var key = newObject.someKey;

assert.equal(key, "Hello world!");

// 2. Square bracket syntax
newObject["someKey"] = "Hello world!";
var key = newObject["someKey"];

// 3. Object.defineProperty
Object.defineProperty( newObject, "someKey", {
	value: "for more control of the property's behavior",
	writable: true,
	enumerable: true,
	configurable: true
});

var defineProp = function (obj, key, value) {
	var config = {};
	config.value = value;
	Object.defineProperty(obj, key, config);
};

var person = Object.create(null);

defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

// 4. Object.defineProperties
Object.defineProperties( newObject, {
	"someKey": {
		value: "Hello world!",
		writable: true
	},
	"anotherKey": {
		value: "Foo bar",
		writable: false
	}
});