//Example Promise
//===============
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise 1');
    },2000);
});

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('Promise 2');
    },3000);
});

//promise.all
Promise.all([promise1, promise2])
.then(values=> console.log(values))
.catch(error=> console.log(error))

//promise.any
Promise.any([promise1, promise2])
.then(values=> console.log(values))
.catch(error=> console.log(error))

//promise.race
Promise.race([promise1, promise2])
.then(values=> console.log(values))
.catch(error=> console.log(error))

//promise.allSettled
Promise.allSettled([promise1, promise2])
 .then(values=> console.log(values))
 .catch(error=> console.log(error))

//Destructuring array
const num = [1, 2, 3, 7, 9];
const [A, B, C, D, E] = num;
console.log(A, B, C, D, E);


//Nested Array Destructuring
const arr =[1, 2, 3, [4, 5], [6], 7];
const [a, b, c, [d, e], [f], g]=arr;
console.log(a, b, c, d, e, f, g);


//Destructuring Object
const Person={
    name: "Jeevan",
    age: 29,
    city:"Vijayawada"

}
const {name, age, city}= Person;
console.log(name);
console.log(age);
console.log(city);


//Destructuring Nested Object
const user={
    name1: "Gowtham",
    age1: 27,
    address:{
        city1:"Nellore",
        country: "India"
    }

}
const {
    name1, 
    age1, 
    address: {city1, country}
} = user;

console.log(name);
console.log(age1);
console.log(city1);
console.log(country);


//Iterator
let number1 = [10, 20, 30, 40];
let k = number1[Symbol.iterator]()
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());

//Generator
function* str() {
  yield "Hello";
  yield "Welcome";
  yield "Done";
}

const gen = str();

console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 


let a1 =document.getElementById('button')

// Normal Event: Runs everytime the event occurs, without any delay or restrictions
let count=0
 
a1.addEventListener('click',()=>{
    count++
    console.log("Count value",count)
})
 
 // Throtting: 
 
 let b1=0;
let last=0;
a1.addEventListener('click',()=>{
    let current =new Date()
    if(current-last>2000){
    b1++
   last=current}
   console.log('throtting',b)
})
 
 
// Debouncing:

let c1=0
let set
a1.addEventListener('click',()=>{
    clearTimeout(set)
     set =setTimeout(()=>{
        c1++
        console.log('setTimeout',c)
    },3000)
})
 

