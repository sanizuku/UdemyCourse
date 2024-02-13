// object destructuring

const band={
    bandName:"lead zepplin",
    famousSong:"stairway to heaven",
    year:1968,
    anotherFamousSong:"kashmir"
}
//traditional way 
console.log(band.bandName);
//dest..
const {bandName:var1,famousSong:var2,...restprops}=band;//if we use let we can change bandName but not in const
console.log(var1,var2);
// console.log(bandName,famousSong)
console.log(restprops)

//objects inside array
const users=[
    {userId:1,firstName:'harshit',gender:'male'},
    {userId:2,firstName:'hars',gender:'male'},
    {userId:3,firstName:'harshi',gender:'female'},
    
    
]
for(let user of users) {
    console.log(user);
    console.log(user.firstName) 
}

//nested destructuring

// const [user1,user2,user3]=users 1 way
// console.log(user1)
// console.log(user2)
// console.log(user3)

const [{firstName:user1name,userId}, ,{gender:user3gender}]=users
// console.log(firstName)
// console.log(gender)
console.log(user1name)
console.log(userId)
console.log(user3gender)