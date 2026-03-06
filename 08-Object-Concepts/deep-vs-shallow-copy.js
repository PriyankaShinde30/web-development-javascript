const originalObject = {
    name: "Priyanka",
    age: 22,
    address: {
        city: "Mumbai",
        zip: 400001
    }
};

console.log("Original Object:", originalObject);

// 1 structuredClone()
const clone1 = structuredClone(originalObject);

clone1.address.city = "Pune";

console.log("\nstructuredClone()");
console.log("Original:", originalObject.address.city); // Mumbai
console.log("Clone:", clone1.address.city); // Pune

// 2 JSON.parse(JSON.stringify())
const clone2 = JSON.parse(JSON.stringify(originalObject));

clone2.address.city = "Delhi";

console.log("\nJSON.parse(JSON.stringify())");
console.log("Original:", originalObject.address.city); // Mumbai
console.log("Clone:", clone2.address.city); // Delhi

// 3 Recursive Deep Copy Function
function deepClone(obj) {

    // If value is not an object, return it directly
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Create new object or array
    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepClone(obj[key]);
    }

    return copy;
}

const clone3 = deepClone(originalObject);

clone3.address.city = "Bangalore";

console.log("\nRecursive Deep Copy");
console.log("Original:", originalObject.address.city); // Mumbai
console.log("Clone:", clone3.address.city); // Bangalore

// 4 Lodash _.cloneDeep()
// Requires lodash library
// npm install lodash

/*
const _ = require("lodash");

const clone4 = _.cloneDeep(originalObject);

clone4.address.city = "Hyderabad";

console.log("\nLodash cloneDeep()");
console.log("Original:", originalObject.address.city);
console.log("Clone:", clone4.address.city);
*/

// 5️⃣ rfdc (Really Fast Deep Clone)
// Lightweight library for deep cloning
// npm install rfdc

/*
const rfdc = require("rfdc")();

const clone5 = rfdc(originalObject);

clone5.address.city = "Chennai";

console.log("\nrfdc Deep Clone");
console.log("Original:", originalObject.address.city);
console.log("Clone:", clone5.address.city);
*/


console.log("\nDeep copy demonstrations completed.");