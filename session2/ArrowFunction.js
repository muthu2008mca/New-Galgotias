function add(x,y){
    return x+y
}

// let addition = function(x,y){
//     return x+y
// };

// let addition = (x,y) => {
//     return x + y

// }

// let addition = (x,y) => x + y;

let addition = x => x;
console.log(addition(5))


// ========================================
var names = ["john", "Peter","parker"]
// let len = names.map((i)=>i.length)
let len = names.map((i)=>{
     return i.length
})
console.log(len)

// let len = names.forEach((i)=>{
//     return i.length
// })

names.forEach((i)=>{
        console.log(i.length)
    })