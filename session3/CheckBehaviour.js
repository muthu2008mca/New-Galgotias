console.log('First Statement')
console.log('Second Statement')

//setTimeout(()=>)
// var result =0
// for(var i=0;i<1000000;i++)
// {
//     result = result + i;
// }

//console.log(result)
console.log('Third statement')

var x= setInterval(function(){
    console.log('hello')
},3000)

setInterval(()=>{
    console.log("Bye")
},2000)

clearInterval(x)
