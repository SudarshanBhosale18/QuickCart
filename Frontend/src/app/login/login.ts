import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  user = { username: '', password: '' };
  successMessage = '';
  errorMessage = '';
  isLoading = false;

  constructor(private router: Router) {}

  onLogin() {
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    setTimeout(() => {
      if (this.user.username === 'admin' && this.user.password === 'admin') {
        this.successMessage = 'Login successful!';
        this.router.navigate(['/Home']);
      } else {
        this.errorMessage = 'Invalid username or password';
      }
      this.isLoading = false;
    }, 1000);
  }

  onInputChange() {
    this.successMessage = '';
    this.errorMessage = '';
  }

  goToRegister() {
    this.router.navigate(['/Register']);
  }

}
