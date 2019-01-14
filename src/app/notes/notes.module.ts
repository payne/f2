import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CdkTableModule } from '@angular/cdk/table';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesService } from './notes.service';

import { TableComponent } from '../table/table.component';
import { PeopleTableComponent } from '../people-table/people-table.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule,
    BrowserModule,
    CdkTableModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  declarations: [NotesListComponent, NoteDetailComponent,
    TableComponent, PeopleTableComponent],
  providers: [NotesService]
})
export class NotesModule { }
