// Microtask vs Callback Queue

console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise resolved");
});

console.log("End");