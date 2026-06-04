// 1. Function Declaration (Hoisted)
function greet(name = "Guest") { // Default Parameter
  return `Hello, ${name}`;
}

// 2. Function Expression
const add = function(a, b) {
  return a + b;
};

// 3. Arrow Function
const multiply = (a, b) => a * b;

// 4. Callback Function + Higher-Order Function
function operate(a, b, operation) {
  return operation(a, b);
}

// 5. Closure
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// 6. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed");
})();

// 7. Rest Parameters
function sumAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

// 8. Spread Operator
const numbers = [1, 2, 3];
const spreadSum = add(...numbers);

// 9. Object with 'this'
const person = {
  name: "Sai",
  greet: function () {
    console.log("Hi, I am " + this.name);
  }
};

// 10. Constructor Function
function Person(name) {
  this.name = name;
}

// 11. Recursion
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// 12. Pure Function
function square(x) {
  return x * x;
}

// 13. Impure Function
let total = 0;
function addToTotal(x) {
  total += x;
}

// 14. call, apply, bind
function sayHello() {
  console.log("Hello " + this.name);
}

const user = { name: "Ravi" };

// 15. Arrow function (no 'this')
const arrowThis = () => {
  console.log(this);
};

// 16. Async Function
async function fetchData() {
  return "Async Data";
}

// 17. Generator Function
function* generatorFunc() {
  yield 1;
  yield 2;
}

// ------------------ EXECUTION ------------------

console.log(greet("Sai"));
console.log(add(2, 3));
console.log(multiply(4, 5));

console.log(operate(5, 3, add)); // callback

const count = counter();
console.log(count());
console.log(count());

console.log(sumAll(1, 2, 3, 4));

person.greet();

const p1 = new Person("Ram");
console.log(p1.name);

console.log(factorial(5));

console.log(square(6));

addToTotal(10);
console.log(total);

sayHello.call(user);
sayHello.apply(user);

const boundFunc = sayHello.bind(user);
boundFunc();

arrowThis();

fetchData().then(console.log);

const gen = generatorFunc();
console.log(gen.next().value);
console.log(gen.next().value);