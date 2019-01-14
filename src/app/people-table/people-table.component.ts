import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes/notes.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

export interface OperatorInfo {
  name: string;
  category: string;
  views: number;
}

export const OPERATOR_INFO: OperatorInfo[] = [
  { name: 'combineAll', category: 'combination', views: 233245 },
  { name: 'combineLatest', category: 'combination', views: 422142 },
  { name: 'concat', category: 'combination', views: 965335 }
];

@Component({
  selector: 'people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  public dataSource: MatTableDataSource<OperatorInfo>;
  notes: Observable<any[]>;
  constructor(private notesService: NotesService) {

  }

  ngOnInit() {
    this.notes = this.notesService.getData();
    let opNotes: OperatorInfo[] = [];
    // Ugh!  We need something about obervable...
    this.notes.forEach(n => {
      opNotes.push({ name: n['title'], category: n['content'], views: n['hearts'] });
    });
    console.log(`opNotes=${opNotes}`);
    this.dataSource = new MatTableDataSource(opNotes);
  }
}
