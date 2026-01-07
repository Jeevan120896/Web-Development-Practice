//getElementById()
//Selects ONE element by its id

var Firstp = document.getElementById("Firstp");
console.log(Firstp);

//getElementsByClassName()
//Selects ALL elements with a class
// Returns a live HTMLCollection
//Use when you want many items

const el = document.getElementsByClassName('c');
console.log(el[0])
console.log(el[1])

//getElementsByTagName()
//Selects elements by tag name (p, div, li, etc.)
//Returns a live HTMLCollection

const items = document.getElementsByTagName("li");
console.log(items[0].textContent);
console.log(items[1].textContent);
console.log(items[2].textContent);

//querySelector()
const firstBox = document.querySelector(".box");
console.log(firstBox); 

//querySelectorAll()
const notes = document.querySelectorAll('.note');
console.log(notes);       // NodeList(3) [p.note, p.note, p.note]
console.log(notes[0].textContent); // "Note 1"





