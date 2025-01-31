//Any
let price = 40;
let item = "string";
let inStore = true;
let value;
value = 10;
value = "string";

//Arrays
let values: number[] = [10, 20, 30, 40];

//Tuples
let items: [string, number, boolean] = ["String", 3, true];

items[1].toString; //code completion

// Enums
enum role {
  admin = 1,
  read = 2,
  backup = 3,
}

const user = {
  firstName: "Matheus",
  age: 19,
  role: 1,
};

console.log(user);

//Function Return

function add(nums1: number, nums2: number): number {
  return nums1 + nums2;
}

//function void

function results(price: number) {
  console.log("The result is" + price);
}

console.log(results(add(6, 3)));

//Objetos
//Se evita tipar dessa forma
const users: {
  firstName: string;
  age: number;
} = {
  firstName: "Matheus",
  age: 19,
};

console.log((user.firstName = "Matheus Campos"));

//Unknown - Desconhecido
let itemInput: unknown;
let itemName: string;

itemInput = 10;
itemInput = "Apple";

if (itemInput === "string") {
  itemName = itemInput;
}

//Never
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

//generateError("The apllication crashed", 500)
console.log(generateError("The apllication crashed", 500))