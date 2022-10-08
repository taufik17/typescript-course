"use strict";
// Enum 
// Numeri enums
// enum Month {
//     JAN = 1,
//     FEB = 0,
//     MAR,
//     APR,
//     MAY,
// }
// console.log(Month.MAR)
// String Enums
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MAY"] = "May";
})(Month || (Month = {}));
console.log(Month.MAR);
