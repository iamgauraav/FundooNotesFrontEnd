import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
  trashList: any=[];
  noteId: any;
  data:any;

  constructor( private noteService: NoteService) { }

  ngOnInit(): void {
    this.getTrashList();
  }
  getTrashList() {
    this.noteService.getAllNotesservice(this.data,this.noteId).subscribe((response: any) => {
      console.log(response.data);
    });
  }

}
