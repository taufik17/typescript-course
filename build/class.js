"use strict";
// export class User {
//     constructor(public name: string, public age: number) {
//     };
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// let user = new User("Taufik Agung Santoso", 24);
// console.log(user)
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
// Public = bisa diakses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan class turunanya
// private = hanya bisa di akses dari class itu sendiri
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    static getNameRole() {
        return "Hello";
    }
    getRole() {
        return { read: this.read, write: this.write };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = "Email Salah";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admintes";
let admin = new Admin("081", "Taufik Agung Santoso", 24);
admin.getName();
admin.getRole();
admin.setName("Fik");
admin.phone;
admin.email = "taufik@gmail.com";
console.log(admin.email);
console.log(Admin.getRoleName);
console.log(Admin.getNameRole());
