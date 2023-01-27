// In Javascript, we can delcare a vairable in 3 way.
// 1. by using var 
// 2. by using let 
// 3. by using const


// const myName = "John";
// console.log(myName);
// myName = "Alex" 

// const myName = [];
// myName = 5; 
// console.log(myName);
// myName.push("John");
// console.log(myName);
// 
// const myName = 5;  

var myName = "john";
console.log(myName);
myName = "Alex";
console.log(myName);

var myName = "Taylor"
console.log(myName);

// function addTwoNumber(num1, num2){
//     var num = 5;
//     return num1 + num2;
// }

console.log(num);

{
    var num = 5;
}
console.log(num);

// String Interpolation
let firstName = "Shantanu";
let lastName = "shubham";

// let fullName = firstName + " " + lastName;

console.log(firstName);
console.log(firstName);
// console.log(fullName);

let fullName = `${firstName} ${lastName}`;

console.log(fullName);


// Default Prams

// let addTwoNumber = (num1,num2) => num1 + num2;

let addTwoNumber = (num1, num2 = 5) =>{
    console.log(num1);
    console.log(num1);
    return num1 + num2;
} 

console.log(addTwoNumber(1));

// rest and Spread operator 

let array  = [5, 10, 15, 20,25];
// Spread -> ...
// let newArray = [...array, 30, 35, 40];
let newArray = [100, 75, ...array];
console.log(newArray);

// Rest -> ...
// let testFunction = (...args) => {
//     console.log(args);
// };

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let maxOfTwoNumber = (...numbers) =>{
    let maximum  = Number.MIN_VALUE;
    for(let number of number){
        maximum =Math.max(maximum, number);
    }
    return maximum;
    // console.log(numbers);
};
//Math.max(num1, num2);

let maxOfThreeNumbers = (num1, num2, num3) => Math.max(num1, Math.max(num2, num3));


let object = {
    name: "john",
    age: 24,
    city: "New York",
    address:{
        city: "New York",
        state: "NY",
        country: "USA",
    },
};

let object2 = JSON.parse(JSON.stringify(object));
object2.address.city= "london";
console.log(object2);

