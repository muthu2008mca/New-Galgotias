//Access specifier
//1.public
//2.private
//3.protected
//we can make abstract class for not to export objects for the class 
export class Employee{  //export is means public class we can use outside the file
    //properties
    //public data by default
   private empId:number
   private empName:string

    //constructor
    constructor(id:number,name:number)
    {
        this.empId = id
        this.empName = name

    }

    //function
    details():void
    {
        console.log(`employee id:${this.empId}\n EMployee Name:`)
    }
}

let emp1 = new Employee(123,"sachin")
let emp2 = new Employee(423,"sachin")
emp1.details()
//emp2.empName = "Manish" //private
emp2.details()

let employees:Employee[]=[];
//employees.push("muthu")
employees.push(emp1)
employees.push(emp2)


 export const message = "hello"