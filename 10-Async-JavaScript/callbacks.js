// Callback Example

function fetchData(callback) {

    console.log("Fetching data...");

    setTimeout(() => {
        callback("Data received successfully");
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);