//param destructuring

//object 
//react

const person={
    name: 'John',
    gender: 'Male',
    age:"25"
}

// function getDetails(obj){
//     console.log(obj.name)
//     console.log(obj.gender)
//     console.log(obj.age)


// }

// getDetails(person)



//but how can we do paramdestructing


function getDetails({name,gender}){
    console.log(name)
    console.log(gender)
    console.log(age)


}

getDetails(person)

