export function divideNumbers(a, b) {

    try {

        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        console.log("Result:", a / b);

    } catch (error) {

        console.error("Error:", error.message);

    } finally {

        console.log("Division operation completed");

    }
}