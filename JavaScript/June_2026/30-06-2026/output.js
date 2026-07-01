// Output Methods

function showOutput() {

    document.getElementById("demo").innerHTML =
        "<h2>Welcome to JavaScript</h2>";

    console.log("Console Output");

    alert("Welcome Student");

    let name = prompt("Enter Your Name");

    if (name !== null && name.trim() !== "") {

        console.log("Name :", name);

    }
    else {

        console.log("No name entered.");

    }

}

window.showOutput = showOutput;