"use strict";
//Any
let price = 40;
let item = "string";
let inStore = true;
let value;
value = 10;
value = "string";
//Arrays
let values = [10, 20, 30, 40];
//Tuples
let items = ["String", 3, true];
items[1].toString; //code completion
// Enums
var role;
(function (role) {
    role[role["admin"] = 1] = "admin";
    role[role["read"] = 2] = "read";
    role[role["backup"] = 3] = "backup";
})(role || (role = {}));
const user = {
    firstName: "Matheus",
    age: 19,
    role: 1
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
