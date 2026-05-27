/* VARIABLES */

var oldWay = "I am var";
let age = 25;
const country = "India";

console.log(oldWay, age, country);


/* DATA TYPES */

let userName = "Ravi";
let marks = 95;
let isPassed = true;
let emptyValue = null;
let notAssigned;
let uniqueId = Symbol("id");
let bigNum = 123456789n;

let hobbies = ["Coding", "Music"];
let user = { name: "Ravi", age: 25 };

console.log(typeof userName);
console.log(typeof marks);
console.log(typeof isPassed);
console.log(typeof emptyValue);
console.log(typeof notAssigned);
console.log(typeof uniqueId);
console.log(typeof bigNum);
console.log(typeof hobbies);
console.log(typeof user);


/* WHEN TO STORE / HOW TO STORE / WHAT TO STORE */

let studentName = "Arjun";
let studentMarks = [90, 95, 98];

let student = {
    name: studentName,
    marks: studentMarks,
    passed: true
};

console.log(student);


/* OPERATORS */

let a = 10;
let b = 3;

// Arithmetic
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assignment
let x = 5;
x += 2;
x *= 3;
console.log(x);

// Comparison
console.log(a > b);
console.log(a < b);
console.log(a == "10");
console.log(a === "10");

// Ternary
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// Logical
console.log(true && false);
console.log(true || false);
console.log(!true);


/* CONTROL STATEMENTS */

// if-else
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 50) {
    console.log("Grade B");
} else {
    console.log("Fail");
}

// switch
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Other Day");
}


/* LOOPS */

// for
for (let i = 1; i <= 3; i++) {
    console.log("for loop:", i);
}

// while
let count = 1;

while (count <= 3) {
    console.log("while loop:", count);
    count++;
}

// do-while
let num = 1;

do {
    console.log("do-while:", num);
    num++;
} while (num <= 3);

// Infinite loop
// while (true) {
//     console.log("Infinite");
// }

// break & continue
for (let i = 1; i <= 5; i++) {

    if (i === 2) {
        continue;
    }

    if (i === 4) {
        break;
    }

    console.log("break/continue:", i);
}

// for-in
let person = {
    name: "Ravi",
    age: 25
};

for (let key in person) {
    console.log("for-in:", key, person[key]);
}

// for-of
let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log("for-of:", color);
}


/* FUNCTIONS */

// Function Declaration
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Ravi"));


// Named Function Expression
const add = function addNumbers(a, b) {
    return a + b;
};

console.log(add(2, 3));


// Anonymous Function Expression
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(2, 4));


// Arrow Function
const divide = (a, b) => a / b;

console.log(divide(10, 2));


/* PARAMETERS vs ARGUMENTS */

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Ravi", "Kumar"));


/* DEFAULT PARAMETERS */

function welcome(name = "Guest") {
    console.log("Welcome", name);
}

welcome();
welcome("Arjun");


/* REST PARAMETERS */

function total(...numbers) {

    let sum = 0;

    for (let n of numbers) {
        sum += n;
    }

    return sum;
}

console.log(total(1, 2, 3, 4));


/* SCOPE */

let globalVar = "I am Global";

function testScope() {

    let localVar = "I am Local";

    if (true) {

        let blockVar = "I am Block Scoped";

        console.log(blockVar);
    }

    console.log(globalVar);
    console.log(localVar);
}

testScope();


/* HOISTING */

console.log(myVar);

var myVar = 10;

sayHello();

function sayHello() {
    console.log("Hello");
}

// console.log(test);

let test = 5;


/* var vs let vs const */

var city = "Delhi";
var city = "Mumbai";

let language = "JS";

// let language = "Python";

language = "Python";

const PI = 3.14;

// PI = 3.14159;


/* CLOSURES */

function counter() {

    let countValue = 0;

    return function() {

        countValue++;

        console.log("Counter:", countValue);
    };
}

const increment = counter();

increment();
increment();
increment();


/* this KEYWORD AND BINDING */

const employee = {

    name: "Ravi",

    normalFunction: function() {
        console.log("Normal Function this:", this.name);
    },

    arrowFunction: () => {
        console.log("Arrow Function this:", this);
    }
};

employee.normalFunction();
employee.arrowFunction();


// call, apply, bind

function introduce(city, country) {

    console.log(
        `I am ${this.name} from ${city}, ${country}`
    );
}

const person1 = {
    name: "Arjun"
};


// call
introduce.call(person1, "Vijayawada", "India");


// apply
introduce.apply(person1, ["Hyderabad", "India"]);


// bind
const boundFunction = introduce.bind(
    person1,
    "Chennai",
    "India"
);

boundFunction();

