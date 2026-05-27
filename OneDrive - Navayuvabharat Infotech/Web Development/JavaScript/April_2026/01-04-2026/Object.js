// 1. Object Literal
console.log("=== Object Literal ===");

const personLiteral = {
  name: "Ravi",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

personLiteral.greet();


// 2. Object Constructor
console.log("\n=== Object Constructor ===");

const personConstructor = new Object();
personConstructor.name = "Sita";
personConstructor.age = 22;
personConstructor.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

personConstructor.greet();


// 3. Constructor Function
console.log("\n=== Constructor Function ===");

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const p1 = new Person("Arjun", 30);
const p2 = new Person("Meena", 28);

p1.greet();
p2.greet();


// 4. ES6 Class
console.log("\n=== ES6 Class ===");

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p3 = new PersonClass("Kiran", 35);
const p4 = new PersonClass("Anita", 32);

p3.greet();
p4.greet();


// 5. Inheritance
console.log("\n=== Inheritance ===");

class Employee extends PersonClass {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }

  work() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

const emp = new Employee("Vikram", 29, "Developer");

emp.greet();
emp.work();