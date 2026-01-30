let PassMarks = 50;
let res = (PassMarks > 39) ? "Pass" : "Fail";
console.log(res);


let day = 3;
let greeting = (day === 1) ? 'Start of the week' :
               (day === 2) ? 'Second day' :
               (day === 3) ? 'Midweek' :
               (day === 4) ? 'Almost weekend' :
               'Weekend';

console.log(greeting);

//Ternary Operator in Functions
function checkAge(age) {
  return (age >= 18) ? 'Adult' : 'Minor';
}

console.log(checkAge(20));  
console.log(checkAge(15));

//Using the Ternary Operator with Function Calls
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
}

let isLeaving = true;
let name = 'Geeks';

isLeaving ? sayGoodbye(name) : sayHello(name);

//For loop
const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Skipping Iterations (continue)
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  console.log(i);
}

//Stopping Early (break)
for (let i = 1; i <= 10; i++) {
  if (i === 6) 
    break;
  console.log(i);
}


// Array of Andhra Pradesh cities with temperatures (°C)
const apCities = [
    { city: "Visakhapatnam", temp: 32 },
    { city: "Vijayawada", temp: 29 },
    { city: "Tirupati", temp: 38 },
    { city: "Guntur", temp: 28 },
    { city: "Rajahmundry", temp: 35 },
    { city: "Kurnool", temp: 22 }
];

// Loop through each city
for (let i = 0; i < apCities.length; i++) {
    // Ternary operator to decide the temperature status
    let status = apCities[i].temp > 35 
        ? "🔥 Hot" 
        : apCities[i].temp < 25 
            ? "❄️ Cold" 
            : "🌤️ Pleasant";

    console.log(`${apCities[i].city}: ${apCities[i].temp}°C → ${status}`);
}


//While loop
let count = 1;

while (count <= 5) {
  console.log("Count is:", count);
  count++;
}

//do While loop
let num = 1;

do {
  console.log("Number is:", num);
  num++;
} while (num <= 5);






