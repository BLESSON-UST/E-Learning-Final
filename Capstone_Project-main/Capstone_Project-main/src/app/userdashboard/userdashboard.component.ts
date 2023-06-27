import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../signup.service';

interface Course {
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
    if (!this.showDetails) {
      this.getUserDetails(); // Fetch user details only if they are not already displayed
    }
  }

  displayEnrolledCourses(): void {
    // TODO: Implement the logic to display enrolled courses
  }

  fetchAvailableCourses() {
    this.http.get<any>('http://localhost:8081/courses/all')
      .subscribe(data => {
        this.availableCourses = data.map((course: any) => {
          return {
            title: course.title,
            description: course.description,
            // imageUrl: course.imageUrl
          };
        });
      });
  }
  


  logout(): void {
    // Clear the token from localStorage and redirect to the login page
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  searchCourses(): void {
    // TODO: Implement the search functionality based on the searchText value
    console.log('Search for courses:', this.searchText);
  }
}
