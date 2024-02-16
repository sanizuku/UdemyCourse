//some method

const numbers=[3,8,11,9];

//kya ek bhi number esa hai jo even hai
//true

// const ans=numbers.some((n)=>{
//     return n%2===0
// })
// console.log(ans)


const userCart =[
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:22000},
    {productId:3,productName:"tv",price:35000},
    {productId:4,productName:"macbook",price:250000},
]
const producthighval=userCart.some((product)=>{
   return product.price>100000
})
console.log(producthighval)

