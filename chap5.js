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
