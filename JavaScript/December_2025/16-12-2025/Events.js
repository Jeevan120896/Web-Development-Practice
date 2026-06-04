
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
