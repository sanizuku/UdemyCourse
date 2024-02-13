//for loop in array //for array we are using let we can use const also
let fruits=["apple","grapes","banana"]
let fruits2=[];
//length is imp. property of array
    for(let i=0;i<=fruits.length-1;i++) {
        console.log(fruits[i])
    fruits2.push(fruits[i].toUpperCase())
    }
    console.log(fruits2);


    //use const for creating array
    //heap memory ["pencil","magicpen"]0x11  
    const shop=["pencil","scale","book"];//0x11
    shop.push("pen");
    console.log(shop);//["pencil","scale","book","pen"]//MERA MATLAB JAB BHI KOI BHI REFERENCE TYPE USE KARUNGA TAB CONST USE KARUNGA





