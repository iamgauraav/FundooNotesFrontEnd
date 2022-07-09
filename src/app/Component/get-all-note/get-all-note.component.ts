import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {
  noteArray:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote(){
    this.note.getNote().subscribe((response:any)=>{
      console.log(response);
      this.noteArray=response.data;
    })
  }

}
