// innerHTML
document.getElementById("innerHTMLDemo").innerHTML =
  "<b>innerHTML:</b> Hello <i>World</i>";

// textContent
document.getElementById("textContentDemo").textContent =
  "<b>textContent:</b> Tags are not rendered";

// innerText
document.getElementById("innerTextDemo").innerText =
  "innerText: Only visible text displayed";

// document.write()
document.write("<h3 style='color:blue'>document.write() Example</h3>");

// console.log()
console.log("console.log() Example");

// alert()
function showAlert(){
  alert("This is alert()");
}

// prompt()
function showPrompt(){

  let name = prompt("Enter your name:");

  alert("Welcome " + name);
}

// =========================
// WEB STORAGE
// =========================

// Local Storage
function saveLocal(){

  localStorage.setItem("username", "Sai");

  alert("Saved to Local Storage");
}

function getLocal(){

  let data = localStorage.getItem("username");

  document.getElementById("storageResult").innerHTML =
    "Local Storage Data: " + data;
}

// Session Storage
function saveSession(){

  sessionStorage.setItem("course", "JavaScript");

  alert("Saved to Session Storage");
}

function getSession(){

  let data = sessionStorage.getItem("course");

  document.getElementById("storageResult").innerHTML +=
    "<br>Session Storage Data: " + data;
}

// =========================
// BOM (Browser Object Model)
// =========================

function showBOM(){

  let result = "";

  // Window
  result += "Window Width: " + window.innerWidth + "<br>";

  // History
  result += "History Length: " + history.length + "<br>";

  // Navigator
  result += "Browser: " + navigator.userAgent + "<br>";

  // Screen
  result += "Screen Width: " + screen.width + "<br>";

  // Location
  result += "Current URL: " + location.href + "<br>";

  document.getElementById("bomResult").innerHTML = result;
}

// =========================
// COMMON METHODS
// =========================

function runMethods(){

  // parseInt
  let intNum = parseInt("100.55");

  // parseFloat
  let floatNum = parseFloat("100.55");

  // JSON.stringify
  let obj = {
    name:"Sai",
    age:22
  };

  let jsonString = JSON.stringify(obj);

  // JSON.parse
  let parsedObj = JSON.parse(jsonString);

  // toString
  let num = 500;
  let strNum = num.toString();

  // toFixed
  let price = 99.4567;
  let fixedPrice = price.toFixed(2);

  document.getElementById("methodResult").innerHTML =
    `
    parseInt: ${intNum} <br>
    parseFloat: ${floatNum} <br>
    JSON.stringify: ${jsonString} <br>
    JSON.parse: ${parsedObj.name} - ${parsedObj.age} <br>
    toString: ${strNum} <br>
    toFixed: ${fixedPrice}
    `;
}