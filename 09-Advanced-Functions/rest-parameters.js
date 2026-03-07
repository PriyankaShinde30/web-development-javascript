function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}


let arr = (2, 3, 5, 10);
console.log(sum(arr));
