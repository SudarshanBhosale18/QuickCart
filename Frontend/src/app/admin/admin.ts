import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],
  imports: [CommonModule, RouterModule]
})
export class Admin implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('role');

    if (isLoggedIn !== 'true' || role !== 'ADMIN') {
      alert('Access denied. Admins only.');
      this.router.navigate(['/login']);
    }
  }
}
