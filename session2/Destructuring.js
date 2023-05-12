var odd=[1,3,5,7,9,11]
// let a = odd[0]
// let b = odd[1]
// let c = odd[2]
// let d = odd[3]
// let e = odd[4]

// Destructuring of Array

//let[a,b,c,d,e] = odd

//for selective re

let[a,b,,,e] = odd



let person ={
   name:" Sarah",
   country:"india",
   job :"Developer",
};

//Destructure an object
let{name,country,job}= person

console.log(name)
console.log(country)
console.log(job)