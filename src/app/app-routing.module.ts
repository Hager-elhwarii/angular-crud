import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"update/:id",component:UpdateStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
