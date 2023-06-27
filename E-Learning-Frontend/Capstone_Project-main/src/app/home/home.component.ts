import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  enrollNow() {
  // Check if user is logged in
  const isLoggedIn = false; /* Add your authentication logic to check if the user is logged in */

  if (isLoggedIn) {
    // User is logged in, navigate to respective course page
    this.router.navigate(['/course-page']);
  } else {
    // User is not logged in, show an alert message
    alert('Please login to continue.');
  }
}


}
