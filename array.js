// Array
// Array is dynamically sized
var colors = new Array();
var colors = new Array(20);
var colors = new Array("red", "blue", true);

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

colors.toString();
colots.toLocaleString();
colors.valueOf();
colors.join(';');


/* Stack methods for Array */
var colors = new Array();
colors.push("red", "green");
colors.push("black"); // ["red". "green", "black"]
var topItem = colors.pop();	// "black"


/* Queue Methods for Array */
var colors = new Array();
colors.push("red", "green");
var firstItem = colors.shift();	// "red"
colors.length;	// 1
colors.unshift("newFirstItem");	// ["green", "newFirstItem"]


/* Reordering Methods */
var colors = [0, 1, 10, 15, 5];
colors.reverse();
colors.sort();	// default sort calls toString() of each item, and compare these strings. [0, 1, 10, 15, 5]
// I think default method is not well designed. Use toString() rather than valueOf() can avoid unmatch type comparing, 
// but it makes hard for developers being aware of the sorting result.
// It can lead to unexpected result totally.

// asending order for numeric types, and objects whose valueOf() method returns numeric types
function asendingCompare(item1, item2) {
	return item1 - item2;
}
colors.sort(asendingCompare);	// [0, 1, 5, 10, 15]


/* concat method */
var colors = ["red", "green", "blue"];
// concat method creates a new array, copying items in original array, appending all new flattened(1 layer) items in the end; 
var colors2 = colors.concat("yellow", ["black", "brown"]);	// ["red", "green", "blue", "yellow", "black", "brown"]
colors.concat("yellow", ["black", ["black", "red"]]);		// ["red", "green", "blue", "yellow", "black", Array(2)]


