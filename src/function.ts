// tipe data pada balikan function

function getName(): string {
    return "Hello my name is taufik agung santoso"
}
console.log(getName())

const getAge = () : number => {
    return 1234
}

console.log(getAge())

const printName = () : void => {
    console.log("testing")
}

printName()

const multiply = (val1: number, val2: number): number => val1 * val2

console.log(multiply(2.6, 2))

// function as type
type Tambah = (val1: number, val2: number) => number
const Add: Tambah = (val1: number, val2: number): number => val1 + val2

console.log(Add(4,5))


// default parameters

const fullName = (firstName: string, lastName: string = "Santoso"): string => {
    return firstName + " " + lastName;
}

console.log(fullName("Taufik"))

// optional parameters
const getUmur = (val1: string, val2?: string): string => {
    return val1 + val2;
}

console.log(getUmur('A'))