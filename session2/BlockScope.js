// for(var i=0;i<=10;i++)
// {
//     console.log(i)
// }
// console.log("Outside the Block")
// console.log(i)

var x = 20
function sayhello()
{
    var x =10;   //function scope using var
    console.log(x)
    if(true)
    {
        let x=15  //block scope
        console.log(x)
    }
    console.log(x)
}

sayhello()