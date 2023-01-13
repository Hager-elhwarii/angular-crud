import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private studentService:StudentsService){}
  
  dataSource = this.studentService.getStudents();

  updateStudent(data:any){
    console.log(data)

  }
  
  deleteStudent(data:any){
    console.log(data)
     const toBeDeleted=data.id
     this.dataSource=this.studentService.deleteStudent(toBeDeleted)
  }
  
}
