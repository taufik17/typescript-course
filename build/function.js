"use strict";
// tipe data pada balikan function
function getName() {
    return "Hello my name is taufik agung santoso";
}
console.log(getName());
const getAge = () => {
    return 1234;
};
console.log(getAge());
const printName = () => {
    console.log("testing");
};
printName();
const multiply = (val1, val2) => val1 * val2;
console.log(multiply(2.6, 2));
const Add = (val1, val2) => val1 + val2;
console.log(Add(4, 5));
// default parameters
const fullName = (firstName, lastName = "Santoso") => {
    return firstName + " " + lastName;
};
console.log(fullName("Taufik"));
// optional parameters
const getUmur = (val1, val2) => {
    return val1 + val2;
};
console.log(getUmur('A'));
