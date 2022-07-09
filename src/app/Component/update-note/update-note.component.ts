import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/NoteService/note.service';





@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title:any;
  description:any;
  color: any;
  noteId: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,private note: NoteService,
    
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
   
  }
  ngOnInit(): void {
    console.log(this.data);
    this.title=this.data.title;
    this.description=this.data.description;
    this.color=this.data.color;
    this.noteId=this.data.noteId;
  }

  onNoClick(): void {
    console.log(this.title,this.description)
    let data = {
      title: this.title,
      description: this.description,
      color:this.color,
    };
    this.note.updatenote(data,this.noteId).subscribe((Response:any)=>{
      console.log(Response);
      });

    this.dialogRef.close();
  }
}