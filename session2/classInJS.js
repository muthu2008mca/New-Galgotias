//Es5 not have Class concept

// function Employee(name, age,salary)
// {
//    this.name = name
//    this.age = age
//    this.salary = salary

//    Employee.display = function(){
//         console.log(this.name,this.age,this.salary)
//    }
// }

//ES6 have class concept
class Employee {
    constructor(name, age,salary) {
        this.name = name
        this.age = age
        this.salary = salary
    }
        display(){
            console.log(this.name, this.age, this.salary)
            console.log(`NAME: ${this.name}\nAGE:${this.age}\nSalary${this.salary}`)
            

        }
    }

// let obj1 = new Employee("sachin",24,10000)
// obj1.display()
class Student extends Employee{
    constructor(name,age,salary,rollno){
        super(name,age,salary)
        this.rollno= rollno
    }
    Details(){
        console.log(`Roll:${this.rollno}\nName:${this.name}`)
        console.log(`Age: ${this.age}\nSalary:${this.salary}`)
    }
}

let st1= new Student("Muthu",19,10,121)
st1.Details()
