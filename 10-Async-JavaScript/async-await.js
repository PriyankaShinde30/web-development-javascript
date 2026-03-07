// Async Await Example

function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);

    });
}

async function loadData() {

    console.log("Loading data...");

    const result = await fetchData();

    console.log(result);
}

loadData();