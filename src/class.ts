export class User {
    constructor(public name: string, public age: number) {
    };
}

let user = new User("Taufik Agung Santoso", 24);
console.log(user)