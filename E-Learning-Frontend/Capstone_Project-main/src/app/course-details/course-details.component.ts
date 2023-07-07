import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { HttpClient } from '@angular/common/http';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  id: number | any;
  // course!: Course;
  course: Course = new Course('', '', []);

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private http: HttpClient
  ) {}

  
  ngOnInit(): void {
    console.log('Course ID:', this.id);

  this.route.paramMap.subscribe(params => {
    const courseIdParam = params.get('courseId');
    if (courseIdParam) {
      this.id = Number(courseIdParam);
      this.getCourseDetails();
    } else {
      console.log('Invalid course ID');
    }
  });
}



  getCourseDetails(): void {
    console.log('Course ID:', this.id); // Add this line
    this.courseService.getCourse(this.id).subscribe(
      course => {
        this.course = course;
      },
      error => {
        console.log(error);
      }
    );
  }
  

  rateCourse(): void {
    // Implement your logic for rating the course here
  }

  registerCourse(userId: number, courseId: number) {
    const data = {
      userId: userId,
      courseId: courseId
    };

    this.http.post('http://localhost:8082/enrollments', data).subscribe(
      response => {
        // Registration successful, handle the response as needed
        console.log('Registration successful');
      },
      error => {
        // Registration failed, handle the error
        console.error('Registration failed');
      }
    );
  }
}
