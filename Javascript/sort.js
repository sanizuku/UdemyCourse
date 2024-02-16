//map,filter,foreach was giving new array not original and reduce was giving one value after reducing

// Ascii values
// A=65,a=97,0=48,9=57

//clone karney ke tarikey spread,slice


const number=[5,9,1200,400,3000]
// number.sort()
// console.log(number);//changes in original array and sort method does not give result as expected
// //because sort method take numbers in array as string and based on ascii it sorts and check 1 character  if two string starts with same no/alphabet then check preciding 

// number.sort((a,b)=>{//callback function as input taken by sort method
//     return a-b;

// })
// console.log(number)

// if want new array then use clone methods
const abc=number.slice(0).sort((a,b)=>{
    return a-b
})
//1200,410 a-b=790(positive) a is greater is comes negative then b is is greater this is how sort works
console.log(number)
console.log(abc)

const userNames=['harshit','abcd','mohit','nitish',"Abcd"]
userNames.sort();
console.log(userNames)

const products=[
    {productId:1, productName:"p1", price:300},
    {productId:2, productName:"p2", price:3000},
    {productId:3, productName:"p3", price:200},
    {productId:4, productName:"p4", price:8000},
    {productId:5, productName:"p5", price:500},
]

const lowToHighprice=products.slice(0).sort((a,b)=>{return a.price-b.price});
console.log(products)
console.log(lowToHighprice)
const highToLowprice=products.slice(0).sort((a,b)=>{
    return b.price-a.price
})
console.log(highToLowprice)

