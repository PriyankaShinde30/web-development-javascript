var x = 10; 
var x = 20; //var allows redeclaration 

console.log("Var x: ",x);

function varExample(){
    var y = 50;
    console.log("Inside function: ",y);
}

//console.log(y) //Error as y is not accessible outside the function

let a = 10;
//let a = 20; //Error as let doesn't allow redeclaration 

a = 200;
console.log("let a :",a); //let allows reassignment 
{ 
    let b = 3000;
    console.log("Inside block: ", b);
}

//console.log(b); //Error as b is not accessible outside the scope 

const c = 5; 
// c = 40; //reassignment is not allowed 

const obj1 = {name: "Priyanka", age : 21};
console.log(obj1);
obj1.name = "Priya"; // const object allows reassignment or updation of properties 
console.log(obj1);