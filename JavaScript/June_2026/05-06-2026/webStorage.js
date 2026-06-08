export function saveUser() {

    const user = {
        name: "Kiran",
        role: "Developer"
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    console.log("User Saved");
}

export function getUser() {

    const data = localStorage.getItem("user");

    const user = JSON.parse(data);

    console.log("Stored User:", user);
}