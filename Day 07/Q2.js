// create a game where start with random game numbers. Ask the user to keep guessint the number until the user entered the correct number

let corNum = 7;
let number = prompt("Please enter the single correct game number :");

while (number != corNum){
    number = prompt("You enter wrong number, Please guess again :");
}

console.log("Congratulation you entered correct number.")