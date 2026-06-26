

console.log("Welcome to JavaScript");

// Basic Variables
let studentName = "John";
let age = 25;
let isStudent = true;

console.log("Student Name: " + studentName);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);

// Operators
let a = 10;
let b = 5;

console.log("Addition = " + (a + b));
console.log("Subtraction = " + (a - b));
console.log("Multiplication = " + (a * b));
console.log("Division = " + (a / b));

console.log("a > b = " + (a > b));
console.log("a < b = " + (a < b));

console.log("Logical AND = " + (a > 0 && b > 0));
console.log("Logical OR = " + (a > 0 || b < 0));

// Assignment Operator
a = a + 5;
console.log("New value of a = " + a);

// If Else
if (age >= 18) {
    console.log("Person is an Adult");
} else {
    console.log("Person is a Minor");
}

// Else If
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// Switch Case
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}

// For Loop
console.log("For Loop");

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// While Loop
console.log("While Loop");

let count = 1;

while(count <= 5) {
    console.log(count);
    count++;
}

// Do While Loop
console.log("Do While Loop");

let num = 1;

do {
    console.log(num);
    num++;
}
while(num <= 5);

// For Of Loop
console.log("For Of Loop");

let fruits = ["Apple", "Banana", "Mango"];

for(let fruit of fruits) {
    console.log(fruit);
}

console.log("Program Finished");