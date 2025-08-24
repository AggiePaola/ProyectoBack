import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://localhost:3000/devices';

  constructor(private http: HttpClient) { }

  getDevices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getDeviceById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addDevice(device: any): Observable<any> {
    return this.http.post(this.apiUrl, device);
  }
}
