if (typeof define !== 'function') { var define = require('amdefine')(module) }

//var object = require("../object");
//expect(object.someKey).toEqual("Hello world!");

define(["../object"], function(object) {
	describe("object", function() {
		it("values someKey", function() {
			//expect(object.key).toEqual("Hello world!");
			expect(1+2).toEqual(3);
		});
	});
});