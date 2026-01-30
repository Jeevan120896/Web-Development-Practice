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


//Example
// Global Scope
let theme = "dark"; // global scope

function loadHeader() {
    console.log("Header theme:", theme);
}

function loadFooter() {
    console.log("Footer theme:", theme);
}

loadHeader();  // "Header theme: dark"
loadFooter();  // "Footer theme: dark"



//Function Scope Variables declared inside a function using var, let, or const
//Example Function scope

function user (){
  let number = 100;         
  const items = [10, 20, 30];
  var person = { name: "Suresh"};

     console.log(number) // accessible
     console.log(items) // accessible
     console.log(person) // accessible

}
user();
   //console.log(number) // number is not defined error
   //console.log(items) // items is not defined error
   //console.log(person) // person is not defined error


//Example Function scope

   function login() {
    let username = "Jeevan"; // function scope

    console.log(username);
}

login();
//console.log(username); // Error: username is not defined


//Block Scope Variables declared inside {} using let or const
//Example Block Scope
function sports(){
    if(10 < 20){
        var tennis = "sania"
        let Cricket = "MS Dhoni"
        const ground = "stadium"
      console.log("I like Cricket")
      console.log(tennis) // accessible 
      console.log(Cricket) // accessible
      console.log(ground) // accessible
    }

    //console.log(tennis) // accessible
    //console.log(Cricket) //Circket is not defined error
    //console.log(ground) // ground is not defined error
}
sports();
   //console.log(tennis) // tennis is not defined error
  //console.log(Cricket) //Circket is not defined error
 //console.log(ground) // ground is not defined error



 //Recursive function is a function that calls itself
//Example

function factorial(n) {
  if (n <= 1) return 1;       // base case
  return n * factorial(n - 1); // recursive call
}

console.log(factorial(5)); // 120


//Example
function sum(n) {
  if (n === 1) return 1;      // base case
  return n + sum(n - 1);      // recursive call
}

console.log(sum(5)); // 15


//14
function factorial(n) {
  if (n <= 1) return 1;       
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120


//
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 }
];


const ages = people.map(person => person.age);

const totalAge = ages.reduce((sum, age) => sum + age, 0);

const averageAge = totalAge / people.length;

console.log(averageAge);
