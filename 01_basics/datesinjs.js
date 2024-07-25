//dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object

let newDate = new Date(2024,4,23);
console.log(newDate.toDateString());
//months start from zero in Js

let newDate1 = new Date("2003-2-11");//yyyy-dd-11
let newDate2 = new Date("25-07-2024");
// console.log(newDate1.toLocaleString());
// console.log(newDate2.toLocaleString());

let newDate3 = new Date()
console.log(newDate);
console.log(newDate.getSeconds())
console.log(newDate.getDate())



