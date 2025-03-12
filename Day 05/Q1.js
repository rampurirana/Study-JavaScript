// Get user to input a number using prompt. Check if the number is multiple of 5 or not

let num = prompt("Please enter the numeric number :");

if(num % 5 === 0){
    console.log(num,"is a multiple of 5");
} else {
    console.log(num,"is NOT a multiple of 5");
}