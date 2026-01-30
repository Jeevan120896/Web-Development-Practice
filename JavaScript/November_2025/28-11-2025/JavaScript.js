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


// Global Scope it is declared outside any block or function.
// It can be accessed anywhere in the program.

//Example
// Global Scope
var Apple="Red";
let Orange="Yellow";
const Banana="Green";

function fruit(){

    console.log(Apple) // accessible
    console.log(Orange) // accessible
    console.log(Banana) // accessible
}
fruit()
    console.log(Apple) // accessible
    console.log(Orange) // accessible
    console.log(Banana) //accessible


 //All three functions included

// Example values
name = "Gowtham";
age = 25;
city = "Vizag";

// 1. Named Function
function showDetails(name, age, city) {
  console.log("Named Function:", name, age, city);
}

// 2. Anonymous Function
const showDetails2 = function(name, age, city) {
  console.log("Anonymous Function:", name, age, city);
};

// 3. Arrow Function
const showDetails3 = (name, age, city) => {
  console.log("Arrow Function:", name, age, city);
};

// Calling all functions
showDetails(name, age, city);
showDetails2(name, age, city);
showDetails3(name, age, city);



//Example Function scope

   function login() {
    let username = "Jeevan"; // function scope

    console.log(username);
}

login();
//console.log(username); // Error: username is not defined


//Block Scope Variables declared inside {} using let or const
//Example Block Scope

if (true) {
  let a = 10;
  const array = ["Hello", "Welcome"];
  const obj = { key: "value" };

  console.log(a);   
  console.log(array); 
  console.log(obj); 
}

//console.log(a);  // Error
//console.log(array); // Error

//for loop
let i=5;
for(i=0; i<=5; i++){
    console.log(i);
}

//while loop
i=5;
while(i<10){
    console.log(i);
    i++;
}

//do while
let num=0;
do{
    console.log (num);
    num++;
} while(num<5);