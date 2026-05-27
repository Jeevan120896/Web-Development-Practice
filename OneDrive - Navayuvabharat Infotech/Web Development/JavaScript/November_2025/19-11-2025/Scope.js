// Global Scope it is declared outside any block or function.
// It can be accessed anywhere in the program.

// Global variables
let numbers = [1, 2, 3];       // array
let user = { name: "Suresh" };  // object

function showData() {
  console.log(numbers); // accessible
  console.log(user);    // accessible
}

showData();
console.log(numbers); // still accessible


//Example
// Global variables
let num = 10;
const arr = ["Apple", "Banana", "Mango","Pineapple"];
let obj = { a: 1, b: 2, c:3 };

function Global() {
  console.log(num); // accessible
  console.log(arr); // accessible
  console.log(obj); // accessible

console.log("\nLooping Through Global Array:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // accessing global array inside loop
  }
}
Global();


//Function Scope Variables declared inside a function using var, let, or const
//Example Function scope

function test() {
  let number = 100;         
  const items = [10, 20, 30];
  var person = { name: "Ram" };

  console.log(number); 
  console.log(items);  
  console.log(person); 
}

test();
//console.log(number); // Error, not accessible


//Example
function showDetails() {
  let score = 95;                    // function scoped
  const subjects = ["Math", "Science", "English"]; // function scoped
  var student = { name: "Mounika", age: 18 };        // function scoped

  console.log("Score:", score);       // accessible
  console.log("Subjects:", subjects); // accessible
  console.log("Student:", student);   // accessible

 console.log("\nLooping Through Function Array:");
  for (let i = 0; i < subjects.length; i++) {
  console.log("Subject " + (i+1) + ":", subjects[i]);
  }
}

showDetails();

// Trying to access variables outside the function will cause an error
//console.log(score);    // Error
//console.log(subjects); // Error
//console.log(student);  // Error


//Block Scope Variables declared inside {} using let or const
//Example Block Scope

if (true) {
  let a = 10;
  const array = ["Hello", "Welcome"];
  const obj = { key: "value" };

  console.log(a);   
  console.log(array); 
  console.log(obj); 
}

//console.log(a);  // Error
//console.log(array); // Error

//Example
if (5 > 2) {
  let x = 20;                         // block scoped
  const fruits = ["Apple", "Banana"]; // block scoped
  const user = { name: "Ram", age: 25 };

  console.log(x);       // accessible
  console.log(fruits);  // accessible
  console.log(user);    // accessible
}

// Outside the block:
//console.log(x);       // Error
//console.log(fruits);  // Error
//console.log(user);    // Error




