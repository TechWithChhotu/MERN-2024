//------------------------------> Number -> String
let num = 42;
let str = "The answer is " + num; // Implicit conversion of num(number) to string

//------------------------------> String to number
let result = "10" - 5; // Implicit conversion of "10"(string) to a number

//------------------------------> String -> Number
// Using Number() constructor or parseInt() and parseFloat() functions.
let str2 = "42";
let num2 = Number(str2);
let numNan = Number(str);

//------------------------------> Number -> String
// Using String() constructor or .toString() method.
let num3 = 42;
let str3 = String(num);

//------------------------------> String -> Boolean
// Using Boolean() constructor or the Boolean() function.
let value = "Hello";
let bool = Boolean(value);

//------------------------------> String -> Integer or/and float
// Parsing strings to integers or floats.
let strNum = "123";
let parsedInt = parseInt(strNum);
let parsedFloat = parseFloat(strNum);

//------------------------------> String to Date
// let dateString = "2023-12-08";
let dateString = "2023-12-08";
let dateObj = new Date(dateString);

const data = {
  num: num,
  str: str,
  result: result,
  num2: num2,
  str2: str2,
  numNan: numNan,
  num3: num3,
  value: value,
  bool: bool,
  strNum: strNum,
  parsedInt: parsedInt,
  parsedFloat: parsedFloat,
  dateString: dateString,
};

// console.table(data);
//console.log(dateObj); // This should log the Date object

/*============================================================*/
//------------------------------> Number to Boolean
let isLoggedIn = 0;
let boolIsLoggedIn = Boolean(isLoggedIn);

let isLoggedIn2 = 1;
let boolIsLoggedIn2 = Boolean(isLoggedIn2);

//------------------------------> String to Boolean
let valString1 = "";
let valBool1 = Boolean(valString1);

let valString2 = "Ckumar";
let valBool2 = Boolean(valString2);

const data2 = {
  isLoggedIn,
  boolIsLoggedIn,
  isLoggedIn2,
  boolIsLoggedIn2,
  valString1,
  valBool1,
  valString2,
  valBool2,
};

console.table(data2);
