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


//This keyword
//Examples

const person = {
  name: "Ram",
  show: function() {
    console.log(this.name);
  }
};


person.show();  

const obj = {
  name: "Vikram",
  show: () => {
    console.log(this.name);
  }
};

obj.show();   // undefined


const numbers = {
  list: [10, 20, 30],
  showList: function() {
    console.log(this.list);
  }
};

numbers.showList(); 


function Car(model) {
  this.model = model;
}

const c1 = new Car("Toyota");
const c2 = new Car("BMW");
const c3 = new Car("TATA");
const c4 = new Car("Hyundai");
const c5 = new Car("Mahindra");
console.log(c1.model); 
console.log(c2.model);
console.log(c3.model);
console.log(c4.model);
console.log(c5.model);


class Person {
  constructor(name) {
    this.name = name;
  }

  show = () => {
    console.log(this.name);
  };
}

const p = new Person("Sreekanth");
p.show();  // Sreekanth


