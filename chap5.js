// use new operator with the Object constructor
var person = new Object();
person.name = "Alan";
person.age = 10;

// use object literal notation
var person = {
	name: "Alan",
	age: 10
};


var person = {};	// same as: var person = new Object();

// use object literal notation to pass optional arguments to a function
function displayPerson(person) {
	if person.name != undefined {;}
	if person.age > 5 {;}
}



// use dot notation to access object properties, dot notation is more suggested
person.name;

// use bracket notation to access object properties
person["name"];
// useful to use vairables for property access
var propertyName = "name";
person[propertyName];



// Array
// Array is dynamically sized
var colors = new Array();
var colors = new Array(20);
var colors = new Array("red", "blue", 0xff);

// omitting new operator
var colors = Array(3);
var colors = Array("red");

// use array literal notation to create an array
var colors = [];
var colors = [1, 2, 3];

// append / insert new element
var colors = [0, 1, 2, 3];
colors[colors.length] = 4;	// [0, 1, 2, 3, 4]
colors[7] = 7;			// [0, 1, 2, 3, 4, undefinded, undefined, 7]

// length property of array can be written
var colors = [0, 1, 2];
colors.length = 10;		// [0, 1, 2, undefined, ..., undefined]
colors.length = 1;		// [0], colors[1] undefined

// detecting an array
var myArray = [];
if (Array.isArray(myArray)) {
	// any statement here
}
if (myArray instanceof Array) {
	// not recommended, because instanceof assumes a single global execution context
	// if using multiple frames in a web page, there could be different version of Array constructor
}


