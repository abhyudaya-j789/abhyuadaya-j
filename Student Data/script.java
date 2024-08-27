const StudentForm=document.getElementById('student-form');
const StudentList=document.getElementById('StudentList');
const errorDiv=document.getElementById('error');
const students=[];

StudentForm.addEventListener('submit',function(event){
    event.preventDefault();
   const studentId=document.getElementById('studentId').value;
   const studentName=document.getElementById('studentName').value;
   const studentAge=document.getElementById('studentAge').value;
try{
    addstudent(studentId,studentName,studentAge);
    displayStudents();
    errorDiv.textContent="";
}
catch(error){
    errorDiv.textContent=error.message;

}
StudentForm.reset()
});
function addstudent(Id,name,age){
    if(!Id|| !name|| !age){
        throw new Error('all feilds are required.');
    }
    if (isNaN(age)||age<=0){
        throw new Error('age must be a positive number');
    }
    const studentExists=students.some(student=>student.Id==Id);
    if(studentExists){
        throw new Error('student Id already exists.');
    }
    const student={
        Id,
        name,
        age:parseInt(age,10)
    };
      students.push(student);
    }
    function displayStudents(){
        StudentList.innerHTML='';
        students.forEach(student=>{
            const li=document.createElement('li');
            li.textContent=`ID:${student.Id},Name:${student.name},age:${student.age}`;
            StudentList.appendChild(li);
        }
            );
    }

