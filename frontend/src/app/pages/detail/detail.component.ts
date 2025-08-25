import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Device, DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  device: Device | undefined;
  isModalOpen = false;
  newReview = '';

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('idParam =', idParam);  // <--- revisa que no sea null
    if (idParam) {
      const id = Number(idParam);
      this.deviceService.getDeviceById(id).subscribe({
        next: data => {
          console.log('device recibido =', data);  // <--- revisa la consola
          this.device = data;
        },
        error: err => console.error('Error al cargar el dispositivo:', err)
      });
    }
  }


  getImageUrl(): string {
    if (!this.device || !this.device.imagen) return '/imagenes/default.png';
    return this.device.imagen.startsWith('http')
      ? this.device.imagen
      : '/imagenes/' + this.device.imagen;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.newReview = '';
  }

  addReview() {
    if (!this.device) return;

    // Inicializa array de reviews si no existe
    if (!this.device.reviews) this.device.reviews = [];

    // Agrega la nueva review al array
    this.device.reviews.push(this.newReview);

    // Llama al servicio para actualizar el dispositivo en la DB
    this.deviceService.updateDevice(this.device).subscribe({
      next: () => {
        alert('Review agregada!');
        this.closeModal(); // cierra modal y limpia textarea
      },
      error: err => console.error('Error al agregar review:', err)
    });
  }
}