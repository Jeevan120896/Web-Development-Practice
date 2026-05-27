// Event Bubbling (Bottom → Up)
document.getElementById('button').addEventListener('click', function(){
    console.log('Button clicked!');
});

document.getElementById('child1').addEventListener('click', function(){
    console.log('Child1 div clicked');
});

document.getElementById('parent1').addEventListener('click', function(){
    console.log('Parent1 div clicked');
});

// Event Capturing (Top → Down)
document.getElementById("parent2").addEventListener(
  "click",
  () => {
    console.log("Parent2 clicked (capturing)");
  },
  true
);

document.getElementById("child2").addEventListener(
  "click",
  () => {
    console.log("Child2 clicked");
  },
  true
);


// Add one event listener to the parent <ul>
document.getElementById("list").addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        console.log("You clicked on:", event.target.textContent);
    }
});


//Synchronous 
//Synchronous JavaScript executes code line by line, where each operation waits for the previous one to complete before moving to the next. This is also called blocking execution.

//Example
console.log("Start");
console.log("Process");
console.log("End");


function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);


//Asynchronous
//Asynchronous JavaScript allows tasks to run in the background without blocking the main thread. The program continues executing while waiting for long tasks to complete.
//Example

console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");
