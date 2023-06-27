import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent {
  courses: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.http.get<any>('http://localhost:8081/courses/all').subscribe(
      data => {
        this.courses = data;
      },
      error => {
        console.log('An error occurred while fetching courses:', error);
      }
    );
  }

  editCourse(courseId: number): void {
    // Implement the logic to navigate to the course edit page for the selected courseId
    // For example: this.router.navigate(['/course/edit', courseId]);
  }

}
