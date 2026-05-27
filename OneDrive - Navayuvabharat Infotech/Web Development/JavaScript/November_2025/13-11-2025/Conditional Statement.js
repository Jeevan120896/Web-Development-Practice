//Conditional Statement

//if statement
age = 20;
if(age>=18){
    console.log("You are an Adult");
}

//if else statement
age=15;
if(age>=18){
    console.log("You are an Adult");
}else{
    console.log("You are a minor");
}
//if else if else
Marks = 75;
if(Marks>=90){
    console.log("Grade A")
}else if(Marks>=80){
    console.log("Grade B")
}else{
    console.log("Grade C")
}

Hours = 10;
if(Hours>=6 && Hours<12){
    console.log("Good Morning")
}else if(Hours>=12 && Hours<6){
    console.log("Good Afternoon")
}else{
    console.log("Good Evening")
}

//switch statement
let day = 4;
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
console.log(dayName); 


const option = 2;
switch(option){
    case 1:
        console.log("You Chose: View balance");
        break;
    case 2:
        console.log("You chose: Send money");
        break;
    case 3:
        console.log("You chose: Request payment");
        break;
        default:
        console.log("Invalid option");    

}

//Falsy Value

if(0){
    console.log("This is true");

}else{
    console.log("This is false");
}


//Truthy Value
if("Hello"){
    console.log("Truthy value!")

}else{
    console.log("Falsy value!")
}

console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean([]));

