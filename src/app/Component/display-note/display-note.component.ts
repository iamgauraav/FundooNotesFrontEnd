import { not } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA}from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() childMessage:any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '250px',
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}


