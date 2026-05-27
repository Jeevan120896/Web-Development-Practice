//Normal function
const a=10, b=20;
function sum (a,b){
 console.log(a+b)
}
sum(a,b)

//Named function has declared name
function name(){
    console.log("Welcome!");
}
name()

//Anonymous function has no name
let c = 5, d = 10;

let sum1 = function(c, d) {
    console.log(c + d);
};
sum1(c, d);

//Arrow function is a shorter way to write a function
let e=10, f=5;
let multiply=(e,f) => console.log(e*f);
multiply(e,f)


//Named function
function printName(name) {
  console.log("Name:", name);
}
printName("Jeevan");


//Anonymous function
const showAge = function(age) {
  console.log("Age:", age);
}
showAge(28);


//Arrow function
const displayCity = (city) => {
  console.log("City:", city);
}
displayCity("Vijayawada");

//All three functions included

// Example values
name = "Gowtham";
age = 25;
city = "Vizag";

// 1️⃣ Named Function

function showDetails(name, age, city) {
  console.log("Named Function:", name, age, city);
}

// 2️⃣ Anonymous Function (Function Expression)
const showDetails2 = function(name, age, city) {
  console.log("Anonymous Function:", name, age, city);
};

// 3️⃣ Arrow Function
const showDetails3 = (name, age, city) => {
  console.log("Arrow Function:", name, age, city);
};

// Calling all functions
showDetails(name, age, city);
showDetails2(name, age, city);
showDetails3(name, age, city);

