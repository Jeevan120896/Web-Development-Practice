//An array is a data structure used to store multiple values in a single variable.

//Example

let fruits = ["apple", "banana", "mango", "orange", "pineapple"];
console.log(fruits);


//Push() example Add item to the end of array
let number = [1,2,3,4,5]
number.push(6);
console.log(number);

//Push() example Remove item to the end of array
let num = [1,2,3]
num.pop();
console.log(num);

//Push() object into an Array
let students = [
  { name: "Jeevan", age: 28 }
];

students.push({ name: "Kumar", age: 29 });
students.push({ name: "Ravi", age: 27 });
students.push({ name: "Kishore", age: 26 });
console.log(students);

//splice() at the beginning 

let array = ["c", "d"];

array.splice(0, 0, 1, "a", "b");  // insert at index 0

console.log(array);

//Remove the first element
let ar = ["a", "b", "c"];

ar.splice(0, 1);  // remove 1 element from index 0

console.log(ar);


//Add at the end 
let arr = [1, 2, 3, 4];

arr.splice(arr.length, 0, 5, 6);

console.log(arr);

//Remove the last element
let num1= [1, 2, 3, 4];

num1.splice(num1.length - 1, 1); // start at last index, remove 1 item

console.log(num1);


//Shift multiple times
let nums = [15, 24, 30, 40, 70, 90];

nums.shift();  // removes 15
nums.shift();  // removes 24
nums.shift(); // removes 30

console.log(nums);  

//Unshift multiple times
let numbers = [25, 27, 30, 40];

numbers.unshift(1,4);  //added 1,4
numbers.unshift(5,10);  //added 5,10
console.log(numbers);  //1,4,5,10,25,27,30,40



let array1 = ["a", "b", "c"];
let count = 0;

for (let value of array1) {
    count++;
}

console.log(count); // 3


