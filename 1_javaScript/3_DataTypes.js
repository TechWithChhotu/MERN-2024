//************Additional Data Types in JavaScript (non-primitive)**************//
//--------------------------> Date
// Represents a date and time.
let today = new Date().getFullYear();

//-------------------------->RegExp (Regular Expression)
// Represents a regular expression.
let regex = /pattern/;

//--------------------------> Map
// Represents a collection of key-value pairs with arbitrary keys.
let myMap = new Map();

//--------------------------> Set
// Represents a collection of unique values.
let mySet = new Set();

let data = {
  today: today,
  regex: regex,
  myMap: myMap,
  mySet: mySet,
};

console.table(data);
