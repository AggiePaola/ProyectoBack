import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/login-api/login.php';

  constructor(private http: HttpClient) { }
  login(datos: { usuario: string, contrasena: string }): Observable<any> {
    return this.http.post<any>('http://localhost/login-api/login.php', datos);
  }

  register(usuario: string, contrasena: string): Observable<any> {
    return this.http.post<any>('http://localhost/login-api/register.php', { usuario, contrasena });
  }

}


