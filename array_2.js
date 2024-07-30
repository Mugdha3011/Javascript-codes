//few more methods in array 

const myArr = [0,1,2,3,4,5]
const my_heros= ["shahrukh","salman", "akshay", "Karthik"]
const my_heroine = ["kajol","katrina", "alia","tapsee"]

// my_heros.push(my_heroine) //second array will be added to 1st as a new element
// console.log(my_heros);

//to add two arrays where elements resides separately .. we use concat fn

const new_arr = my_heroine.concat(my_heros);
// console.log(new_arr);

//another way to concatenate
const new_club = [...my_heroine,...my_heros]
// console.log(new_club);

//spread out all the elements 
const arr1 = [1,2,3[4,5,6],7,[12,23,[,23,45]]]
console.log(arr1.flat(Infinity));

//check whether its a array or not 
console.log(Array.isArray("mugdha"));//false

//change into an array
console.log(Array.from("mugdha"));

//test
console.log(Array.from({name : "mugdha"}));

//way 2 to form array
let a = 12;
let b = 23;
let c = 56;

console.log(Array.of(a,b,c));






