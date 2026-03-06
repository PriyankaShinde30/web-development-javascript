function flattenObj(obj, parentKey="", result={}){
    for(let key in obj) {
        const newKey = parentKey ? parentKey + "." + key : key;

        if(typeof obj[key] === "object" && obj[key] !== null) {
            flattenObj(obj[key], newKey, result);
        }
        else { 
            result[newKey] = obj[key];
        }
    }
    return result;
}

const user = {
    name: "Priyanka",
    address: {
        city: "Mumbai",
        pincode: "400070"
    }
};

console.log(user);
console.log(flattenObj(user));