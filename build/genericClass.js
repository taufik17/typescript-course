"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let numbers = new List(1, 2, 3);
numbers.add(4);
numbers.addMultiple(1, 2, 3);
console.log(numbers.getAll());
let random = new List(1, "a", "b", "c", 100, true);
random.add(4);
random.addMultiple(1, false, 3);
console.log(random.getAll());
