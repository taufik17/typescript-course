function getData(value: any) {
    return value
}

console.log(getData("Taufik Agung Santoso"))
console.log(getData(123))

// generic
function myData<T>(value: T) {
    return value
}

console.log(myData("Taufik Agung Santoso").length)
console.log(myData(123))

// generic in arrow
const arrowFunc = <T>(value: T) => {
    return value
}

console.log(arrowFunc("Taufik Agung Santoso").length)
console.log(arrowFunc(123))