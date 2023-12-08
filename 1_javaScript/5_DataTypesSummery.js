/*======================DataTypes======================*/
// There are two types of dataTypes depends on How to store & access data

// #1 Primitive type
//-----------------> Number,String,null,undefined,Symbol,BigInt,Boolean

// #2 Reference(Non-Primitive) type
//--------------------------------> Array,Objects,Functions(Methods)

/*======================TypeOf Keyword======================*/
// The typeof is a operator in JavaScript is used to determine the data type of a given operand. It returns a string indicating the type of the operand. eg:-> typeof operand

let num = 42;
//console.log(typeof num); // Output: "number"

let bigInt = 7812356564675445546n;
//console.log(typeof bigInt); // Output: "bigint"

let str = "Hello, World!";
// console.log(typeof str); // Output: "string"

let bool = true;
// console.log(typeof bool); // Output: "boolean"

let undefinedVar;
// console.log(typeof undefinedVar); // Output: "undefined"

let nullVar = null;
// console.log(typeof nullVar); // Output: "object" (Note: typeof null returns "object," which is a historical quirk)

let obj = { key: "value" };
// console.log(typeof obj); // Output: "object"

let arr = [1, 2, 3];
// console.log(typeof arr); // Output: "object"

function myFunction() {
  // code
}
// console.log(typeof myFunction); // Output: "function"

let sym = Symbol("foo");
// console.log(typeof sym); // Output: "symbol"

const data = {
  num: typeof num,
  bigInt: typeof bigInt,
  str: typeof str,
  bool: typeof bool,
  undefinedVar: typeof undefinedVar,
  nullVar: typeof nullVar,
  sym: typeof sym,
  obj: typeof obj,
  arr: typeof arr,
  myFunction: typeof myFunction,
};
console.table(data);
