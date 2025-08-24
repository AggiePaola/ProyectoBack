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

  getImageUrl(device: any): string {
    if (!device || !device.imagen) {
      return '/imagenes/default.png'; // imagen por defecto
    }
    return device.imagen.startsWith('http')
      ? device.imagen
      : '/imagenes/' + device.imagen;
  }



  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.deviceService.getDeviceById(id).subscribe(data => {
        this.device = data;
      });
    }
  }
}
