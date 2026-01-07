// 1. Creating DOM Elements
let newElement = document.createElement('p');
newElement.innerText = "Hello! I was created with JavaScript.";
console.log(newElement);

// Append at the end of body
document.body.appendChild(newElement);

// Prepend at the top of body
let newE1 = document.createElement('h3');
newE1.innerText = "Welcome! I was created with JavaScript.";
console.log(newE1);
document.body.prepend(newE1);

// Insert BEFORE the <h1>
let beforeParagraph = document.createElement('p');
beforeParagraph.innerText = "Hello! I was inserted BEFORE the title.";

/// Reference element
const title = document.getElementById('name');
title.parentNode.insertBefore(beforeParagraph, title);

// Insert AFTER the <h1>
let afterParagraph = document.createElement('p');
afterParagraph.innerText = "Hello! I was inserted AFTER the title.";
title.parentNode.insertBefore(afterParagraph, title.nextSibling);


// Select the title element
const title1 = document.getElementById('title');

// Previous sibling node (can be text node)
console.log('previousSibling:', title1.previousSibling);

// // Previous element sibling (skips text nodes)
// console.log('previousElementSibling:', title1.previousElementSibling);

// Next sibling node (can be text node)
console.log('nextSibling:', title1.nextSibling);

// // Next element sibling (skips text nodes)
// console.log('nextElementSibling:', title1.nextElementSibling);

// Access all element children of parent
const parent = title1.parentNode;
const children = parent.children;

console.log('All siblings (children of parent):');
for (let i = 0; i < children.length; i++) {
  console.log(children[i]);
}

// ===== Using onclick =====
let btnOnclick = document.getElementById('btnOnclick');
btnOnclick.onclick = function() {
  alert('Clicked using onclick!');
};

// ===== Using addEventListener =====
let btnAddEvent = document.getElementById('btnAddEvent');
btnAddEvent.addEventListener('click', function() {
  alert('Clicked using addEventListener!');
});

// Multiple listeners example
btnAddEvent.addEventListener('click', function() {
  console.log('Another listener fired!');
});
