//singleton = 

const mySymbol = Symbol("helo");

//object literals = ways to create object
const user = {
    name : "tanmay anand",
    //access symbol
    [mySymbol] : "helooo",

    age : 17,
    location  : "bareilly",
    "original name": "mugdha choudhary",
    email : "mugdha1130.com"


}
//how to access object and its element
//way 1 = less preferred
console.log(user.name);

//way 2
// console.log(user[name]); // won't run because name is taken as a string so put it inside double quote

// console.log(user["name"])
// console.log(user["original name"])
// console.log(user[mySymbol])
// console.log( typeof user[mySymbol])

// changes in object info
// console.log(user.email)
//  user.email = "tannu123.com"
//  console.log(user.email)

 //to not allow changes we freeze the object
// Object.freeze(user);
//  user.email = "tannu123.com"
//  console.log(user.email)

 //adding fns in object
 user.greeting = function(){
    console.log("hello user")
 }
console.log(user.greeting())//mind you , object is freezed

user.greeting1 = function(){
    console.log(`hello user , ${this.name}`)

}
console.log(user.greeting1());







