//default parameter

function addTwo(a,b){
    if(typeof b==="undefined"){
        b=0
    }
    return a+b
}
console.log(addTwo(1,2));//3
console.log(addTwo(1))//NaN to handle this we do normally this

//for this we have default parameter
function add(a,b=0){
    return a+b
}
const ans=add(4,8)
console.log(ans)

