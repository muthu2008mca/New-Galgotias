//Implicit

let person = {
    name: "john",
    uid: 123,
    wfh: true
}

person= {
    name: "peter",
    uid : 456,
    wfh : false,
    //city : "mumbai"  //can't update the property
}

//Explicit
let employee: object;
employee = {name :"Muthu",city:'delhi'}
employee = [1,2,3,4,5,5]

let project:{
    pname:string,
    pid:number,
    isCompleted:boolean
}

project = {
    pname:"project1",
    pid: 1221,
    isCompleted:true,
};