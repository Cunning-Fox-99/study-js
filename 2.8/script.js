let a = 1, b = 1; // 2

let c = ++a; // 2
let d = b++; // 1

let e = 2;

let x = 1 + (e *= 2);  // 5

let a1 = "" + 1 + 0 // "10"
let a2 = "" - 1 + 0 // -1
let a3 = true + false // 1
let a4 = 6 / "3" // 2
let a5 = "2" * "3" // 6
let a6 = 4 + 5 + "px" // "9px"
let a7 = "$" + 4 + 5 // "$45"
let a8 = "4" - 2 // 2
let a9 = "4px" - 2 // NaN
let a10 = 7 / 0 // Infinity
let a11 = "  -9  " + 5 // "  -9  5"
let a12 = "  -9  " - 5 // -14
let a13 = null + 1 // 1
let a14 = undefined + 1 // NaN
let a15 = " \t \n" - 2 // -2

let f = prompt("Первое число?", 1);
let g = prompt("Второе число?", 2);

alert(+f + +g); // 3