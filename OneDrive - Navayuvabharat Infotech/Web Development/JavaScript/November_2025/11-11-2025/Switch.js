//Switch Case Statement

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}
console.log(dayName); // Tuesday


//For loop break Statement
for (i = 0; i < 5; i++) {
  console.log(i);
  if (i == 3) {
    break;
  }
}

//While loop break statement
i = 0;
while(i < 5)
    {
    i++;
    console.log(i);
if (i == 3){
break;
}
}

//do while break 

i = 0;

do {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
} while (i < 5);

//Continue for loop statement

for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

//Continue while loop statement
 i = 0;
while (i < 6) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

//Comma Operator
let result = (10, 10 + 20);
console.log(result);


let x = 25;
let y = (x++, x + 1);

console.log(x, y);

//Set
let numbers = new Set();
numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(20);//Duplicate value

console.log(numbers);

console.log(numbers.has(10));
console.log(numbers.has(30));
console.log(numbers.has(50));

numbers.delete(10);
console.log(numbers);

console.log(numbers.size);

//Map
let user = new Map();

user.set("name", "Jeevan");
user.set("Age", "28");
user.set("City", "Vijayawada");

console.log(user);

console.log(user.get("name"));
console.log(user.has("City"));
user.delete("Age");

console.log(user.size);

user.clear();
console.log(user);

// WeakMap
let weakMap = new WeakMap();
let obj = { id: 1 };
weakMap.set(obj, "data");
console.log(weakMap.get(obj)); 


// WeakSet
let weakSet = new WeakSet();
let obj1= { name: "John" };
weakSet.add(obj1);
console.log(weakSet.has(obj1)); 





