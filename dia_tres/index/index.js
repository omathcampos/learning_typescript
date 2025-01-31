"use strict";
const users = {
    firstName: "Math",
    age: 19
};
console.log(users);
//Union Type
function userInput(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinePrices = userInput(10, 20);
console.log(combinePrices);
const combineName = userInput("fruit ", "test");
console.log(combineName);
//Literal Type
let productPrice;
let productSize;
productPrice = 20;
productSize = "M";
const e1 = {
    firstName: "Matheus",
    age: 21,
    id: 1,
    role: "admin"
};
//Exercício 1
let pi = 3.14159;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
//Exercício 2
let pie;
pie = 'blueberry';
console.log(`I like to eat ${pie}-flavored pie.`);
//Exercício 3
let isDouglas;
isDouglas = true;
console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`);
//Exercício 4
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = 12345;
console.log(members);
//Exercício 4
const sequence = Array.from(Array(10).keys());
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays = [sequence, animals, stringsAndNumbers];
console.log(allMyArrays);
