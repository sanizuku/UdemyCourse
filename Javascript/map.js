//map method

const numbers = [3,4,6,1,8];

//Map function also take callback function as input
// const square=function(number){
//     return number*number  ///return is important in callback function
// }
// const squareNumbers=numbers.map(square)
// console.log(squareNumbers)


const squareNumbers=numbers.map((number,index)=>{
    return `index,value:${index},${number*number}`
})
console.log(squareNumbers)

//realistic
const users=[
    {firstName:"harshit",age:23},
    {firstName:"mohit",age:22},
    {firstName:"nitish",age:21},
    {firstName:"garima",age:20},
]


const firstNames=users.map(user=>{
   return user.firstName
})
console.log(firstNames)

//filter method 

//callback function return boolean
const isEven=numbers.filter((number)=>{
    return number%2===0
})
console.log('isEven', isEven)