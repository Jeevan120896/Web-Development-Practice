//for...of Loop
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}


// Collection examples
const array = [10, 20, 30];
const string = "ABC";
const map = new Map([["name", "Ram"], ["age", 25]]);
const set = new Set([1, 2, 3]);

for (const item of array)
     console.log("Array item:", item);

for (const char of string) 
    console.log("String char:", char);

for (const [key, value] of map) 
    console.log("Map entry:", key, value);

for (const value of set)
     console.log("Set value:", value);


//for...in
const user = {
  name: "Ram",
  age: 28,
  city: "Hyderabad"
};

for (const key in user) {
  console.log(key, ":", user[key]);
}


//Parameters vs Arguments
function User(name) {   // "name" = parameter
  console.log("Hello", name);
}

User("Ram");            // "Ram" = argument



//High-Priority (Required) Parameters
function add(a, b) {  // a and b are required parameters
  return a + b;
}

console.log(add(10, 20)); // arguments: 10, 20
console.log(add(10));     // missing second argument → NaN


//Low-Priority Parameters — Default Values
function multiply(a, b = 2) {  // b is optional (low priority)
  return a * b;
}

console.log(multiply(5, 3)); // 15
console.log(multiply(5));    // 10 (b defaults to 2)


//Low-Priority Rest Parameter (...args)
function showDetails(first, ...Others) {
  console.log("First:", first);
  console.log("Others:", Others);
}

showDetails("A", "B", "C", "D");

