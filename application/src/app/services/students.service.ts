import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from '../models/student';
import { Observable,throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  httpDataUrl = "assets/input.json";
  httpApi = "http://localhost:8080/students"; 

  constructor(private http: HttpClient) { }

  // invoke API to get all students
  getALlStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.httpDataUrl);
  }

  getStudent(studentId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+studentId);
  }

  saveStudent(student:Student){
    return this.http.post<Student>(this.httpApi+"/add", student, {headers: new HttpHeaders({'Content-Type':  'application/json'})});
  }
}
