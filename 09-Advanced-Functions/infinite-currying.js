function subtract(a) {
    return function(b) {
        if(b !== undefined) {
            return subtract(a - b);
        }
        return a;
    };
}

console.log(subtract(10)(3)(2)());

const addition = a => b => a - b;
console.log(subtract(4)(1)(1)());