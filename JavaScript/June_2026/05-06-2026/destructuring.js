export function showDestructuring() {

    const student = {
        name: "Ravi",
        age: 22,
        city: "Hyderabad"
    };

    const { name, age } = student;

    console.log("Name:", name);
    console.log("Age:", age);

    const colors = ["Red", "Green", "Blue"];

    const [first, second] = colors;

    console.log("First Color:", first);
    console.log("Second Color:", second);
}