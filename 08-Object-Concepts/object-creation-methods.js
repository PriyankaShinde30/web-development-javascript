const user1 = {
    name : "Priyanka",
    age : 21
}

const user2 = new Object();
user2.name = "Sneha";
user2.name = 22;

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const user3 = new Person("Priya", 23);

console.log(user1);
console.log(user2);
console.log(user3);