// Object Destructuring

const student = {

    name: "Rahul",
    age: 20,
    city: "Hyderabad"

};

const { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);

// Array Destructuring

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);