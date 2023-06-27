import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[] = [];
  courses: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchCourses();
  }

  fetchUsers(): void {
    this.http.get<any>('http://localhost:8088/api/usr').subscribe(
      (data: any[]) => {
        // Exclude the "Admin" user from the user list
        this.users = data.filter((user: any) => user.firstname !== 'Admin');
      },
      error => {
        console.log('An error occurred while fetching users:', error);
      }
    );
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
}
