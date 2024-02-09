
//String Indexing 

let firstName ="harshitsdfelf"
console.log(firstName.length);

console.log(firstName[firstName.length-2])//last index:length -1

//string methods
//trim() ,toUpperCase() ,toLowerCase(),slice

let secondName="  harsh   "
console.log(secondName.length,secondName)

secondName.trim()//this create new string it will not change the same string bcz string is immutable

// two ways to do it 
// 1) create new variable
let newString=secondName.trim();
console.log(newString.length,newString);

// 2) change in same variable
secondName=secondName.trim();
console.log(secondName.length,secondName)

//toUppercase
let companyName="nvidia";
companyName.toUpperCase();//so string is immutable we need to aasign to variable  for that assign to new variable or same (create new string)

console.log(companyName.length,companyName);

companyName=companyName.toUpperCase();
console.log(companyName.length,companyName)

//Same for toLowerCase
let company_name= "MASTERCARD";
company_name=company_name.toLowerCase();
console.log(company_name.length,company_name);

//sice()
let name1="sandeep";
// name1=name1.slice(1);
name1=name1.slice(3,7)
console.log(name1);//deep





