import { Component, OnInit } from '@angular/core';
import { LoginModalComponent } from '../../login/login.modal';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [LoginModalComponent],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  horaActual: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarHora();
    setInterval(() => this.cargarHora(), 60000);
  }

  cargarHora() {
    this.http.get<any>('https://worldtimeapi.org/api/timezone/America/Bogota')
      .subscribe(data => {
        console.log('Respuesta API:', data);
        this.horaActual = new Date(data.datetime).toLocaleTimeString();
      });
  }

}
