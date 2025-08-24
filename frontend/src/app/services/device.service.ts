import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Device {
  id: number;
  nombre: string;
  marca: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://localhost:3000/devices';

  constructor(private http: HttpClient) { }


  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiUrl);
  }

  getDeviceById(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.apiUrl}/${id}`);
  }


  addDevice(device: Omit<Device, 'id'>): Observable<Device> {
    return this.http.post<Device>(this.apiUrl, device);
  }
}
