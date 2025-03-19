// Loop : Loops are used to execute a block of code multiple times

// 1. for loop : Used when the number of iteration is known
for(let i=0; i<6; i++){
    console.log(i);
}

// 2. while loop : Executes as long as a condition is true
let x = 11;
while (x < 16){
    console.log(x);
    x++;
}

// 3. do while loop : Executes at least once time before checking the conditions
let a = 100;
do {
    console.log(a);
    a++;
} while(a < 106);

// 4. for in loop : Used to iterate over object properties
let name = {fullName : "Rampravesh Rana", age : 20, rollNO : 1323161};
for(let key in name){
    // console.log(key); Print only key
    console.log(name[key]); // Print the value of key
}