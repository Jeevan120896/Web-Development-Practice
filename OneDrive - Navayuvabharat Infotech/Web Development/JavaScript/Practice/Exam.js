function findGrater(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(findGrater(10,30));

function checkDivisibility(number){
    if(number % 3 === 0 && number % 5 === 0){
        return `${number} is divisible by both 3 and 5.`;
    } else {

       return `${number} is NOT divisible by both 3 and 5.`;
    }
}
console.log(checkDivisibility(30));

//Fibonacci series
let n=7;
let a=0, b=1;
for(let i=0; i<n; i++){
    console.log(a);
    [a,b]=[b,a+b];
}

//factiorial
function fact(n){
    return n===0 ? 1 : n*fact(n-1);
}
console.log(fact(5));

//reverse string
// str="hello"
// function reverse(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverse(str));

str="Jeevan"
function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse(str));

//Even:Odd
let number=4
function CheckEvenOdd(number){
return n%2 ===0 ? "Even" : "Odd"
}
console.log(CheckEvenOdd(number));

function EvenOdd(a,b){
    return[
        a%2 ===0 ? "Even": "Odd",
        b%2 ===0 ? "Even": "Odd"
        ]

}
console.log(EvenOdd(4,7))

//Check Palindrome
str="Race Car"
function CheckPalindrome(str){
    return str===str.split("").reverse().join("");
}
console.log(CheckPalindrome(str))

//sum using rest parameters
let nums = [1, 2, 3, 4, 5];

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(...nums)); 

//factorial 
function factiorial(n){
    if (n===0)return 1;
    return n*factiorial(n-1);
}
console.log(factiorial(5));

//Duplicates
let arr=[1,2,2,3,3,4,6,6,7,8,9,9];
let duplicates = arr.filter((item, index)=> arr.indexOf(item)!==index);
console.log(duplicates);


//Remove duplicates
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); 
