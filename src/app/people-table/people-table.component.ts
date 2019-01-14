import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface OperatorInfo {
  name: string;
  category:
  | 'combination'
  | 'filtering'
  | 'creation'
  | 'error handling'
  | 'multicasting'
  | 'transformation'
  | 'utility';
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
  public dataSource = new MatTableDataSource(OPERATOR_INFO);
  constructor() { }

  ngOnInit() {
  }

}
