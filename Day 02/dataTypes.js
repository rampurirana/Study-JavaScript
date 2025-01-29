// 1. Primitive data types

// A. String : Represents a sequence of number
let fullName = "Rampravesh Rana";
console.log(fullName);

// B. Number : Represents both integer and float number
let age = 10;
let price = 85.67;
console.log(age, price);

// C. Boolean : Represents either true of false
let isStudent= true;
console.log(isStudent);

// D. Undefined : A variable that has been declared but not assigned a value
let x;
console.log(x);

// E. Null : Represents the intentional absence of any object value
let y = null;
console.log(y);

// F. BigInt : Used for large integers
let bigNumber = BigInt(154695445451);
console.log(bigNumber);

// G. Symbol : Represents a unique identifier
let sym = Symbol("Rana");
console.log(sym);


// 2. Non Premitive data types

// A. Objects : Objects are collection of key pair value
let student = {
    name: "Rampravesh Rana",
    age: 20,
    cgpa: 7.5
};
console.log(student);

// Update values in objects
student.name = "Rampuri Rana";
console.log(student);

// Print a single values
// Method one
console.log(student["name"]);

// method two
console.log(student.age);

// B. Array : A special type of objects that holds an ordered list of values
let fruits = ["Apple", "Banana"];
console.log(fruits);

// C. Function : A reusable block of code
function greet() {
    return "Hello!";
}
console.log(greet);

// D. Date : Represents date and time
let today = new Date();
console.log(today);