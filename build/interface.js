"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Nyala");
    }
    off() {
        console.log("Mati");
    }
}
class MacBook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("Nyala");
    }
    off() {
        console.log("Mati");
    }
}
let asus = new Asus('Asus', true);
console.log(asus.on());
console.log(asus.off());
let mc = new MacBook('MBP', true);
console.log(mc.on());
console.log(mc.off());
