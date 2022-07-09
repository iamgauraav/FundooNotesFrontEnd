import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
  })
}
OnSubmit(){
  console.log(this.registerForm.value);
  if(this.registerForm.value.firstName!=''){
    console.log("Do api call",this.registerForm.value);
    let data={
      firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      address:"Indore"
    }
    this.user.register(data).subscribe((response:any)=>{
      console.log(response);

    })

  }else{
    console.log("Invalid data",this.registerForm.value);
  }
}

}

