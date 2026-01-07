let ab = Promise.reject("completed");
let ba = Promise.resolve("failed");

Promise.all([ab, ba])
.then(results=>{
    console.log("Done");
})
.catch(error =>{
console.log("Failed")
})

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

//Example promise.all
Promise.all([promise1, promise2])
.then(values=> console.log(values))
.catch(error=> console.log(error))

//Example promise.any
Promise.any([promise1, promise2])
.then(values=> console.log(values))
.catch(error=> console.log(error))

//Example promise.race
Promise.race([promise1, promise2])
.then(values=> console.log(values))
.catch(error=> console.log(error))

//Nested Array Destructuring

const arr =[1, 2, 3, [4, 5], [6], 7];
const [a, b, c, [d, e], [f], g]=arr;
console.log(a, b, c, d, e, f, g);
