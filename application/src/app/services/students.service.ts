import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from '../models/student';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  httpDataUrl = "assets/input.json"; 
  constructor(private http: HttpClient) { }

  // invoke API to get all students
  getALlStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.httpDataUrl);
  }

  getStudent(studentId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+studentId);
  }
}
