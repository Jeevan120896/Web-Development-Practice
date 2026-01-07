const str = "Hello World!";
console.log(str.length);

//Get Current Date
const date = new Date();
console.log(date);

//Get Individual Date Parts
const d = new Date();
console.log(d.getFullYear());  
console.log(d.getMonth());    
console.log(d.getDate());      
console.log(d.getDay());       

//Math.sqrt() – square root
console.log(Math.sqrt(25)); 

//Math.cbrt() – cube root
console.log(Math.cbrt(27)); 

//Math.pow() – power
console.log(Math.pow(2, 4)); 

//Math.round() – nearest integer
console.log(Math.round(4.6)); 
console.log(Math.round(4.4)); 

//Math.floor() – always down
console.log(Math.floor(7.9)); 

//Math.ceil() – always up
console.log(Math.ceil(7.1)); 


//Random Number Examples
console.log(Math.random());

//Random integer 0–50
console.log(Math.floor(Math.random() * 50));

//Random integer in a range
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand(1, 50)); 

let a = 20;
let b = 5;

let minValue = Math.min(a, b);
let maxValue = Math.max(a, b);

console.log("Min:", minValue); // 5
console.log("Max:", maxValue); // 20


//Template string
const name = "Jeevan";
const age = 29;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);


//Example Combining All
let string = " JavaScript ";
console.log(string.length);            
console.log(string.toUpperCase());    
console.log(string.toLowerCase());     
console.log(string.trim());  

//DOM
//getElementById()
const title = document.getElementById("title");
console.log(title);

//getElementsByClassName()
const items = document.getElementsByClassName("item");
console.log(items[0]); 
console.log(items.length); 

//getElementsByTagName()
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[1]); 

//querySelector()
const firstBox = document.querySelector(".box");
console.log(firstBox); 











