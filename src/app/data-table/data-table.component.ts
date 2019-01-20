import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';


@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {

  displayedColumns = ['name', 'age', 'email', 'phrase', 'edit'];
  dataSource: MatTableDataSource<any>; 

  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private afs: AngularFirestore, public dialog: MatDialog) { }


  ngAfterViewInit() {
    this.afs.collection<any>('hackers').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
    this.addOne(); // Adds one canned row
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(data): void {
    /*
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: data
    });
    */
  }

  addOne() {
    const hacker = {
      name: 'Cello Payne',
      age: 12,
      email: 'Cello@MattPayne.org',
      phrase: 'Crawl, then walk.',
      uid: 'abc'+1
    }
    this.afs.collection('hackers').doc(hacker.uid).set(hacker)
  }

  trackByUid(index, item) {
    return item.uid
  }

}