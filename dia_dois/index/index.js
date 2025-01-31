//Any
var price = 40;
var item = "string";
var inStore = true;
var value;
value = 10;
value = "string";
//Arrays
var values = [10, 20, 30, 40];
//Tuples
var items = ["String", 3, true];
items[1].toString; //code completion
// Enums
var role;
(function (role) {
    role[role["admin"] = 1] = "admin";
    role[role["read"] = 2] = "read";
    role[role["backup"] = 3] = "backup";
})(role || (role = {}));
var user = {
    firstName: "Matheus",
    age: 19,
    role: 1,
};
console.log(user);
//Function Return
function add(nums1, nums2) {
    return nums1 + nums2;
}
//function void
function results(price) {
    console.log("The result is" + price);
}
console.log(results(add(6, 3)));
//Objetos
//Se evita tipar dessa forma
var users = {
    firstName: "Matheus",
    age: 19,
};
console.log((user.firstName = "Matheus Campos"));
//Unknown - Desconhecido
var itemInput;
var itemName;
itemInput = 10;
itemInput = "Apple";
if (itemInput === "string") {
    itemName = itemInput;
}
//Never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//generateError("The apllication crashed", 500)
console.log(generateError("The apllication crashed", 500));
