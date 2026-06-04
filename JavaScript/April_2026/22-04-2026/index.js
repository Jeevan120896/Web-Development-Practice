//1. Login System (Logical Operator)//

let username = "admin";
let password = "1234";

console.log("===Login System===");
if(username === "admin" && password === "1234"){
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}

//2. ATM System (Conditional Statement)

let balance = 1000;
let withdrawAmount = 600;

console.log("===ATM System===");
if (withdrawAmount <= balance){
    balance = balance - withdrawAmount;
    console.log("Transcation Successful");
    console.log("Remaining Balance: " + balance);

} else {

console.log("Insufficient Balance");
}

//3. Template Literals

let name = "Ravi";
let city = "Vijayawada";

console.log("=== User Message ===");
console.log(`Hello ${name}, Welcome to our system from ${city}`);

//4. Typeof Operator

let mobile = 6300740043;
console.log("=== Type Check ===");
console.log(`Mobile value: ${mobile}`);
console.log(`Data type: ${typeof mobile}`);


//5. For Loop (Product Listing)
console.log("=== Product List ===");

for(let i = 1; i<= 5; i++) {
    console.log(`Product ${i}`);
}

//6. While loop (Retry System)

console.log("=== Login Attempts ===");
let Attempt = 1;
while (Attempt <= 3){
    console.log(`Attempt ${Attempt}: Trying login...`);
    Attempt++;
}

//7. DO-While loop

console.log("=== OTP Verification ===");
let otp;

do{
    otp = 1234;
    console.log("Enter OTP...");
} while (otp !==1234);
console.log("OTP Verified");

//8. Array (Shopping cart System)

console.log("=== Shopping Cart ===");

let cart = ["shirt", "shoes", "Watch"];

//Add items
cart.push("Mobile");
cart.push("Cap");

//Remove last item

cart.pop();

console.log("Final Cart Items:");
console.log(cart);

// Switch Case (Menu System)

console.log("=== Menu Selection ===");

let choice = 3;

switch(choice){
    case 1:
        console.log("You selected Pizza");
        break;
    case 2:
        console.log("You selected Burger");
        break;
    case 3:
        console.log("You selected Pasta");
        break;
    default:
        console.log("Invalid Choice");
}

//Arrow Function 
console.log("=== Calculator ===");

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

console.log("Addition:", add(10, 5));
console.log("Subtraction:", sub(10, 5));




/***********************
 * 1. OBJECTS
 ***********************/
const person = {
  name: "John",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet();

// Dynamic Object
person.city = "Delhi";
delete person.age;

// Iterating Objects
for (let key in person) {
  console.log(key, person[key]);
}

// Cloning Objects
const clone1 = Object.assign({}, person);
const clone2 = { ...person };

/***********************
 * 2. BUILT-IN OBJECTS
 ***********************/
console.log(Math.round(4.6));
console.log(new Date().toLocaleDateString());

const str = new String("Hello JS");
console.log(str.toUpperCase());

// Template Literals
const msg = `Name: ${person.name}, City: ${person.city}`;
console.log(msg);

/***********************
 * 3. GARBAGE COLLECTION
 ***********************/
// Automatic in JS (no manual control)
let temp = { data: "remove me" };
temp = null;

/***********************
 * 4. DOM MANIPULATION
 ***********************/
const div = document.createElement("div");
div.innerText = "Hello DOM";
document.body.appendChild(div);

// Selecting Elements
const body = document.querySelector("body");

// Traversing
console.log(body.firstChild);

// Add / Remove / Replace
const p = document.createElement("p");
p.innerText = "Paragraph";
document.body.appendChild(p);

document.body.removeChild(p);

const newDiv = document.createElement("div");
newDiv.innerText = "Replaced";
document.body.replaceChild(newDiv, div);

/***********************
 * 5. EVENTS
 ***********************/
const btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.appendChild(btn);

// Normal Event
btn.addEventListener("click", () => {
  console.log("Button clicked");
});

// Event Bubbling & Capturing
document.body.addEventListener(
  "click",
  () => console.log("Body clicked (bubbling)")
);

document.body.addEventListener(
  "click",
  () => console.log("Body clicked (capturing)"),
  true
);

// Event Delegation
document.body.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Delegated button click");
  }
});

/***********************
 * 6. PERFORMANCE
 ***********************/
// Throttling
function throttle(fn, limit) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => (flag = true), limit);
    }
  };
}

// Debouncing
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

/***********************
 * 7. ASYNC JAVASCRIPT
 ***********************/
// Callback
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => console.log(data));

// Promise
const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Promise resolved"), 1000);
});

promise.then(console.log);

// Async/Await
async function asyncFunc() {
  const res = await promise;
  console.log(res);
}
asyncFunc();

/***********************
 * 8. ITERATORS & GENERATORS
 ***********************/
// Iterator
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();
console.log(iterator.next());

// Generator
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
console.log(g.next());

/***********************
 * 9. BROWSER APIs
 ***********************/
const timeoutId = setTimeout(() => {
  console.log("Timeout executed");
}, 1000);

clearTimeout(timeoutId);

const intervalId = setInterval(() => {
  console.log("Interval running");
}, 2000);

setTimeout(() => clearInterval(intervalId), 5000);

