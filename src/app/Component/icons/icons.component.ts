import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import { TrashNoteComponent } from '../trash-note/trash-note.component';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  

  notelistId: any;
  noteId: any;
  isTrash:boolean=false;
  isArchieve:boolean=false;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    let del
    if (del == TrashNoteComponent) {
      this.isTrash = true;
      console.log(this.isTrash);
    }

    this.isArchieve=true;
    console.log(this.isArchieve);
  }
  Trashnote() {
    let data = {
      noteId: [this.noteId],

      isTrash: true,
    };
    console.log('note is deleted');
    this.note
      .deleteNote(data.noteId)
      .subscribe((response: any) => {
      
        console.log('Deleted Notes are :', response);
        
        })
  }
  archieve(){

  }
  
}
