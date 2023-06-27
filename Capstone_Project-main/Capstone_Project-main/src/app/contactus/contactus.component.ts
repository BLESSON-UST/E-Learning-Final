import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  name: string = '';

  email: string = '';

  message: string = '';




  submitForm() {

    // Here, you can implement the logic to handle form submission

    // For this example, let's just log the form data

    console.log('Name:', this.name);

    console.log('Email:', this.email);

    console.log('Message:', this.message);




    // You can also clear the form fields after submission if desired

    this.name = '';

    this.email = '';

    this.message = '';

  }

}
