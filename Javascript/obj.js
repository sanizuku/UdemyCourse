// objects (reference type) //stored in memory same as array(stack heap)
//arrays are good but not sufficient for real world data
//objects store key value pairs
//objects dont have index 
//how to create objects

// const person={name: 'John', age:22};//we can object literal also
// console.log(person);
// //how to access data from objects
// console.log(person.name);
// console.log(person.age);

const person={name:"naruto",age:22,hobbies:["guitar","sleeping","listening music"]}
console.log(person)
console.log(person.hobbies[2])

//how to add key value pair to objects
person.gender="male";
console.log('person', person)

