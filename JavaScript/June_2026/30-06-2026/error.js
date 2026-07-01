// Error Handling

try {

    let number = 10;

    number.toUpperCase();

}
catch (error) {

    console.log("Error Name :", error.name);
    console.log("Message :", error.message);

}
finally {

    console.log("Program Finished");

}