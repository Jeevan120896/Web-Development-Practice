// Select button
const button = document.getElementById("btn");

// Click Event
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// Mouse Over Event
button.addEventListener("mouseover", () => {
    console.log("Mouse is over the button");
});

// Double Click Event
button.addEventListener("dblclick", () => {
    console.log("Button double-clicked");
});