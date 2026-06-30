// ======================================
// JavaScript Concepts
// ======================================

// ======================================
// 1. Callback
// ======================================

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Good Bye!");
}

greet("Rahul", sayBye);

// ======================================
// 2. Promise
// ======================================

let promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }

});

promise
.then(result => console.log(result))
.catch(error => console.log(error));


// ======================================
// 3. Async / Await
// ======================================

function fetchData() {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Data Loaded Successfully");
        }, 1000);

    });

}

async function displayData() {

    let data = await fetchData();

    console.log(data);

}

displayData();


// ======================================
// 4. Iterator
// ======================================

let colors = ["Red", "Green", "Blue"];

let iterator = colors[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// ======================================
// 5. Generator
// ======================================

function* numbers() {

    yield 1;
    yield 2;
    yield 3;

}

let num = numbers();

console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());


// ======================================
// 6. setTimeout
// ======================================

let timeout = setTimeout(() => {

    console.log("This runs after 2 seconds");

}, 2000);

// Uncomment to stop timeout
// clearTimeout(timeout);


// ======================================
// 7. setInterval & clearInterval
// ======================================

let count = 1;

let interval = setInterval(() => {

    console.log("Interval Count:", count);

    if (count === 3) {

        clearInterval(interval);

        console.log("Interval Stopped");

    }

    count++;

}, 1000);


// ======================================
// 8. IIFE
// ======================================

(function () {

    console.log("IIFE Executed");

})();


// ======================================
// 9. Currying
// ======================================

function add(a) {

    return function (b) {

        return a + b;

    };

}

console.log("Currying:", add(10)(20));


// ======================================
// 10. First-Class Function
// ======================================

function hello() {

    console.log("Hello from First-Class Function");

}

let firstClass = hello;

firstClass();


// ======================================
// 11. Higher-Order Function
// ======================================

function calculate(a, b, operation) {

    return operation(a, b);

}

function multiply(x, y) {

    return x * y;

}

console.log("Higher Order Function:", calculate(5, 4, multiply));


// ======================================
// 12. Pure Function
// ======================================

function square(num) {

    return num * num;

}

console.log("Pure Function:", square(5));


// ======================================
// 13. Impure Function
// ======================================

let total = 0;

function addValue(value) {

    total += value;

    return total;

}

console.log("Impure Function:", addValue(5));
console.log("Impure Function:", addValue(5));


// ======================================
// 14. Recursion
// ======================================

function factorial(n) {

    if (n === 1) {

        return 1;

    }

    return n * factorial(n - 1);

}

console.log("Factorial of 5:", factorial(5));


