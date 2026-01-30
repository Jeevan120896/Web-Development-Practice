//Asynchronous Operations with async & await
//async makes a function return a Promise
//await pauses execution until the Promise is resolved
//Used inside async functions only

//Example
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function getData() {
//   console.log("Fetching...");
  const result = await fetchData(); // waits here
  console.log(result);
}

getData();

//Destructuring array

const num = [1, 2, 3, 7, 9];
const [A, B, C, D, E] = num;

console.log(A, B, C, D, E);

//Destructuring Nested Array

const array = [1, 2, 3, [10, 20], 4, [30], 5];
const[a, b, c, [d, e], f, [g], h] = array;

console.log(a, b, c, d, e, f, g, h);

//Destructuring Object

const Person={
    name: "Jeevan",
    age: 29,
    city:"Vijayawada"

}

const {name, age, city}= Person;
console.log(name);
console.log(age);
console.log(city);


//Destructuring Nested Object

const user={
    name1: "Gowtham",
    age1: 27,
    address:{
        city1:"Nellore",
        country: "India"
    }

}
const {
    name1, 
    age1, 
    address: {city1, country}
} = user;

console.log(name);
console.log(age1);
console.log(city1);
console.log(country);


//Iterator
let number1 = [10, 20, 30, 40];
let k = number1[Symbol.iterator]()
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());

//Generator
function* str() {
  yield "Hello";
  yield "Welcome";
  yield "Done";
}

const gen = str();

console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
