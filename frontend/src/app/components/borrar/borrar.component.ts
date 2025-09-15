import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // 👈 necesario para *ngIf

@Component({
  selector: 'app-borrar',
  standalone: true,
  imports: [CommonModule],   // 👈 aquí habilitamos *ngIf, *ngFor, etc.
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent {
  visible = true;

  ocultar() {
    this.visible = false;
  }
}
