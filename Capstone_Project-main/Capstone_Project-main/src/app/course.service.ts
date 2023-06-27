import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:8081/courses';

  constructor(private http: HttpClient) {}

  addCourse(course: Course): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, course);
  }
}
