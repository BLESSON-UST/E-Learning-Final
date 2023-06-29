import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

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
    private courseService: CourseService
  ) {}

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     this.courseId = Number(params.get('courseId'));
  //     this.getCourseDetails();
  //   });
  // }
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


  // getCourseDetails(): void {
  //   this.courseService.getCourse(this.courseId).subscribe(
  //     course => {
  //       this.course = course;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
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

  registerCourse(): void {
    // Implement your logic for registering the course here
  }
}
