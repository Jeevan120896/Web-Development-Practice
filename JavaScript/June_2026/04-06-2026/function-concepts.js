// Function Declaration
function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet("Alice"));

// Function Expression
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 4));

// Arrow Function
const add = (a, b) => a + b;

console.log(add(10, 20));

// Default Parameters
function welcome(name = "Guest") {
    return `Welcome ${name}`;
}

console.log(welcome());

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Callback Function
function processUser(name, callback) {
    callback(name);
}

processUser("David", (user) => {
    console.log(`Processing ${user}`);
});

// Higher-Order Function
function calculator(operation, a, b) {
    return operation(a, b);
}

console.log(
    calculator((x, y) => x - y, 10, 3)
);

// Closure
function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());