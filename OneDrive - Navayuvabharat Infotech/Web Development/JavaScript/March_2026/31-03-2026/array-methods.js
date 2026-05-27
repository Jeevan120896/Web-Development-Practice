// array-methods.js

const arr = [1, 2, 3, 4, 5];

// 1. push() - adds element to end
arr.push(6);
console.log("push:", arr); // [1,2,3,4,5,6]

// 2. pop() - removes last element
arr.pop();
console.log("pop:", arr); // [1,2,3,4,5]

// 3. unshift() - adds element to beginning
arr.unshift(0);
console.log("unshift:", arr); // [0,1,2,3,4,5]

// 4. shift() - removes first element
arr.shift();
console.log("shift:", arr); // [1,2,3,4,5]

// 5. forEach() - loops through array
arr.forEach(num => {
  console.log("forEach:", num);
});

// 6. map() - returns new array
const doubled = arr.map(num => num * 2);
console.log("map:", doubled); // [2,4,6,8,10]

// 7. filter() - filters values
const even = arr.filter(num => num % 2 === 0);
console.log("filter:", even); // [2,4]

// 8. reduce() - reduces to single value
const sum = arr.reduce((total, num) => total + num, 0);
console.log("reduce:", sum); // 15

// 9. indexOf() - first index of element
console.log("indexOf:", arr.indexOf(3)); // 2

// 10. lastIndexOf() - last index of element
const arr2 = [1, 2, 3, 2, 1];
console.log("lastIndexOf:", arr2.lastIndexOf(2)); // 3

// 11. concat() - merges arrays
const newArr = arr.concat([6, 7]);
console.log("concat:", newArr); // [1,2,3,4,5,6,7]

// 12. includes() - checks existence
console.log("includes:", arr.includes(4)); // true