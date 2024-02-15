//reduce

const numbers = [1,2,3,4,5,10];

//aim: sum of all the numbers in array

const sum =numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},100)
console.log(sum);

//accumulator,    currentvalue,  return
//100                    1       101
//101                    2       103
//103                   3        106
//106                   4         110
//110                   5         115
//115                  10         125

// realexample
const userCart =[
    {productId:1, productName:"mobile", price:12000},
    {productId:2, productName:"laptop", price:22000},
    {productId:3, productName:"tv", price:15000}
]

const totalAmount=userCart.reduce((totalPrice,currentproductvalue)=>{
    return totalPrice + currentproductvalue.price
},0)

console.log('totalAmount', totalAmount)