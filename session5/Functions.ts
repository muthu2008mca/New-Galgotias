// Named function
function add(x:number,y:number):number //with return type
{
    return x+y;
}
console.log(add(5,10))
//Anonymous function
let myAdd = function(x:number,y:string):string{
    return x+y;
}
console.log(typeof(myAdd(5,"10")))
// let myAdd = (x,y)=>{
//     return x+y
// }

//Arrow Function
let myAdd1 = (x:number,y:number):number=>x+y;

console.log(typeof(myAdd1(10,15)))

function printMsg(msg:string):void{
    console.log(msg)
}

printMsg("Hello Faculties")

function getTime():any{
    return new Date().toLocaleDateString() 
    //return new Date().toLocaleString()//toLocaleString()
    //return new Date().toLocaleTimeString()
}

console.log(getTime())


//Handle Optional Argument
function sum(a:number,b:number,c?:number):number
{
    return a+b+(c || 0)
}

console.log(sum(5,10))


//Defualt Argument
function sum1(a:number,b:number,c:number=0):number
{
    return a+b+c
}

console.log(sum(5,10))

//multiple argument reduce method
function sum2(a:number,b:number,...data:number[]):number
{
    return a+b+data.reduce((p,q)=>{return p+q})
}
console.log(sum2(5,10,12,13,34,4))