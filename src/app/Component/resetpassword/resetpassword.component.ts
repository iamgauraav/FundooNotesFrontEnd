import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup;
  submitted = false;
  hide = true;
  token: any;

  constructor(private formBuilder:FormBuilder, private activatedRoute: ActivatedRoute,private user: UserService) { }

  ngOnInit(): void {
    this.resetpasswordForm = this.formBuilder.group({
     
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]], 
  })
}

onSubmit(){
  console.log(this.resetpasswordForm.value);
    if(this.resetpasswordForm.valid){
      console.log("Do api call",this.resetpasswordForm);
      let data={
        password:this.resetpasswordForm.value.password,
        confirmPassword:this.resetpasswordForm.value.confirmPassword,
      }
      this.user.resetpassword(data).subscribe((Response:any)=>{
        console.log(Response);
      })
    }else{
      console.log("invalid data",this.resetpasswordForm.value);
    }

}  

}
