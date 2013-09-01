var _ = require("underscore")

var myMixins = {
	moveUp: function(){
		console.log("move up!");
	},
	moveDown:function(){
		console.log("move down!");
	},
	stop: function(){
		console.log("stop!");
	}
};

function carAnimator(){
	this.moveLeft = function(){
		console.log("move left!");
	};
}

function personAnimator(){
	this.moveRandomly = function(){
		console.log("move ramdonly!");
	};
}

_.extend( carAnimator.prototype, myMixins);
_.extend( personAnimator.prototype, myMixins);

var myAnimator = new carAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();