function NYB () {
  console.log("Hello world!");
}
NYB(); 

//Function Declaration
function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); 


//Function with Parameters
function multiply(x, y){
    return x * y;
}
console.log(multiply(4, 6));


//Function Returns a Value
function getName(){
    return "NYB Infotech";
}
name = getName();
console.log(name);


//Arrow Function
 multiply = (a, b) => a * b;

console.log(multiply(2, 5)); 

add = (a, b) => a + b;
console.log(add(5, 3));

//Arrow function to check even or odd
let checkNumber = n => (n % 2 ==0 ? "Even" : "Odd");
console.log(checkNumber(7));  


//Factorial Using Recursive
function factorial (n){
    if (n == 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));


//Countdown Using Recursion
function Countdown(num){
    if(num == 0)
        return;
console.log(num);
Countdown(num - 1);
}
Countdown(3);


//Constructor Function

function Person(name, age){
    this.name = name;
    this.age = age;

}
const person1 = new Person("Gopi", 28);
console.log(person1.name, person1.age); 



//Callback Function

function display(result){
    console.log("Result is:", result);

}
function calculate(a, b, callback){
    let sum = a + b;
    callback(sum);
}
calculate(5, 10, display);



function greet(name){
    console.log("Hello " + name);
}
function processuser(callback){
let userName = "Jeevan";
callback(userName);
}
processuser(greet);