// Calculate the grade of marks

let marks = prompt("Please enter the obtain marks (0-100) :");
let grade;

if(marks <= 100 && marks >= 80){
    grade = "A";
} else if(marks < 80 && marks >= 70){
    grade = "B";
} else if(marks < 70 && marks >= 60){
    grade = "C";
} else if(marks < 60 && marks >= 50){
    grade = "D";
} else {
    grade = "F";
}

console.log("According to your marks, your grade is :", grade);