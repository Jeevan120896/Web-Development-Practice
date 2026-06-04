// ===================== ES6 MODULE =====================

// named export
export const PI = 3.14;

// default function
export default function mainApp() {

  console.log("App started");

  // ===================== BUTTON EVENT =====================
  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    alert("Button clicked!");
  });

  // ===================== IIFE =====================
  (function () {
    console.log("IIFE executed immediately");
  })();

  // ===================== HIGHER ORDER FUNCTION =====================
  const greet = (name) => `Hello, ${name}`;

  function higherOrder(fn, value) {
    return fn(value);
  }

  console.log(higherOrder(greet, "World"));

  // ===================== CURRYING =====================
  const multiply = (a) => (b) => a * b;
  console.log("Multiply:", multiply(2)(3));

  // ===================== PURE FUNCTION =====================
  const pureAdd = (a, b) => a + b;
  console.log("Pure:", pureAdd(2, 3));

  // ===================== IMPURE FUNCTION =====================
  let counter = 0;
  const impureAdd = (x) => counter += x;
  console.log("Impure:", impureAdd(5));

  // ===================== RECURSION =====================
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log("Factorial:", factorial(5));

  // ===================== DESTRUCTURING =====================
  const user = { name: "John", age: 25 };
  const { name, age } = user;

  const arr = [10, 20, 30];
  const [a, b, c] = arr;

  console.log(name, age, a, b, c);

  // ===================== MAP / SET =====================
  const map = new Map();
  map.set("key", "value");

  const set = new Set([1, 2, 2, 3]);

  console.log(map, set);

  // ===================== LOCAL STORAGE =====================
  localStorage.setItem("username", "John");
  console.log(localStorage.getItem("username"));

  // ===================== ERROR HANDLING =====================
  try {
    console.log(notDefinedVar);
  } catch (error) {
    console.log("Error caught:", error.message);
  }

  // ===================== JSON =====================
  const json = JSON.stringify(user);
  console.log(json);

  const parsed = JSON.parse(json);
  console.log(parsed);

  // ===================== BROWSER INFO =====================
  console.log("URL:", window.location.href);
  console.log("Browser:", navigator.userAgent);
  console.log("Screen width:", screen.width);

  // ===================== DOM CHANGE =====================
  document.body.style.backgroundColor = "#f0f0f0";
}

mainApp();