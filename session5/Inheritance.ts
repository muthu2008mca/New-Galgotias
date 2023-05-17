import { Employee,message } from "./classobj";

import {}from `../session2/ArrowFunction` //access file from other .ts files using ../
class Department extends Employee
{
  private salary:number
  constructor(id:number,name:string,salary:number)
  {
    super(id, name)
    this.salary= salary
  }
  getSalary():void{
    super.details()
    console.log("salary:", this.salary)
  }
}

let dept1 = new Department(101,"Rahul",10000)
dept1.getSalary()

console.log(message)