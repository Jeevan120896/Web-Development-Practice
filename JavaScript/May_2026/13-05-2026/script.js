console.log("========== ARRAYS ==========");

let fruits = ["Apple", "Banana", "Mango"];

console.log("Initial:", fruits);

fruits.push("Orange");
fruits.unshift("Grapes");

console.log("After Adding:", fruits);

console.log("Includes Mango:", fruits.includes("Mango"));
console.log("Index of Banana:", fruits.indexOf("Banana"));
console.log(
  "Find starts with O:",
  fruits.find((f) => f.startsWith("O"))
);

fruits.pop();
fruits.shift();

console.log("After Removing:", fruits);

let tempArray = [1, 2, 3];
tempArray.length = 0;

console.log("Removed All:", tempArray);

let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = arr1.concat(arr2);

console.log("Combined:", combined);

let copied = [...combined];

console.log("Copied:", copied);

copied.forEach((value, index) => {
  console.log(`Index ${index} => ${value}`);
});

let names = ["John", "Alice", "David"];

console.log("Joined:", names.join(" - "));
console.log("Sorted:", names.sort());

let numbers = [1, 2, 3, 4, 5, 6];

let even = numbers.filter((n) => n % 2 === 0);
let squares = numbers.map((n) => n * n);
let total = numbers.reduce((sum, n) => sum + n, 0);

console.log("Even:", even);
console.log("Squares:", squares);
console.log("Total:", total);

let nested = [1, [2, 3], [4, [5]]];

console.log("Flatten:", nested.flat(2));

let duplicateNumbers = [1, 2, 2, 3, 4, 4];

let unique = [...new Set(duplicateNumbers)];

console.log("Unique:", unique);

let mapResult = numbers.map((n) => n * 2);

console.log("map returns new array:", mapResult);

numbers.forEach((n) => {
  console.log("forEach only iterates:", n);
});

let str = "HELLO";

let charArray = Array.from(str);

console.log("Array.from:", charArray);

console.log("\n========== OBJECTS ==========");

const student = {
  id: 1,
  name: "Ravi",
  age: 21,
};

console.log(student);

student.city = "Vijayawada";
student["course"] = "JavaScript";

console.log("Dynamic Object:", student);

for (let key in student) {
  console.log(`${key} => ${student[key]}`);
}

let clonedStudent = { ...student };

console.log("Cloned:", clonedStudent);

console.log("Random:", Math.random());
console.log("Round:", Math.round(4.7));
console.log("Max:", Math.max(10, 50, 20));

let now = new Date();

console.log("Current Date:", now);
console.log("Year:", now.getFullYear());

let user = { name: "Temp User" };
user = null;

let language = "JavaScript";

console.log(`I am learning ${language}`);

let message = "javascript learning";

console.log(message.toUpperCase());
console.log(message.includes("learn"));
console.log(message.slice(0, 10));

console.log("\n========== DOM ==========");

const container = document.getElementById("container");

container.innerHTML = "<h2>DOM Example</h2>";
container.style.color = "blue";

const para = document.createElement("p");
para.textContent = "This paragraph is added dynamically.";

container.appendChild(para);

const newPara = document.createElement("p");
newPara.textContent = "This paragraph replaced old paragraph.";

container.replaceChild(newPara, para);

setTimeout(() => {
  newPara.remove();
}, 3000);

console.log(container.parentElement);
console.log(container.children);

const button = document.createElement("button");
button.textContent = "Click Me";

container.appendChild(button);

button.addEventListener("click", () => {
  console.log("Button Clicked");
});

container.addEventListener("click", () => {
  console.log("Container Clicked (Bubbling)");
});

container.addEventListener(
  "click",
  () => {
    console.log("Container Capturing");
  },
  true
);

const list = document.createElement("ul");

for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.textContent = `Item ${i}`;
  list.appendChild(li);
}

container.appendChild(list);

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});

window.addEventListener("resize", () => {
  console.log("Resize Event");
});

function throttle(fn, delay) {
  let last = 0;

  return function () {
    let now = Date.now();

    if (now - last >= delay) {
      fn();
      last = now;
    }
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Throttled Scroll");
  }, 1000)
);

function debounce(fn, delay) {
  let timeout;

  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn();
    }, delay);
  };
}

window.addEventListener(
  "keyup",
  debounce(() => {
    console.log("Debounced Keyup");
  }, 1000)
);

console.log("\n========== ASYNCHRONOUS JAVASCRIPT ==========");

function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

greet("Ravi", () => {
  console.log("Callback Executed");
});

const promiseExample = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

promiseExample
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

async function fetchData() {
  return "Data Received";
}

async function displayData() {
  const data = await fetchData();
  console.log(data);
}

displayData();

console.log("\n========== ITERATORS & GENERATORS ==========");

const iteratorArray = [10, 20, 30];

const iterator = iteratorArray[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunction();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log("\n========== BROWSER APIs ==========");

const timeoutId = setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Interval Count:", count);

  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);