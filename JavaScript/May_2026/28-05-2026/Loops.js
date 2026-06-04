console.log("===== loops.js =====");

// FOR LOOP

for (let i = 1; i <= 3; i++) {
  console.log("For:", i);
}


// WHILE LOOP

let count = 1;

while (count <= 3) {
  console.log("While:", count);
  count++;
}


// DO-WHILE

let num = 1;

do {
  console.log("Do While:", num);
  num++;
} while (num <= 3);


// break

for (let j = 1; j <= 5; j++) {

  if (j === 3) {
    break;
  }

  console.log("Break:", j);
}


// continue

for (let k = 1; k <= 5; k++) {

  if (k === 3) {
    continue;
  }

  console.log("Continue:", k);
}


// for-in

let studentData = {
  name: "Ajay",
  age: 20
};

for (let key in studentData) {
  console.log(key, studentData[key]);
}


// for-of

let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
  console.log(color);
}