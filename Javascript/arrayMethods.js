//important array mehtods

//forEach
//map
//filter
//reduce

const numbers =[4,2,5,8];

// function myFunc(number,index){
//     console.log(`index is ${index} number is ${number}`)
// }

// numbers.forEach(myFunc);//for loop

numbers.forEach(function(number,index){//anonymous function are namelessfunction  =>forEach passingargument function banaya uske ander parameters
    console.log(`index is ${index} number is ${number}`)


})

numbers.forEach(function(number){
    console.log(`${number} is multipled by 2 = ${number*2}`)
})

//realistic way

const users=[
    {firstName:"harshit",age:23},
    {firstName:"mohit",age:22},
    {firstName:"nitish",age:21},
    {firstName:"garima",age:20},
]

users.forEach(function(user){//same as for loop just we have extra foreach function //what is forEach is doing calling user with same callback function i.e taking callback func as a input
    console.log(user.firstName)
})

for(let user of users){
    console.log(user.firstName)
}

users.forEach((user)=>{//arrow function
    console.log(user.firstName)
})