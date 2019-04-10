// IIFE

(function() {
	initVars();
	setText('greeting', welcome);
	setText('userSign', sign);
	setText('tiles', tiles);
	setMoney('subTotal', subTotal);
	setMoney('shipping', shipping);
	setMoney('grandTotal', grandTotal);
})();

// Global var define

var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
var welcome;

var sign = '[not initialized]';
var tiles;
var subTotal;
var shipping;
var grandTotal;

// Init variables

function initVars() {
	
	// Greeting vars
	greeting = 'Aye yo, '
	name = 'Will'
	message = ', let\'s roll.'
	welcome = greeting + name + message;
	
	// Other vars
	sign = 'Montague House';
	tiles = sign.length;
	subTotal = tiles * 5;
	shipping = 7;
	grandTotal = subTotal + shipping;
	
}

// Update the greeting

function setText(getId, setMsg) {
	
	var temp = document.getElementById(getId);
	temp.textContent = setMsg;
	
}

// Used to update text if it requires a money sign

function setMoney(getId, setMsg) {
	
	var temp = document.getElementById(getId);
	temp.textContent = '$' + setMsg;
	
}
