// Selecting elements
const container = document.getElementById("container");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const input = document.getElementById("inputBox");

// Add new element
addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    const newItem = document.createElement("li");
    newItem.textContent = input.value;
    newItem.classList.add("item");

    // Add edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");

    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit item:", newItem.firstChild.textContent);
        if (newText) {
            newItem.firstChild.textContent = newText;
        }
    });

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", () => {
        container.removeChild(newItem);
    });

    newItem.appendChild(editBtn);
    newItem.appendChild(deleteBtn);

    container.appendChild(newItem);

    input.value = "";
});

// Remove last element
removeBtn.addEventListener("click", () => {
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
});


// =======================
// DOM Traversal Examples
// =======================

// Parent Node
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
        console.log("Parent:", e.target.parentNode);
    }
});

// Child Nodes
console.log("All children:", container.children);

// First & Last Child
console.log("First item:", container.firstElementChild);
console.log("Last item:", container.lastElementChild);

// Siblings (Event Delegation Example)
container.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log("Clicked:", e.target);

        console.log("Next sibling:", e.target.nextElementSibling);
        console.log("Previous sibling:", e.target.previousElementSibling);
    }
});

// =======================
// Styling dynamically
// =======================
const styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");

    items.forEach((item, index) => {
        item.style.backgroundColor = index % 2 === 0 ? "#d1f7c4" : "#f7d1d1";
        item.style.padding = "10px";
        item.style.margin = "5px";
    });
});