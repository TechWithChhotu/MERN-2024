"use strict"; // treat all js code as newer version of js

//alert("Chhotu"); // it`s supported in browser, Not Node

//--------------------------> Undefined
// Represents an uninitialized or undefined value.
let x;

//--------------------------> Null
// Represents the intentional absence of any object value.
let y = null;

//--------------------------> Boolean
// Represents a logical entity and can have two values: true or false.
let isTrue = true;

//--------------------------> Number
// Represents numeric values.
let num = 42;

//--------------------------> String
// Represents textual data.
let str = "Hello, World!";

//--------------------------> BigInt
// Represents integers of arbitrary precision.
let bigInt = 1234567890123456789012345987984798746598765498767890n;
let unsafeBigInt = 9908746747895867788;
// const safeBigInt = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
// console.log(safeBigInt);

//---------------------------> Symbol
// Represents a unique identifier. Introduced in ECMAScript 6 (ES6).
let sym = Symbol("foo");

//--------------------------> Object
// Represents a collection of key-value pairs.
let obj = { key: "value" };

//--------------------------> Array
// Represents an ordered list of values.
let arr = [1, 2, 3, 4];

// Create an object with variable names as keys and their values as values
let data = {
  x: x,
  y: y,
  isTrue: isTrue,
  num: num,
  str: str,
  bigInt: bigInt,
  unsafeBigInt: unsafeBigInt,
  sym: sym,
};

// Use console.table() to display the data in a table format
console.table(data);

//----------------------------> Infinity
// This is not a data type
// console.log(42 / +0); // Infinity
// console.log(42 / -0); // -Infinity

/*========================NOTES========================
NaN ("Not a Number") is a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.
*/
