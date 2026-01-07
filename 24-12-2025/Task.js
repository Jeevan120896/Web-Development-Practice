
if (localStorage.getItem("token")) {
    document.getElementById("text").innerText = "Hello User";
} 
else 
    {
    document.getElementById("text").innerText = "Please Login";
}

function login() {
    localStorage.setItem("token", "Auth123");
    document.getElementById("text").innerText = "Hello User";
}

function logout() {
    localStorage.removeItem("token");
    document.getElementById("text").innerText = "Please Login";
}

//Example
try {
  let x = y; 
} catch (err) {
  console.log("Error happened!");
}
