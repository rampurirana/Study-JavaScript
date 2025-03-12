// Conditional Statement : Conditional statement allow to execute different code based on conditions

// 1. if statement : Executes a block of code if the conditions is true
let age = 18;
if (age >= 18){
    console.log("You are an adult");
}

// 2. if...else statement : Executus one block if the conditions is true, othrwise executes the else block
let votAge = 12;
if (votAge >= 18){
    console.log("You are eligible for vote");
} else {
    console.log("You are not eligible for vote");
}

// 3. if...esle if...esle statement : Checks the multiple conditions in sequence
let marks = 85;
if (marks >= 80){
    console.log("Grade : A");
} else if(marks >= 60){
    console.log("Grade : B");
} else if(marks >= 40){
    console.log("Grade : C");
} else {
    console.log("Grade : F")
}

// 4. Ternary Operator : A shorthland for if...else statement
let driveAge = 23;
let check = (age >= 18) ? "Drive" : "Not Drive";
console.log(check);