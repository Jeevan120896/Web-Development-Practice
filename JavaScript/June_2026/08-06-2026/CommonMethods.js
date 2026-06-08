// parseInt
let a = parseInt("25.75");
console.log("parseInt:", a);

// parseFloat
let b = parseFloat("25.75");
console.log("parseFloat:", b);

// JSON.stringify
let student = {
    name: "Ravi",
    age: 20
};

let jsonData = JSON.stringify(student);
console.log(jsonData);

// JSON.parse
let obj = JSON.parse(jsonData);
console.log(obj);

// toString
let num = 100;
console.log(num.toString());

// toFixed
let price = 99.456;
console.log(price.toFixed(2));