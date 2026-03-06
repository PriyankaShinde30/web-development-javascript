function changeValue(num) { 
    num += 10;
    console.log("Inside the Function: "+num);
}
let a = 10;
changeValue(a);
console.log("Outside the Function: "+a);

function changeObjValue(obj, nName) { 
    obj.name = nName;
}

let user = {name: "priyanka"};
changeObjValue(user, "Alex");

console.log("Object After Changes: ", user);