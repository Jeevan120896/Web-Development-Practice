// Logical operators

//AND(&&)
console.log(10>5 && 8>3); //true (both true)
console.log(10>5 && 8<3); //false (one false)
console.log(2<1 && 4>3); // false (first one false)

//OR(||)
console.log(10>5 || 8<5); //first true
console.log(2<5 || 8>10); //true first

//NOT(!)
console.log(!(10>5)); //false
console.log(!(2>5)); //true

//Conditional Statement

let age=20;

if(age>=18){
    console.log("You are an adult.");
}

//if-else
age=15;

if(age>=18){
    console.log("You are an adult.");
}else{
        console.log("You are a minor.");
    }

    
//if-else if-else
    marks=75;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B");
}
else{
    console.log("Grade C");
}


//Template literals

name = "Jeevan";
age = 28;
let message = `Hello my name is ${name} and I am ${age} years old.`;
console.log(message);


let city ="Vijayawada";
console.log(`I live in ${city}.`);

//typeof
var a='Ram';
age= 28;
data=null;
s1=Symbol("id");
console.log(typeof a); //string
console.log(typeof age); //Number
console.log(typeof data); //object
console.log(typeof s1); //symbol


//for loop

for (i=1; i<=5; i++){
    console.log("Number:", i)
}

//while loop
i=1;
while(i<=5){
    console.log("Count:", i);
    i++;
}

//do while loop

i=1;
do{
    console.log("Value:", i);
    i++;
} while(i<=5);


//Array

fruit=["Apple", "Mango", "Pineapple", "Banana"];
console.log(fruit);