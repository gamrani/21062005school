import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {StudentsService} from '../services/students.service';
import {Student} from '../models/student';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.scss']
})
export class AddStudentFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddStudentFormComponent>,private studentService:StudentsService) { }
 
  student:Student = new Student();
  levels = ['1','2','3','4','5','6'];
  sexs = ['M','F'];
  showError:boolean = false;
  err:boolean = false;
  ngOnInit() {
  }
  close(){
    this.showError = false;
    this.dialogRef.close();
  }
  
  submit(){
    this.showError = true;
    console.log( this.student);
   // this.studentService.saveStudent();
  }
  reinit(){
    this.showError=false;
  }
}
