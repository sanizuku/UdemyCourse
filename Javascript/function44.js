//function is like naukar just call him he will do your work
//function declaration
function sumThreeNumbers(number1,number2,number3){
    return number1 + number2 + number3;
}
console.log(sumThreeNumbers(1,2,3))

//isEven

// function isEven(num){
//     return num%2==0
// }
// console.log(isEven(4))

function firstchar(num){
    return num[0]
}
console.log(firstchar("abc"))

// function findTarget(array, target){
//     for(let i=0; i<array.length; i++){
//         if(array[i]==target){
//             return i
//         }
//     }
//     return -1
// }
// const myArray=[1,2,3]
// console.log(findTarget(myArray,1))

// function expression

const findTarget=function(array,target){
    for (let i=0;i<array.length;i++){
        if(array[i]==target){
            return i
        }
    }
    return -1
}

console.log(findTarget([1,2,3],1))

// arrow function
// const isEven=num=>{//we can remove parenthesis if i have only one parameter
//     return num%2===0
// }
// console.log(isEven(6))

//if we returning in only one line then

const isEven = num => num%2===0;
console.log(isEven(99));