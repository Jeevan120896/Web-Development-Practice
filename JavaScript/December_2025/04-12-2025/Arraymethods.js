//for..of loop
//Used to iterate over values in an array (or any iterable).
let arr = [10, 20, 30, 40, 50];
for(let value of arr){
    console.log(value);
}

//for..in loop
//Used to iterate over indexes (keys) of an array or object.
let nums = [20, 40, 60, 80, 90];
for(let value in nums){
    console.log(value);
}

//filter()
let array = [10, 15, 20, 16, 27, 32];
console.log(array.filter(x => x% 2===0));


for (Z of array){
    if(Z%2===0){
        console.log(Z)
    }
}


//sort()
let nums1 = [12, 10, 5, 2, 0, 7, 18, 26];
console.log(nums1.sort((a,b) => a-b));
console.log(nums1.sort())


//reverse()
let arr2 = [12, 10, 5, 2, 0, 7, 18];
console.log(arr2.reverse());


//Join()
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.join(", "));


//some()
let nums2 = [5, 8, 12, 3];
console.log(nums2.some(num => num > 10));//true

let num = [1, 3, 5, 7];
console.log(num.some(n => n % 2 === 0));//false


//every()
let nums3 = [5, 8, 12, 3];
console.log(nums3.every(num => num > 0));//true

let arr3 = [5, 8, 12, 3];
console.log(arr3.some(num => num > 13));//false


//Removing duplicates
var n= [1, 2, 2, 3, 4, 4, 5];
console.log(...new Set(n));

//without using sort() 
let arr4 = [5, 3, 1, 4, 9];
for(let i=0; i<arr4.length; i++){

    for(let j=i+1; j<arr4.length; j++){
if(arr4[i]>arr4[j]){
    [arr4[i],arr4[j]]=[arr4[j],arr4[i]];
}
}
}
console.log(arr4)

//Example
let arr6 = [9, 5, 4, 3, 1];
for (let i = 0; i < arr6.length; i++) {
    for (let j = i + 1; j < arr6.length; j++) {
        if (arr6[i] > arr6[j]) {
            let temp = arr6[i];
            arr6[i] = arr6[j];
            arr6[j] = temp;
        }
    }
}

console.log(arr6);

//Reduce()
//syntax
// array.reduce((accumulator, currentValue) => {
//     return newAccumulator;
// }, initialValue);

let number = [1, 2, 3, 4];

let sum = number.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//Map()
let numbers = [1, 2, 3, 4];

console.log() = numbers.map(n => n * 2);

console.log(doubled);

