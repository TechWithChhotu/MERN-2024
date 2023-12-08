/*===========Variables===========*/
const name = "Chhotu Kumar";
let rollNumber = 6;
var city = "Sheikhpura";
state = "Bihar";

// console.log(name);
// console.log(rollNumber);
// console.log(city);
// console.log(state);

// ------------->Alternative<---------------
console.table([name, rollNumber, city, state]);

// name = "Divya Raj"; //Not allowed
rollNumber = 8;
city = "Gurugram";
state = "Hariyana";

console.log(`===========After Modification==============`);
console.table([name, rollNumber, city, state]);

/*
* Prefer not to use var
    - Becouse of issue in block scope and functional scope

* Prefer not use without let & const to declare variable

=================== NOTES ==================
const name = "Chhotu Kumar";: This line declares a constant variable named name and assigns the string value "Chhotu Kumar" to it. The const keyword indicates that the variable is constant and cannot be reassigned.

let rollNumber = 6;: This line declares a variable named rollNumber using the let keyword and assigns the numerical value 6 to it. The let keyword allows the variable to be reassigned later.

var city = "Sheikhpura";: This line declares a variable named city using the var keyword and assigns the string value "Sheikhpura" to it. The var keyword used to be the primary way to declare variables in JavaScript but is now often replaced by let and const.Becouse the issue of in block scope and functional scope

state = "Bihar";: This line assigns the string value "Bihar" to a variable named state. Notice that there is no let, const, or var keyword before state, which means it implicitly becomes a global variable. It is generally recommended to use let or const to declare variables explicitly.
*/
