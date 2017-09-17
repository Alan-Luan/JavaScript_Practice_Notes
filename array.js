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


/* concat() method */
var colors = ["red", "green", "blue"];
// concat method creates a new array, copying items in original array, appending all new flattened(1 layer) items in the end; 
var colors2 = colors.concat("yellow", ["black", "brown"]);	// ["red", "green", "blue", "yellow", "black", "brown"]
colors.concat("yellow", ["black", ["black", "red"]]);		// ["red", "green", "blue", "yellow", "black", Array(2)]


/* slice() method */
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);		// ["green", "blue", "yellow", "purple"]
var colors3 = colors.slice(1,4);	// ["green", "blue", "yellow"]


/* splice() method, the most powerful method in array */
// splice mothod always return an array
var colors = ["red", "green", "blue"];
var removed = colors.splice(0, 2);	// remove 2 items from index 0, and return an array with removed items

var colors = ["red", "green", "blue"];
var removed = colors.splice(1, 0, "yellow", "orange");  // insert two items at position 1
// remove 0 item at index 1, and insert the following items: so just insert
// removed is an array with removed items. In this case, an empty array

var colors = ["red", "green", "blue"];
var removed = colors.splice(1, 1, "red", "purple");    // insert two values, remove one
// remove 1 item at index 1, and insert the following items: so replace


/* indexOf(), lastIndexOf() */
// return -1 if not found
// use strictly equal method, ===
var alice = { name: 'Alice' };
var personArray = [ {name: 'Alice'} ];
personArray.indexOf(person);	// -1, not found
personArray.indexOf({name: 'Alice'});		// -1, not found

var personArray = [alice];
personArray.indexOf(alice); // 0, found


/* every(), some(), filter(), map(), forEach() */
// all these 5 methods take a function as parameter, and this function takes (item, index, array) as parameters

/* every(), some(), both return true/false */
var numbers = [1,2,3,4,5,4,3,2,1];
// return false, not every item in the array meets with the condition.
var everyResult = numbers.every(function(item, index, array){
    return (item > 2);
});	
// return true, at least one item in the array meets with the condition.
var someResult = numbers.some(function(item, index, array){
    return (item > 2);
});

/* filter(), return a new array by selecting items meeting with condition */
var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function(item, index, array){
    return (item > 2);
});	// [3,4,5,4,3]

/* map(), operate on each item and return a new array */
var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function(item, index, array){
    return item * 2;
});	// [2,4,6,8,10,8,6,4,2]

/* forEach(), has no return value, similar with for loop */
var numbers = [1,2,3,4,5,4,3,2,1];
numbers.forEach(function(item, index, array){
	// do something here
});


/* reduce(), reduceRight(), iterate all items and build up a value that is ultimately returned */
// reduce() iterate from left to right
// reduceRight(), iterate from right to left
var items = [1, 2, 3, 4, 5];
var sum = items.reduce(function(prev, cur, index, array){
	return prev + cur;
});



