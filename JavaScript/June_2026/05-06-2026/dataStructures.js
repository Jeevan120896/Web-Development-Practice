export function showDataStructures() {

    // ===== SET =====

    const skills = new Set();

    skills.add("HTML");
    skills.add("CSS");
    skills.add("JavaScript");
    skills.add("JavaScript"); // Duplicate

    console.log("Set Example:");
    console.log(skills);

    // ===== MAP =====

    const employees = new Map();

    employees.set(101, "Rahul");
    employees.set(102, "Priya");

    console.log("\nMap Example:");

    employees.forEach((name, id) => {
        console.log(`Employee ID: ${id}, Name: ${name}`);
    });

    // ===== WEAKSET =====

    const activeUsers = new WeakSet();

    const user1 = {
        name: "Rahul"
    };

    const user2 = {
        name: "Priya"
    };

    activeUsers.add(user1);
    activeUsers.add(user2);

    console.log("\nWeakSet Example:");

    console.log(
        "Is Rahul active?",
        activeUsers.has(user1)
    );

    console.log(
        "Is Priya active?",
        activeUsers.has(user2)
    );

    // ===== WEAKMAP =====

    const userSessions = new WeakMap();

    const customer1 = {
        name: "Kiran"
    };

    const customer2 = {
        name: "Anitha"
    };

    userSessions.set(customer1, {
        loginTime: "10:00 AM"
    });

    userSessions.set(customer2, {
        loginTime: "11:30 AM"
    });

    console.log("\nWeakMap Example:");

    console.log(
        "Kiran Session:",
        userSessions.get(customer1)
    );

    console.log(
        "Anitha Session:",
        userSessions.get(customer2)
    );
}
