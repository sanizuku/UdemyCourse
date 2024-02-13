//hoisting
//this is function declaration and in this before function declaration we can call function
// hello();
// function hello(){
//     console.log("helloWorld")
// }

//but in function expression and arrow function we cannot do this thing

// console.log(hello)//undefined
// var hello="hello world";
// console.log(hello)//hello

// similarlly in case of var can print hello before declaring variable but in let and const not possible

//function inside function
// function definition/function declaration
function app(){//here we can make function use like function def,function exp,arrow func
 const myFunc =()=>{
    console.log("bye")
 }
 const addTwo=(n1,n2)=>{
   return n1+n2;
 }

 const mul=(n1,n2)=>{
return n1*n2
 }
    console.log("inside app")
    myFunc()
    console.log(addTwo(2,3))
    console.log(mul(2,3))
}
app();