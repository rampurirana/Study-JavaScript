// This is the single line comment
console.log("Single line comment");

/* This is the
multi line comment */
console.log("Multi line comment");

// Arithmatic Operators : Used to perform mathematicla operator

let a = 15;
let b = 5;

console.log("a =",a, "& b =",b);
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation

// Unary operator

// Increment : Increase the vlaue of the operand by 1

    // Prefix : Increment first, then return the value
    let d = 10;
    console.log("d =",d);
    console.log("++d =",++d, "First increase the value by 1");
    console.log("++d =",d, "then the return the vlaue");

    // Postfix : Return the value first, then increment
    let x = 25;
    console.log("x =",x);
    console.log("x++ =",x++, "First Return the Original vlaue");
    console.log("x++ =",x++, " then Increase the value by 1");

// Decrement : Decrement the vlaue of the operand by 1

    // Prefix : Increment first, then return the value
    let y = 20;
    console.log("y =",y);
    console.log("--y =",--y, "First decrease the value by 1");
    console.log("--y =",y, "then the return the vlaue");

    // Postfix : Return the value first, then increment
    let z = 25;
    console.log("z =",z);
    console.log("z-- =",z--, "First Return the Original vlaue");
    console.log("z-- =",z--, " then decrease the value by 1");

// Assignment Operator : Used to assign values to operators

let R = 10;

console.log("R =",R);
console.log("Add and assign [R += 3 ] =", R += 3); // R = R + 3
console.log("Subtract and assign [R -= 3 ] =", R -= 3); // R = R - 3
console.log("Multiply and assign [R *= 3 ] =", R *= 3); // R = R * 3
console.log("Divide and assign [R /= 2 ] =", R /= 2); // R = R / 2
console.log("Modulus and assign [R %= 4 ] =", R %= 4); // R = R % 4
console.log("Exponentiate and assign [R **= 3 ] =", R **= 3); // R = R ** 3