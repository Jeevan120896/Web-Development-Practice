function runAll() {

    // ===== DOM METHODS =====

    // get element by id
    let title = document.getElementById("title");
    title.innerHTML = "DOM METHODS";

    // get element by class
    let para = document.getElementsByClassName("text")[0];
    para.style.color = "blue";

    // select using querySelector
    let q = document.querySelector(".text");
    q.style.fontSize = "20px";

    // create new element
    let newPara = document.createElement("p");
    newPara.innerHTML = "New paragraph added";

    // add to page
    document.body.appendChild(newPara);


    // ===== STRING METHODS =====

    let str = "Hello JavaScript";

    console.log(str); // original

    console.log(str.length); // length

    console.log(str.toUpperCase()); // uppercase

    console.log(str.toLowerCase()); // lowercase

    console.log(str.includes("Java")); // check word

    console.log(str.slice(0, 5)); // cut string

    console.log(str.replace("JavaScript", "World")); // replace


    // ===== MATH METHODS =====

    console.log(Math.random()); // random number

    console.log(Math.round(4.6)); // round

    console.log(Math.floor(4.9)); // down

    console.log(Math.ceil(4.1)); // up

    console.log(Math.pow(2, 3)); // power

    console.log(Math.sqrt(16)); // square root

    console.log(Math.max(10, 20, 30)); // biggest

    console.log(Math.min(10, 20, 30)); // smallest
}