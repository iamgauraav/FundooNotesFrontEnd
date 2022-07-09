import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Services/NoteService/note.service';



@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  show=false;
  createForm! : FormGroup;
  submitted= false;
  hide:boolean =true;

  constructor(private formBuilder: FormBuilder,private note: NoteService ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  isShow(){
    this.show=true;
  }
  close(){
    this.show=false;
  }
  onSubmit(){
    console.log(this.createForm.value);
    if(this.createForm.valid){
      console.log("Do api call",this.createForm);
      let data={
        title: this.createForm.value.title,
        description: this.createForm.value.description,
        color:"red"
      }
      this.note.createnote(data).subscribe((response:any)=>{
        console.log(response);
      })
    }else{
      console.log("invalid data",this.createForm.value)
    }
  }
}