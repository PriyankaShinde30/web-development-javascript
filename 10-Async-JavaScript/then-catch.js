// then and catch Example

const promise = new Promise((resolve, reject) => {

    let success = false;

    setTimeout(() => {

        if (success) {
            resolve("Operation successful");
        } else {
            reject("Something went wrong");
        }

    }, 2000);
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });