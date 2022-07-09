import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Component/forgetpassword/forgetpassword.component';
import { GetAllNoteComponent } from './Component/get-all-note/get-all-note.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ResetPasswordComponent } from './Component/resetpassword/resetpassword.component';


const routes: Routes = [
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'resetpassword', component: ResetPasswordComponent},
  {path:'forgetpassword', component: ForgotPasswordComponent},
  {path:'dashboard', component: DashboardComponent,
  children:[
    {path:'notes',component:GetAllNoteComponent}
  ]
},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
