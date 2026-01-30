//Impure function
//impure function can produces different outputs to same input.

let s = Math.floor(Math.random()*(100-1+1))+1
console.log(s);

// Function currying
//Multiple arguments into a series of functions,each taking a single argument.

function add(a) {
    return function(b) {
        return a + b;
    };
}

const addTwo = add(5);
console.log(addTwo(4)); // 9


//Example Function currying
function sum(a){
    return (b) => {
        return (c) => {
            return a+b+c
        }
    }
}
console.log(sum(5)(2)(8))


//First-Class Function
//store them in variables, pass them as arguments, or return them from other functions

function printHello(){
    console.log("Hello");
}
let a = printHello;
a();


//Pure Function
//always gives the same output for the same input and has no side effects.

function addition(a,b){
    return a + b;
}
console.log(addition(5,3));//8
console.log(addition(5,3)); //always 8 for same input


//Higher-Order Function
//function that takes another function as an argument or returns a function.
function transform(value, transformFn) {
  return transformFn(value); // using another function
}

function square(num) {
  return num * num;
}

console.log(transform(6, square)); // 36

//Push() example Add item to the end of array
let number = [1,2,3,4,5]
number.push(6);
console.log(number);


//Pop()//Removes the last elements and returns it.
let num1=[1,2,3,4];
num1.pop();
console.log(num1);


//Shift removes the first element and returns it.
let nums = [15, 24, 30, 40, 70, 90];

nums.shift();  // removes 15
nums.shift();  // removes 24
nums.shift(); // removes 30

console.log(nums);  


//Unshift adds elements to the beginning of an array.
let numbers = [25, 27, 30, 40];
numbers.unshift(1,4);  //added 1,4
numbers.unshift(5,10);  //added 5,10
console.log(numbers);  //1,4,5,10,25,27,30,40


const fruits =["Banana", "Orange", "Apple"];
fruits.unshift(1,"Lemon");
console.log(fruits);

//String.lastIndexOf()
let text = "Hello world, welcome to the world!";
let index = text.lastIndexOf("world");
console.log(index);  // 28

//Array.lastIndexOf()
let numbers1 = [1, 2, 3, 2, 1, 2];
console.log(numbers1.lastIndexOf(1)); // 4


//array concat()
let arr1 = [1, 2];
let arr2 = [3, 4];

let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]

//string concat()
let d = "Hello ";
let b = "World";
let c = d.concat(b);

console.log(c); // "Hello World"










