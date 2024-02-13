// block scope vs function scope
// 1) let and const are block scope
// 2)var is function scope
// file is a global scope

// if(true){
//     var firstName="harshit";
//     console.log(firstName);
// }
// console.log(firstName)
// {} this is ablock

// but in case of let and const 
// if(true){
//     let Varia1="harshit";
//     console.log(Varia1)
// }
// console.log(Varia1)

// let firstName="ksk"
function myApp(){
    if(true){
        let firstName="harshit";
        console.log(firstName)
    }
    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}
// myApp();



function myApp1(){///if number+undefined=NaN
    if(true){
        var firstName="harshit";
        console.log(firstName)
    }
    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}
myApp1();