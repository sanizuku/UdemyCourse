//find method

const myArray=["Hello","cat","dog","tiger"]

const ans=myArray.find((item)=>{
    return item.length === 5
})
console.log(ans)//find method always give first occurence match

const users=[
    {userId:1,userName:"harshit"},
    {userId:2,userName:"harsh"},
    {userId:3,userName:"rakshit"},
    {userId:4,userName:"arshit"},
    {userId:5,userName:"hit"},
]

  const myUser = users.find((user)=>
     user.userId===3
);
  console.log(myUser)

  //everymethod
  const numbers=[2,4,6,9,10];

  const anse=numbers.every((number)=>{
    return number%2===0;
  })

  //callback function ---> true /false(boolean)
  //every method---> true/false(boolean) jab sareyt true hongey tabhi true return karega
  console.log(anse)

  const userCart=[
{productId:1, productName:"mobile",price:12000},
{productId:2, productName:"laptop",price:26000},
{productId:3, productName:"tv",price:22000}
  ]

  const useanser=userCart.every((item)=>{
   return item.price<30000
  })
  console.log(useanser)