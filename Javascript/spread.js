//spread operator
 const a1=[1,2,3]
 const a2=[4,5,6]
 const obj=[...a1,...a2]
 console.log(obj)
 const newArray=[..."123456789"]//only string converted to array not integer
 console.log(newArray)

 //spread operator in objects
 const obj1={
    key1: 'value1',
    key2: 'value2'
 }
 const obj2={
    key1:"valuechanged",//suppose duplicate key is there then last one value will get place
    key3:'value3',
    key4: 'value4'
 }

 const newobj={...obj1, ...obj2,key69:"value69"}
 console.log(newobj)
 const newObject={..."abc"}
 console.log(newObject)//0:a,1:b,2:c,

 const newObject1={...["i1","i2"]}
 console.log(newObject1)