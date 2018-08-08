import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.scss']
})
export class AddStudentFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddStudentFormComponent>,) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
  
  save(){

  }
}
