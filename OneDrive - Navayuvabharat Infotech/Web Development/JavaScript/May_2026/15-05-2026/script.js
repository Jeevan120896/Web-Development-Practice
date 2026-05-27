// ================================
// IIFE (Immediately Invoked Function Expression)
// ================================
(function () {
  console.log("IIFE Executed!");
})();

// ================================
// First-Class Function
// ================================
function greet(name) {
  return `Hello ${name}`;
}

const sayHello = greet; // function stored in variable
console.log(sayHello("John"));

// ================================
// Higher-Order Function
// ================================
function calculator(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log("Higher Order:", calculator(10, 20, add));

// ================================
// Currying
// ================================
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log("Currying:", multiply(5)(4));

// ================================
// Pure Function
// ================================
function pureAdd(a, b) {
  return a + b;
}

console.log("Pure Function:", pureAdd(2, 3));

// ================================
// Impure Function
// ================================
let counter = 0;

function impureIncrement() {
  counter++;
}

impureIncrement();
console.log("Impure Function Counter:", counter);

// ================================
// Recursion
// ================================
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log("Recursion Factorial:", factorial(5));

// ================================
// ES6 MODULES
// ================================

// ----- named export -----
// export const PI = 3.14;

// ----- default export -----
// export default function test() {
//   console.log("Default Export");
// }

// ----- import example -----
// import test, { PI } from './module.js';

// ================================
// DESTRUCTURING
// ================================

// Object Destructuring
const student = {
  id: 1,
  sname: "Rahul",
  course: "JavaScript",
};

const { sname, course } = student;

console.log("Object Destructuring:", sname, course);

// Array Destructuring
const colors = ["red", "green", "blue"];

const [first, second] = colors;

console.log("Array Destructuring:", first, second);

// ================================
// ERROR HANDLING
// ================================

try {
  let num = 10;

  // Reference Error
  console.log(total);

  // Type Error
  // num.toUpperCase();

  // Syntax Error Example
  // eval("var a ==");

} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
} finally {
  console.log("Finally Block Executed");
}

// ================================
// ES6 DATA STRUCTURES
// ================================

// Map
const map = new Map();

map.set("name", "Kiran");
map.set("age", 25);

console.log("Map:", map.get("name"));

// Set
const set = new Set([1, 2, 2, 3, 4]);

console.log("Set:", set);

// WeakMap
let obj1 = {};
const weakMap = new WeakMap();

weakMap.set(obj1, "WeakMap Value");

console.log("WeakMap:", weakMap.get(obj1));

// WeakSet
let obj2 = {};
const weakSet = new WeakSet();

weakSet.add(obj2);

console.log("WeakSet:", weakSet.has(obj2));

