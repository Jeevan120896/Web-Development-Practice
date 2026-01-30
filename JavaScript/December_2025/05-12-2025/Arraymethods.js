//flat()
const arr = [1, 2, [3, 4]];
console.log(arr.flat(1)); 
// [1, 2, 3, 4]

const arr2 = [1, [2, [3, [4]]]];
console.log(arr2.flat(2));
// [1, 2, 3, [4]]


const arr4= [1, [2, [3, [4]]]];
console.log(arr4.flat(Infinity));
// [1, 2, 3, 4]


//forEach() 
//forEach() is an array method used to run a function once for every element in the array.
// It does not return a new array.
//syntax
// array.forEach(function(element, index, array) {
//   // code
// });

const arr1 = [10, 20, 30, 40, 50];

arr1.forEach((value) => {
  console.log(value);
});


const colors = ["color: red", "color: green", "color: blue"];

colors.forEach((color, index) => {
  console.log(index, color);
});

//Object Literal — Syntax
//A simple way to create an object by defining its properties and methods inside curly braces {}.
// const objectName = {
// //   key1: value1,
// //   key2: value2,
// //   key3: value3
// // };

//Object Literal Example:
const person = {
  name: "Jeevan",
  age: 29,
  isStudent: true,
  hobbies: ["Circket", "Music"],
  
  greet() {
    console.log("Hello, my hobbies is " + person.hobbies);
  }
};

person.greet(); 


//Object Constructor — Syntax
//Creating an object using the built-in Object constructor, then adding properties manually.
// const objectName = new Object();
// objectName.key = value;

//Object Constructor -Example
const car = new Object();

car.brand = "Toyota";
car.model = "Innova";
car.year = 2024;
for (Z in car){
    console.log()
}
console.log(car.brand, car.model, car.year); 


//ES6 Constructor Method — Syntax
//contructor([arguments]){....}

//Example
class Employee{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.salary = this.salary;
    }
}
var emp = new Employee(1122, "Gowtham", 20000);
console.log(emp)



function Person(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hello, I'm " + this.name);
      console.log("I'm " + this.age + " years old");
    }
  };
}

const p1 = Person("Jeevan", 28);
const p2 = Person("Kumar", 29);

console.log(p1.name); // Jeevan
console.log(p2.age);  // 29
p1.greet();
p2.greet();


