import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.css']
})
export class PayerComponent {
  
  Number: string = '';
  password: string = '';
  showNotification = false;
  notificationMessage = '';
  
  constructor(private router: Router) { }

  BackHome() {
    this.router.navigate(['/']);
  }

  login() {
    // Implement your login logic here
    
    this.notificationMessage = 'Payment successfully made';
    this.showNotification = true;

    // Hide the notification after a short delay (e.g., 3 seconds)
    setTimeout(() => {
      this.showNotification = false;
    },4000);
    
      
      
    }
    
  

  
}
