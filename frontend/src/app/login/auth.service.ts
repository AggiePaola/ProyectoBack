import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from './/auth-response'; // ajusta la ruta según tu proyecto

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/login'; // ⚡ ajusta a tu carpeta PHP

  constructor(private http: HttpClient) { }

  // registrar usuario
  register(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register.php`, { email, password });
  }

  // login usuario
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login.php`, { email, password });
  }
}
