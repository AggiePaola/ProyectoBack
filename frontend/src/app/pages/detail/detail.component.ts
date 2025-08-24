import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Device, DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  device: Device | undefined;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.deviceService.getDeviceById(id).subscribe({
        next: data => this.device = data,
        error: err => console.error('Error al cargar el dispositivo:', err)
      });
    }
  }

  getImageUrl(): string {
    if (!this.device || !this.device.imagen) {
      return 'assets/imagenes/default.png';
    }
    return this.device.imagen.startsWith('http')
      ? this.device.imagen
      : 'assets/imagenes/' + this.device.imagen;
  }
}
