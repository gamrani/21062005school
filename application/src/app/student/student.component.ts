import { Component, OnInit } from '@angular/core';
import { StudentsService  } from '../services/students.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  student:object;
  studentIdFromRoute : object;
  constructor(private actualRoute:ActivatedRoute,private studentService:StudentsService) { 
    this.actualRoute.params.subscribe(params => this.studentIdFromRoute = params.id );
  }

  ngOnInit() {
    this.studentService
    .getStudent(this.studentIdFromRoute)
    .subscribe(studentService => this.student=studentService );
  }

}
