import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { NotesComponent } from './notes/notes.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import { PresenceComponent } from './presence/presence.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { ListUploadComponent } from './list-upload/list-upload.component';
import { FormUploadComponent } from './form-upload/form-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    NotesComponent,
    ClassesComponent,
    DashboardComponent,
    AuthenticationComponent,
    NavbarComponent,
    FooterComponent,
    PresenceComponent,
    StudentComponent,
    DataTableComponent,
    AddStudentFormComponent,
    ListUploadComponent,
    FormUploadComponent
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddStudentFormComponent,FormUploadComponent]
})
export class AppModule { }
