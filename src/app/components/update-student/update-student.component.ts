import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

 
  constructor(private route: ActivatedRoute,private studentService:StudentsService){}

  ngOnInit(): void {
   this.id=this.route.snapshot.paramMap.get('id');
   console.log(this.id)
  }
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  id :any= this.route.snapshot.paramMap.get('id');
  toBeUpdatedStudent:any=this.studentService.getStudent(this.id)
  firstName:string=this.toBeUpdatedStudent.name.first_name
  lastName:string=this.toBeUpdatedStudent.name.last_name
  age:string=this.toBeUpdatedStudent.demographics.birth_date
  phone:number=this.toBeUpdatedStudent.phones.main.number
  email:string=this.toBeUpdatedStudent.contact_info.email
  city:string=this.toBeUpdatedStudent.addresses.physical.city
  street:string=this.toBeUpdatedStudent.addresses.physical.street

  
    profileForm = new FormGroup({
    firstname: new FormControl(this.firstName,[Validators.minLength(3)]),
    lastname: new FormControl(this.lastName,[Validators.minLength(3)]),
    age: new FormControl(this.age),
    phone: new FormControl(this.phone,[Validators.required]),
    email: new FormControl(this.email),
    city: new FormControl(this.city,[Validators.required]),
    street: new FormControl(this.street,[Validators.required]),
  });

  get firstNameValid() {
    return this.profileForm.controls['firstname'].valid;
  }
  get lastNameValid() {
    return this.profileForm.controls['lastname'].valid;
  }

  get ageValid() {
    return this.profileForm.controls['age'].valid;
  }
  get phoneValid() {
    return this.profileForm.controls['phone'].valid;
  }
  get emailValid() {
    return this.profileForm.controls['email'].valid;
  }
  get cityValid() {
    return this.profileForm.controls['city'].valid;
  }
  get streetValid() {
    return this.profileForm.controls['street'].valid;
  }

}
