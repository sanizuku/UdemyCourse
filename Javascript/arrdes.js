 // array destructuring

//normal way 
 const myArray=["a","b","c","d"]
 const var1=myArray[0]
 const var2=myArray[1]
 console.log(var1,var2)

 //but in desctructuring 
 let [myVar1,myVar2]=myArray;
 console.log(myVar1,myVar2);


 // but if i want  third index value then 
 let [myVarr1, ,myVarr2]=myArray;
 console.log(myVarr1,myVarr2)


 //but if i want store rest in another array then

 let [varr1,varr2,...myNewArray]=myArray;
 console.log(myNewArray)

 
// console.log(myArray.splice(1,1,"f"));//a,f,c,d
// console.log(myArray.splice(2,3))//c,d
console.log('myArray', myArray)
// console.log(myArray.slice(1,2))//f
// console.log(myArray.slice(-1))
// console.log(myArray.slice(-4))//d,c
// console.log(myArray.splice(-1))//d
console.log('myArray', myArray)//a,b,c
// console.log(myArray.splice(-1,1))
// console.log('first', "4">"9")
















