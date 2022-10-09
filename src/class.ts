// export class User {
//     constructor(public name: string, public age: number) {
//     };
// }

// let user = new User("Taufik Agung Santoso", 24);
// console.log(user)

export class User {
  name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

// Public = bisa diakses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan class turunanya
// private = hanya bisa di akses dari class itu sendiri

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";

  static getRoleName = "Admintes";

  static getNameRole() {
    return "Hello";
  }

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return { read: this.read, write: this.write };
  }

  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email Salah";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}
 
let admin = new Admin("081", "Taufik Agung Santoso", 24);
admin.getName();
admin.getRole();
admin.setName("Fik");
admin.phone;
admin.email = "taufik@gmail.com";
console.log(admin.email);

console.log(Admin.getRoleName)
console.log(Admin.getNameRole())
