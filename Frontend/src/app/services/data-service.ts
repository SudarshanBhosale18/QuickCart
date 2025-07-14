// src/app/services/data-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define all your interfaces
export interface User {
  id?: number;
  username: string;
  password: string;
  email?: string;
  role?: string;
}

export interface LoginResponse {
  role: string;
  username: string;
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: User;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api'; // Update with your API URL

  constructor(private http: HttpClient) { }

  getConnection(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/connection`);
  }

  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, user);
  }

  register(user: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, user);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }

  getCartItems(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cart`);
  }
}