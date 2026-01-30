//variables
let name = "Jeevan";
let age = "29";
console.log(typeof name);
console.log(age);

//Arithmetic operators
let a=10, b=3;
console.log (a+b); //Addition
console.log (a-b); //Subtraction
console.log (a*b); //Multiplication
console.log (a%b); //Remainder
console.log (a/b); //Division


//Hello world print
console.log("Hello world");


// Comparsion Operators
 let x=10, y= 10;
console.log(x==y); //loose equality operator
console.log(x===y); //strict equality operator
console.log(x>5); 
console.log(x>=5);
console.log(x<y);
console.log(x<=9);

// Objects
var person ={name:"Gowtham", age:"26", Job: "Developer" ,city: "Nellore"};
console.log(person);


//Array
let fruits=["Apples", "Banana","Mango","Pineapple"];
console.log(fruits);

//function

function NYB() {
    console.log("Hello, Welcome to company!");
}
NYB();


//Maps
var person=new Map();
person.set("name", "Farook");
person.set("Age", "29");
person.set("job", "Web Developer");
console.log(person);

//Current Date & Time
let now=new Date();
console.log(now);

//Conditional Operator (Ternary Operator)
age = 18;
let message = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(message);

//Logical Operator
a=10;
b=5;
//AND (&&)
console.log(a>5 && b<10); // true (Both conditions true)
console.log(a>10 && b<5); // false (Both conditions false)

//OR (||)
console.log(a>5 || b<10); // true (one condition true)
console.log(a<5 || b>10); // false (both false)

//NOT (!)
console.log(!(a>5)); //false (Because a>5 is true, NOT makes it false)
console.log(!(b>10)); //true (Because b>10 is false, NOT makes it true)