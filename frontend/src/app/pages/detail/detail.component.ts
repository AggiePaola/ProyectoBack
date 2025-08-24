import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  device: any;
  ;

  getImageUrl(device: any): string {
    if (!device || !device.imagen) {
      return '/imagenes/default.png'; // opcional: imagen por defecto
    }
    return device.imagen.startsWith('http')
      ? device.imagen
      : 'public/imagenes/' + device.imagen;
  }
  isModalOpen = false;
  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.deviceService.getDeviceById(id).subscribe({
        next: data => this.device = data,
        error: err => console.error('Error al cargar el dispositivo:', err)
      });
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  // Cerrar modal
  closeModal() {
    this.isModalOpen = false;
  }
}
