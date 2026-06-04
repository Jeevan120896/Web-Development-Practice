let a =document.getElementById('button')

// Normal Event: Runs everytime the event occurs, without any delay or restrictions
let count=0
 
a.addEventListener('click',()=>{
    count++
    console.log("Count value",count)
})
 
 
 // Throtting: 
 
 let b=0;
let last=0;
a.addEventListener('click',()=>{
    let current =new Date()
    if(current-last>2000){
    b++
   last=current}
   console.log('throtting',b)
})
 
 
// Debouncing:

let c=0
let set
a.addEventListener('click',()=>{
    clearTimeout(set)
     set =setTimeout(()=>{
        c++
        console.log('setTimeout',c)
    },3000)
})
 
 
// callback function
 
function parentr(g){
console.log(g)
}
function child(a,b,x){
 
console.log('child')
x(a+b)
}
child(10,20,parentr)


//Promise
//A Promise is used to handle asynchronous operations
//Success → resolved
//Failure → rejected

let promise = new Promise((resolve, reject) => {
  resolve("Task completed!");
});

promise.then(message => {
  console.log(message); 
});


//Revision of Assessment
//1
function Palindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}
console.log(Palindrome("hello"));    // false
console.log(Palindrome("racecar"));  // true

//2
function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let ch of str) {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      count++;
    }
  }
  return count;
}

console.log(countVowels("JavaScript")); // 3
console.log(countVowels("HELLO"));      // 2

//4
function evaluateExpression(a, b, c) {
  return (a + b) > c && (b - c) < a;
}
console.log(evaluateExpression(5, 3, 6));  // true
console.log(evaluateExpression(2, 1, 5));  // false

//5
function max(a, b, c) {
  return (a > b) ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(max(5, 10, 8)); // 10

//6
function Grade(score, attendance) {
  if (score > 90 && attendance > 75) {
    return "A+";
  } 
  else if (score > 75 && attendance > 60) {
    return "B";
  }
   else {
    return "C";
  }
}
console.log(Grade(95, 80)); // A+
console.log(Grade(80, 65)); // B
console.log(Grade(70, 50)); // C

//7
function season(month) {
  switch(month) {
    case 12:
    case 1:
    case 2:
      return "winter";
    case 3:
    case 4:
    case 5:
      return "spring";
    case 6:
    case 7:
    case 8:
      return "summer";
    case 9:
    case 10:
    case 11:
      return "Autumn";
    default:
      return "Invalid month";
  }
}
console.log(season(1));  // winter
console.log(season(4));  // spring
console.log(season(7));  // summer
console.log(season(10)); // Autumn
console.log(season(13)); // Invalid month

//9
function multiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += (i * j) + " ";
    }
    console.log(row.trim());
  }
}
multiplicationTable(3);


//10

let num;

do {
  num = Math.floor(Math.random() * 10) + 1;
  console.log(num);
} while (num !== 7);

//11
const students = { Alice: 85, Bob: 92, Carol: 78 };

for (let name in students) {
  console.log(name, students[name]);
}
for (let score of Object.values(students)) {
  console.log(score);
}


//12
function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5)); // 15

//13
function sum(a) {
  return function(b) {
    return a + b;
  }
}
console.log(sum(5)(10)); // 15

//14
function factorial(n) {
  if (n <= 1) return 1;       
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120



