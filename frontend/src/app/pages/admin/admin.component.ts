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
  device = { nombre: '', marca: '', descripcion: '', imagen: '' };

  constructor(private deviceService: DeviceService) { }

  addDevice() {
    this.deviceService.addDevice(this.device).subscribe(() => {
      alert('Dispositivo agregado!');
      this.device = { nombre: '', marca: '', descripcion: '', imagen: '' };
    });
  }
}
