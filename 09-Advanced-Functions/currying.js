function add(a) {
    return function(b) {
        return a + b;
    }
}

const addTwo = add(3);
console.log(addTwo(5));

//currying with arrow functions 
const addition = a => b => a + b;
console.log(addition(5)(3));

