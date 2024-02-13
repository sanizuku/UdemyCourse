
//while loop in array
  
const fruits1=["apple","banana","grapes"];

const fruits2=[];
let i=0;
while(i<fruits1.length){
    fruits2.push(fruits1[i].toUpperCase())
    i++;
}
console.log(fruits2);

//for of loop in array
const trees=["apple", "orange", "grapes"]

const trees1=[];//for of  loop used as normal array iterate use for of loop

for (let tre of trees){
    trees1.push(tre.toUpperCase())
}
console.log(trees1);

//for in loop in array
const num=[1,2,3,4];
const num1=[];
for (let index in num){
    num1.push(num[index]);
}
console.log(num);
console.log(num1);