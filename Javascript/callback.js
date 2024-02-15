//callback function
//  We call these two higherorder functions
//example
function myFunc2(name){
    console.log("inside myFunc2")
    console.log(`my name is ${name}`)
}
function myFunc(callback){
    // sql query data fetch karna woh pass karna callback ko example
    console.log("inside myFunc")
    callback("harsh");
}

myFunc(myFunc2);//normally we pass string,number, array, object but in callback we pass pura function


//function returning function

function myFunc3(){
     function hello(){
        return "hello world"
     }
     return hello;
}

//other way
function myFunc4(){
    return function hello(){
        return "hello world"
    };
}

const ans=myFunc3()



console.log(ans())

//when we accept function as an input or return function or doing both =>Higer order function