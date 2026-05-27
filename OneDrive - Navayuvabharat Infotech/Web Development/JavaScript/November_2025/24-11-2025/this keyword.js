//this keyword refer to he object that is executing the current function.

const user = {
  name: "Jeevan",
  this() {
    console.log("Hi " + this.name);
  }
};

user.this(); // Jeevan


const person = { name: "Gowtham" };

// ---------------------
// Named function
// ---------------------
function greet(msg) { 
    return `${msg}, ${this.name}`; 
}

console.log(greet.call(person, "Hello"));     // Hello, Gowtham
console.log(greet.apply(person, ["Hi"]));     // Hi, Gowtham
console.log(greet.bind(person)("Hey"));       // Hey, Gowtham

// ---------------------
// Anonymous function
// ---------------------
const Anonymousfunction = function(msg) { 
    return `${msg}, ${this.name}`; 
};

console.log(Anonymousfunction.call(person, "Goodbye")); // Goodbye, Gowtham
console.log(Anonymousfunction.apply(person, ["Bye"]));  // Bye, Gowtham
console.log(Anonymousfunction.bind(person)("See you")); // See you, Gowtham

// ---------------------
// Arrow function 
// ---------------------
const arrowfunction = (msg) => `${msg}, ${person.name}`;

console.log(arrowfunction("Hi"));      // Hi, Gowtham
console.log(arrowfunction("Hello"));   // Hello, Gowtham



//Example call() method
// Function 1: Used with call()
function sayHelloFromCity(city) {
  console.log(`Hello ${this.name} from ${city}`);
}

const user1 = { name: "Jeevan" };

sayHelloFromCity.call(user1, "Vijayawada");
// Hello Jeevan from Vijayawada


// Function 2: Used with apply()
function welcomeFromPlace(place) {
  console.log(`Hello ${this.name} from ${place}`);
}

welcomeFromPlace.apply(user1, ["Hyderabad"]);
// Hello Jeevan from Hyderabad


// Function 3: Used with bind()
function greetWithLocation(location) {
  console.log(`Hello ${this.name} from ${location}`);
}

const boundGreeting = greetWithLocation.bind(user1, "Vizag");
boundGreeting();
// Hello Jeevan from Vizag



//Array
let fruits = ["apple", "banana"];

// Add an element
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "orange"]

// Remove last element
fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]






