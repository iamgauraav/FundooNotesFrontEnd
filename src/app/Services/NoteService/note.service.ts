import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;
  constructor(private httpService: HttpService) {
    this.token=localStorage.getItem('token');

   }
   //create note
   createnote(data:any){
    console.log(data);
    let header = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' +this.token

      }),
    };
    return this.httpService.postservice('https://localhost:5001/Note/AddNote',data,true,header)
   };
   //GetAllnote
  getNote() {
    
    console.log(" getnote service");
    let head = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      }),
    };
    return this.httpService.getService('https://localhost:5001/Note/GetallNote', true, head)
  };

  //updatenote
  updatenote(data: any,noteId:any) {
    console.log(data);

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json-patch+json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putservices( `https://localhost:5001/Note/UpdateNote/${noteId}`, data, true,header );
  }

  deleteNote(data: any) {
    console.log(data);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }),
      
    };
    console.log("data")
    return this.httpService.putservices( ``, data, true,header );
    
  }

  //Alltrash
  getAllNotesservice(data: any,noteId:any) {


    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })

    }
    
    return this.httpService.getService(`https://localhost:5001/Note/TrashNote/1`,true,header)
    
  }
  //archieve note
  archieveNote(data: any,noteId:any) {
    console.log(data,noteId);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json-patch+json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putservices( ``, data, true,header );
  }

}