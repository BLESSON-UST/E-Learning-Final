import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CourseformComponent } from './courseform/courseform.component';
import { EditcourseComponent } from './editcourse/editcourse.component';

const routes: Routes = [
  {path: 'Home', component:HomeComponent},
  {path: 'About',component:AboutComponent},
  {path: 'Login',component:LoginComponent},
  {path: 'Signup',component:SignupComponent},
  {path: 'Admin',component:AdminComponent},
  {path: 'User/:username',component:UserdashboardComponent },
  {path: 'Contact',component:ContactusComponent},
  {path: 'addcourse',component:CourseformComponent},
  {path: 'editcourse',component:EditcourseComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
