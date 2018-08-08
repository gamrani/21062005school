import { Component, OnInit } from '@angular/core';
import { StudentsService  } from '../services/students.service';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material';
import {Student} from '../models/student';
import {DataSource} from '@angular/cdk/collections';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { AddStudentFormComponent } from '../add-student-form/add-student-form.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  dataSource = new UserDataSource(this.studentService);
  displayedColumns = ['id','name', 'email', 'tel'];

  users : Student[];
  constructor(private studentService:StudentsService,public dialog: MatDialog) { }
  ngOnInit() {
  }

  openStudentForm():void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddStudentFormComponent, dialogConfig);
  }
}

// Customize our dataSource for dataTable
export class UserDataSource extends DataSource<any> {

  constructor(private studentService: StudentsService) {
    super();
  }
  connect(): Observable<Student[]> {
    return this.studentService.getALlStudents();
  }
  disconnect() {}
  filterData(filterBy: String){

  }
}
