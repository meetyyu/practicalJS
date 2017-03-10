function Bear(type){
	this.type = type;
};

Bear.prototype.growl = function(){
	console.log('the ' + this.type + ' bear says grrrr');
};


function Grizzly(){
	Bear.call(this,'grizzly');
};

Grizzly.prototype = Object.create(Bear.prototype);

// Grizzly.prototype.growl = function(){
// 	console.log('on the Grizzly protytype');




var polar = new Bear('polar');
var grizzly = new Grizzly();

// grizzly.growl = function(){
// 	console.log("overwrites");
// }

// console.log(polar.growl);
console.log(grizzly.growl());
