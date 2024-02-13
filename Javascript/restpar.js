//rest parameter

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }

// myfunc(1,2,3,4,5)

function addAll(...a){
    let total=0;
    for(let b of a){
        total+=b
    }
    return total
}
let c=addAll(1,2,3,4)
console.log(c)