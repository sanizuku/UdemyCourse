//lexical scope
//simply first check inside its function if not then check in which it is defined

const myVar="happy"
function myApp(){
 const myVar="1"
    function myFunc(){
        //  const myVar="3"
        console.log("inside myFunc",myVar)
      function  myFunc1(){
            console.log("myFunc1",myVar)
        }
        myFunc1()

    }
    console.log(myVar)
    myFunc()

}
myApp() 