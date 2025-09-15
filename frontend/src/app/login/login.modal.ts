import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



declare var bootstrap: any;

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.modal.html'
})
export class LoginModalComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() { //login 
    if (this.loginForm.valid) {
      const { email, contrasena } = this.loginForm.value;
      this.authService.login({ usuario: email, contrasena }).subscribe({
        next: res => {
          if (res.success) {
            alert('Login exitoso ✅');
            this.closeModal();
            this.router.navigate(['/']);
          } else {
            alert(res.error || 'Credenciales inválidas');
          }
        },
        error: () => alert('Error en el servidor')
      });
    }
  }

  onRegister() { //registro
    if (this.loginForm.valid) {
      const { email, contrasena } = this.loginForm.value;
      this.authService.register(email, contrasena).subscribe({
        next: res => alert(res.message || 'Usuario registrado ✅'),
        error: () => alert('Error al registrar ❌')
      });
    }
  }
  closeModal() {
    const modalEl = document.getElementById('loginModal');
    if (modalEl) {
      const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modal.hide();

      setTimeout(() => {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
        document.body.classList.remove('modal-open');
        document.body.style.overflow = 'auto';
        document.body.style.removeProperty('padding-right');
      }, 300);
    }
  }

}
