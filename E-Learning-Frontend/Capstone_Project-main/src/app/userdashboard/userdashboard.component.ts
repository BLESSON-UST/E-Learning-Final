import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { CourseService } from '../course.service';

interface Course {
  id: number;
  courseId: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  enrolledCourses: string[] = []; // Placeholder for enrolled courses
  availableCourses: Course[] = []; // Updated to hold Course objects
  searchText: string = '';
  username: string = '';
  userDetails: any = {};
  showDetails: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private signupService: SignupService,
    private http: HttpClient
  ) {}

  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.getUserDetails();
      this.fetchAvailableCourses();
    
    });
  }

  getUserDetails(): void {
    this.signupService.getUserDetails(this.username).subscribe(
      response => {
        this.userDetails = response;
        this.showDetails = true; // Set the flag to true to display the details
      },
      error => {
        console.log('An error occurred while fetching user details.');
      }
    );
  }

  displayDetails(): void {
    if (this.showDetails) {
      this.getUserDetails(); 
    }
  }
  
  

  displayEnrolledCourses(): void {
    // this.signupService.getEnrolledCourses(this.username).subscribe(
    //   response => {
    //     this.enrolledCourses = response;
    //   },
    //   error => {
    //     console.log('An error occurred while fetching enrolled courses.', error);
    //   }
    // );
  }

  fetchAvailableCourses() {
    this.http.get<any>('http://localhost:8081/courses/all')
      .subscribe(
        data => {
          this.availableCourses = data.map((course: any) => ({
            id: course.id,
            title: course.title,
            description: course.description,
            // imageUrl: course.imageUrl
          }));
        },
        error => {
          console.log('An error occurred while fetching available courses.', error);
        }
      );
  }

  logout(): void {
    // Clear the token from localStorage and redirect to the login page
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }

  searchCourses(): void {
    // TODO: Implement the search functionality based on the searchText value
    console.log('Search for courses:', this.searchText);
  }


  goToCourseDetails(id: number) {
    // Find the course details based on the courseId
    const course = this.availableCourses.find((course) => course.id === id);
    console.log(course);

    if (course) {
      // Navigate to the course details page using the course object or the courseId
      // Replace 'course-details' with the actual route path for the course details page in your application
      this.router.navigate(['/Course', course.id]);
    } else {
      // Handle the case where the course is not found
      console.error('Course not found');
    }
  }

  

}
   

