let myName = "Sebastian";

const stateNum = 50;

let addition = 5 + 4;
//just some basic variables and a constant

function sayHello() {
    alert("Hello World!");
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);


let vegList = ["cucumber", "onion", "garlic", "cabbage", "horseradish"];
for(let i = 0; i < vegList.length; i++){
    console.log(vegList[i]);
}

let pet = {
    name: "Atos",
    breed: "Doberman"
};

console.log("My pet is named " + pet.name + " and he is a " + pet.breed);

let mike = {
    name: "Mike",
    age: 21
};

let macy = {
    name: "Macy",
    age: 19
};

let jane = {
    name: "Jane",
    age: 25
};

let alex = {
    name: "Alex",
    age: 20
};

let joe = {
    name: "joe",
    age: 22
};

let personArray = [mike, macy, jane, alex, joe];

for(let i = 0; i < personArray.length; i++){
    checkAge(personArray[i].name, personArray[i].age);
}


function getLength(word) {
    let i = 0;
    let count = 0;
    if (i < word.length-1) {
        count++
    }
    return count;
}

let len = getLength("Hello World");

if (len % 2 == 0) {
    console.log("The world is nice and even!");
}

else {
    console.log("The world is an odd place!");
}