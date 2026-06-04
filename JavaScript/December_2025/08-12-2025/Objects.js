//Normal Copying of an Object
const person = {FName: "Jeevan", Age: 29};
const copy = person;
copy.LName= "Kumar"
// delete copy.LName
console.log(person);
// console.log(copy);

//Normal Copying of an Array
const numbers = [1, 2, 3, 4, 5];
const copy1 = numbers;
copy1[1] = 100;
console.log(numbers);


//Shallow copying with the help of spread operator.
//Object Example
const user = {FName: "Ram", Age: 28};
const obj = {...user};
obj.LName= "Kumar" //Adding
console.log(obj); //calling
console.log(user);

//Array Example
const num = [2, 4, 6, 8, 10];
const obj1 = {...num};
obj1[5] = 15; //Adding
console.log(num); 
console.log(obj1); //calling

//Object.assign() //Object Example
//Object.assign(target, source1, source2, ...);

const student = { id: 1515, Grade: "A" };
let obj2 = {};              
obj2 = Object.assign(obj2, student);

obj2.id = 1517;
obj2.Grade = "B";
console.log(student);
console.log(obj2);


//Array Example
const arr = [10, 20, 30, 40];
const copy2 = Object.assign({}, arr);
copy2[4] = 50 //Adding
copy2[5] = 60 //Adding
console.log(arr);
console.log(copy2); //calling

//concat()
const colors = ["Red", "Green", "Blue"];
const color =["Yellow"]
const obj3 = colors.concat(color);
// obj3[3]="Yellow" //Adding
console.log(colors);
console.log(obj3); //Calling


//deep copying
const originalObject = {
  name: "Jeevan",
  age: 29,
  address: {
    city: "Vijayawada",
    zip: 520003
  }
};

const deepCopy1 = JSON.parse(JSON.stringify(originalObject));
deepCopy1.address.city = "Vizag";
console.log(originalObject.address.city);
console.log(deepCopy1.address.city); 


//Object.keys(obj)
//Returns an array of the object's own property names (keys).
//Syntax: Object.keys(obj)

const person1 = { FName: "Jeevan", LName: "Kumar", Age: 29 };

const keys = Object.keys(person1);
console.log(keys);


//Object.values(obj)
//Returns an array of the object's own property values.
//Syntax: Object.values(obj)

const person2 = { FName: "Jeevan", LName: "Kumar", Age: 29 };

const values = Object.values(person2);
console.log(values);

//Object.entries(obj)
//Returns an array of key-value pairs, where each pair is an array [key, value].
//Syntax:Object.entries(obj)
const person3 = { FName: "Jeevan", LName: "Kumar", Age: 29 };

const entries = Object.entries(person);
console.log(entries);

//arr.slice()

//Array Example
const arr3 = [10, 20, 30, 40];
const copy4 = arr.slice(arr3);
copy4[4] = 50 //Adding
copy4[5] = 60 //Adding
console.log(arr3);
console.log(copy4); //calling


const student5 = {id: 1515, Grade: "A"};
const obj5 = Object.assign({}, student5);
// console.log(obj2);
obj5.id = 1517
obj5.Grade = "B" //Adding
console.log(student5);
console.log(obj5);//calling

//Template string
const name = "Jeevan";
const age = 29;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
// Output: My name is Jeevan and I am 29 years old.

//Nested Template Strings
const person4 = { firstName: "Jeevan", lastName: "Kumar" };
console.log(`Full name: ${`${person4.firstName} ${person4.lastName}`}`);
// Output: Full name: Jeevan Kumar

