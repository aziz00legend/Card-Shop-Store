import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
isSignUp: boolean = false;
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  constructor(private router: Router) { }

  toggleSignUp() {
    this.isSignUp = !this.isSignUp;
  }

  login() {
    // Implement your login logic here
    console.log('Logging in:', this.email, this.password);
    
      // Your authentication logic here...
    
      // Assuming authentication is successful, navigate to the "payer" page
      this.router.navigate(['/payer']);
    }
    
  

  signUp() {
    // Implement your sign-up logic here
    console.log('Signing up:', this.firstName, this.lastName, this.email, this.password);
    this.router.navigate(['/payer']);
  }
}
