//Promise : It is used for ES6
//Promise is an object, that return a value that hope to recieve it feature
//Promise is well suited for Asynchronous programming
//Promise is a way of communication with API
//Promise has tree states: Pending, Fullfilled, and Rejected

var sayHi = () => {
    return new Promise((resolve,reject)=>{
        let res = true
        if(res)
        {
            resolve("Yes I have a meeting with muthu sir")
        }
        else
        {
           reject("I Failed ny pormise")
        }
    });
}
//console.log(sayHi());
sayHi().then(res=>console.log(res)).catch(err=>console.log(err))