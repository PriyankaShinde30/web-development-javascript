const obj1 = {
    name: "Priyanka",
    address: { 
        city: "Mumbai",
        pincode: 400070
    }
}

const obj2 = {...obj1};

obj2.name = "Sneha";
obj2.address.city = "Pune";
obj2.address.pincode = 40025;

console.log(obj1);
console.log(obj2);