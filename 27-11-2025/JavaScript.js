//Reverse string
str="Hello"
function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse(str));

//Even or Odd
n=4
function evenOdd(n){
    return n%2 === 0 ? "Even" : "Odd"
}
console.log(evenOdd(n));

//Palindrom
str4="Car"
function Palindrom(str){
return str===str.split("").reverse().join("");
}
console.log(Palindrom(str4));

//duplicates
let arr=[1,2,2,3,3,4,6,6,7,8,9,9];
let duplicates = arr.filter((item, index)=> arr.indexOf(item)!==index);
console.log(duplicates);

//count vowels
let str1="javascript";
let count=0;
for(let ch of str1){
    if ("aeiou".includes(ch)) 
        count++;
}
console.log(count);

//Remove duplicates
let array=[1,2,2,3,4,4];
let unique=[...new Set(array)];
console.log(unique);


//Largest number
let arr2=[10,20,40,70];
console.log(Math.max(...arr2));


//swap without temp
let a=5,b=10;
[a,b]=[b,a];
console.log(a,b);


//second largest
let arr3=[10,20,40,70,80];
arr3=[...new Set(arr3)].sort((a,b)=>b-a);
console.log(arr3[1]);


//Missing number
let arr6=[1,2,3,5,6,7,8,9,10];
let total=(10*(10+1))/2;
let sum = arr6.reduce((a,b)=>a+b,0);
console.log(total - sum);


//Ternary Operator
let age=20
console.log(age>=18 ? "Adult" : "Minor");


//callback example
function greet(name, callback){
    console.log("Hello" + name);
   callback();
}
function bye(){
    console.log("Goodbye");
}
greet("Ram", bye)


//NaN check
console.log(NaN === NaN);
console.log(Number.isNaN(NaN));


//if statement
let age1 = 20;

if (age1 >= 18) {
  console.log("You are an adult");
}

//if else
let number = 5;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//if else-if
let marks = 78;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else if (marks >= 60) {
  console.log("C Grade");
} else {
  console.log("Fail");
}


//switch case
let day = 3;

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}

//Push() example Add item to the end of array
let number1 = [1,2,3,4,5]
number1.push(6);
console.log(number1);

//Push() example Remove item to the end of array
let num = [1,2,3]
num.pop();
console.log(num);

//splice() at the beginning 
let array7 = ["c", "d"];

array7.splice(0, 0, 1, "a", "b");  // insert at index 0
console.log(array7);

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