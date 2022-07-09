import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor(private httpService: HttpService) {
  
  }

  register(data: any) {
    console.log(data);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      }),
    };
    return this.httpService.postservice(
      'https://localhost:5001/User/Register',
      data,
      false,
      header
    );
    
    }
    login(data: any) {
      console.log(data);
  
      let header = {
        Headers:new HttpHeaders({
          'Content-Type': 'application/json-patch+json',
        })
      };
      return this.httpService.postservice('https://localhost:5001/User/Login/gaurav12%40gmail.com/Gaurav%401',
  
      data,
      false
      ,header);    
    }
    forgetpassword(data: any) {
      console.log(data);
  
      let header = {
        Headers:new HttpHeaders({
          'Content-Type': 'application/json-patch+json',
        })
      };
      return this.httpService.postservice('https://localhost:5001/User/ForgetPassword/gaurav12%40gmail.com',
      data,
      false,
      header);    
    }
    resetpassword(data: any) {
      console.log(data);
  
      let header = {
        Headers:new HttpHeaders({
          'Content-Type': 'application/json-patch+json',
        })
      };
      return this.httpService.postservice('https://localhost:5001/User/ResetPassword',
      data,
      false,
      header);    
    }
  
}