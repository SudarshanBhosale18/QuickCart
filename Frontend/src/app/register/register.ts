// src/app/register/register.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  user = { username: '', password: '', confirmPassword: '' };
  successMessage = '';
  errorMessage = '';
  isLoading = false;

  constructor(private router: Router) {}

  onRegister() {
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    setTimeout(() => {
      if (this.user.password === this.user.confirmPassword) {
        this.successMessage = 'Registration successful!';
        this.router.navigate(['/Login']); 
      } else {
        this.errorMessage = 'Passwords do not match';
      }
      this.isLoading = false;
    }, 1000);
  }

  onInputChange() {
    this.successMessage = '';
    this.errorMessage = '';
  }

  goToLogin() {
    this.router.navigate(['/Login']);
  }
}
