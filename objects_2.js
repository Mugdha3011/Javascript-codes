//{} = empty object
//decalration of empty object

const user = new Object()
// console.log(user); // op -> {}
//or 
const user1 = {}

//assign info to objects 
user.id = "123mug"
user.name = "mridula"
user.isLoggedIn = true

// console.log(user);

//object inside object
const regular_user = {
    email : "someone@gmAIL.com",
    fullName : {
        userFullName :{
            firstName:"mugdha",
            lastName :"choudhary"
        }

    }
}
// console.log(regular_user.fullName.userFullName.firstName);

//combining objects together
const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}

const obj3 = Object.assign(obj1,obj2);
//other method 
// const obj4 = Object.assign({}, obj1,obj2)
// in this method a new object is created and obj1 , obj2 act as source whereas in above method all the values were added in obj1
// console.log(obj3);

// combining operators using spread operator
// const obj5 = {...obj1 , ...obj2}

//array of objects in DB
const users = [
    {
        id : 1,
        email : "m@gmail.com"

    },
    {
        id : 1,
        email : "m@gmail.com"

    } , {
        id : 1,
        email : "m@gmail.com"

    }
]

users[1].email
// console.log(user);

//to access keys of obj
// console.log(Object.keys(user));
//to access values of object
// console.log(Object.values(user));
// console.log(Object.entries(user));

//to check whether obj contain specific thing or not 
// console.log(user.hasOwnProperty('isLoggedIn'));



//read mdn docs for more information

//object de structure

const user2 = {
    id : "123",
    name : "mugdha",
    course : "javascript"
    
}
// to access 
const {name} = user2
console.log(name);







