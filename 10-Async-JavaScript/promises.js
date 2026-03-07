// Promise Example

function fetchData() {

    return new Promise((resolve, reject) => {

        let success = true;

        setTimeout(() => {

            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data");
            }

        }, 2000);

    });
}

fetchData()
    .then(result => console.log(result))
    .catch(error => console.log(error));