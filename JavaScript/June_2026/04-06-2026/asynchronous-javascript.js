// Callback Example
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched using Callback");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

// Promise Example
const promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched using Promise");
    }, 2000);
});

promiseData.then((data) => console.log(data));

// Async/Await Example
async function getData() {
    const result = await promiseData;
    console.log(result);
}

getData();