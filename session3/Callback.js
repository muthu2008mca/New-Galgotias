var students = [
    {name:"Manish", class:"5th"},
    {name:"Sachin", class:"6th"},
]

var newStudent = {name:"vinod", class:"10th"}

function admitStudent(stu, callback1) //Asynic to behaviour like synic
{
    setTimeout(()=>{
        students.push(stu);
        callback1();
    },2000)
}

function displayStudents(){
    setTimeout(()=>{

        var str = ""
        students.forEach(element=>{
            str += element.name;
        })
        console.log((str))

    },1000);
}

admitStudent(newStudent,displayStudents)
//displayStudents()