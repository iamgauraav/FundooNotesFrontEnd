import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  token:any

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({   
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],   
  });
  
  }
  OnSubmit() {
    console.log(this.loginForm.value.email)
    if(this.loginForm.valid){
      console.log("Do api call",this.loginForm);
      let data={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,

      }
      this.user.login(data).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem('token',response.token)
      })
    }else{
      console.log("invalid data",this.loginForm.value)
    }
  }

}
