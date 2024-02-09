//template string
let age=22;
let firstName="harshit";
 let aboutme="my name is " + firstName + " and my age is " + age//normal way
 console.log(aboutme);
 let aboutmeagain=`my name is ${firstName} and my age is ${age}`;// template string way
 console.log(aboutmeagain);

 //undefined
 let fold;
 console.log(fold, typeof fold);
 fold='apple';
 console.log(fold, typeof fold);

 // null
 let hold=null;
 console.log(hold, typeof hold);//typeof null is object 
 //bug ,error 

 //BigInt
 let myNumber = BigInt(12)
 let sameMyNumber=123n;
 console.log(myNumber, typeof sameMyNumber)
console.log(myNumber+sameMyNumber);
console.log(Number.MAX_SAFE_INTEGER)
 //but 
 let n1=123;
 //console.log(myNumber+n1); Cannot mix BigInt and other types, use explicit conversions