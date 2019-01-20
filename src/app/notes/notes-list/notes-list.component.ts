import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Observable } from 'rxjs';
// Really, should have a DataTableService -- Or have DataTableComponent use DataTableService
import { DataTableComponent } from '../../data-table/data-table.component';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Observable<any[]>;
  title: string;
  content: string;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getData();
  }

  clickHandler() {
    this.notesService.createNote(this.title, this.content);
    this.content = '';

  }

}
