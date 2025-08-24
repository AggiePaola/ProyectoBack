import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // Nota: no incluimos id porque JSON Server lo generará
  device = { nombre: '', marca: '', descripcion: '', imagen: '', precio: 0 };

  constructor(private deviceService: DeviceService) { }

  addDevice() {
    this.deviceService.addDevice(this.device).subscribe({
      next: () => {
        alert('Dispositivo agregado!');
        this.device = { nombre: '', marca: '', descripcion: '', imagen: '', precio: 0 };
      },
      error: err => {
        console.error('Error al agregar dispositivo:', err);
      }
    });
  }
}
