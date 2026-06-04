console.log("===== operators.js =====");

// ARITHMETIC

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);


// COMPARISON

console.log(10 > 5);
console.log(10 == "10");
console.log(10 === "10");


// TERNARY

let voterAge = 18;

let result = voterAge >= 18
  ? "Eligible"
  : "Not Eligible";

console.log(result);


// LOGICAL

console.log(true && true);
console.log(true || false);
console.log(!true);