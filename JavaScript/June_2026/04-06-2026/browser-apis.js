// Local Storage API
localStorage.setItem("username", "John");

const user = localStorage.getItem("username");
console.log(user);

// Geolocation API
navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
        console.log(error.message);
    }
);

// Notification API
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

new Notification("Welcome!", {
    body: "Browser API Example"
});