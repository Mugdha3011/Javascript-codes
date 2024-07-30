//array
//declaration

const myArr = [0,1,12,3,4,5,6]
const newArr = ["mugdha","choudhary"]
const newArr2 = new Array(12,23,34)

console.log(myArr[2])
console.log(newArr[0])
console.log(newArr2[2])

//array methods

//push = to add values 
myArr.push(30);
console.log(myArr);

//pop = to remove value
newArr.pop("choudhary");
console.log(newArr)

//add value in first position
newArr.unshift("miss")
console.log(newArr);

//some different operation

console.log(myArr.includes(3))
console.log(myArr.indexOf(30))

//slice and splice
console.log("A", myArr);

const mynewArr = myArr.slice(1,3);
console.log(mynewArr);

console.log("B", myArr);

const mynewArr2= myArr.splice(1,3);
console.log("C", myArr);
console.log(mynewArr2);


//slice vs splice 

/*Modification - slice() extracts elements into a new array without modifying the original. splice() changes the contents of the original array.

Parameters - slice() takes two optional params, begin & end indexes. Splice () requires a start index and optional deleteCount.

 Return value - slice() returns sliced elements in a new array. splice() returns deleted elements in an array*/