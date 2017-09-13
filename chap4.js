var person = new Object();
person.name = 'Alan';
alert(person.name);

typeof obj;
person instanceof Object;
colors instanceof Array;
pattern instanceof RegExp;


// JavaScript is lack of block-level scopes
if (true) {
	var color = "blue";
}
alert(color); // "blue"

// JavaScript Garbage Collection
// Mark and Sweep
// Reference Counting: circular reference problem

// global variable dereferencing