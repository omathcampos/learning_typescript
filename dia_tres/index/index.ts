// Alias type - Ajuda a definir de forma global um tipo de objeto
type users = {
    firstName: string
    age: number
}

const users = {
    firstName: "Math",
    age: 19
}
console.log(users)

//Union Type

function userInput(input1: number | string, input2: number | String) {
    let result
    
    if(typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result

}
const combinePrices = userInput(10, 20)
console.log(combinePrices)

const combineName = userInput("fruit ", "test")
console.log(combineName)

//Literal Type
let productPrice: 10 | 20 | 30
let productSize: "S" | "M" | "L"
productPrice = 20
productSize = "M"

//Intersection

type userEnterprise = {
    firstName: string
    age: number}

    type jobRole = {
        id: number
        role: string
    }

    type employee = userEnterprise & jobRole

    const e1: employee = {
        firstName: "Matheus",
        age: 21,
        id: 1,
        role: "admin"
    }

//Exercício 1

let pi = 3.14159;
let tau = pi * 2;

console.log(`${tau} is ${pi} times two.`);

//Exercício 2

let pie: string
pie = 'blueberry'

console.log(`I like to eat ${pie}-flavored pie.`)

//Exercício 3

let isDouglas: boolean
isDouglas = true
console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)

//Exercício 4

const integer: number = 6;
const float: number = 6.66;
const hex: number = 0xf00d;
const binary: number = 0b1010011010;
const octal: number = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

const members: number[] = [
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


const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);