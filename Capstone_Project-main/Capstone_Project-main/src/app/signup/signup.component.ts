import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private signupService: SignupService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }

  registerSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.signupService.signup(this.registerForm.value)
      .subscribe(
        response => {
          console.log(response);
          // Handle success response from the backend
        },
        error => {
          console.log(error);
          // Handle error response from the backend
        }
      );
  }
}
