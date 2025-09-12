import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './/auth.service';

declare var bootstrap: any;

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.modal.html'
})
export class LoginModalComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.auth.login(email, password).subscribe({
        next: res => {
          if (res.success) {
            alert('Login exitoso ✅');
            this.closeModal();
          } else {
            alert(res.error || 'Credenciales inválidas ❌');
          }
        },
        error: () => alert('Error en el servidor ❌')
      });
    }
  }

  onRegister() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.auth.register(email, password).subscribe({
        next: res => {
          alert(res.message || 'Usuario registrado ✅');
        },
        error: () => alert('Error al registrar ❌')
      });
    }
  }

  closeModal() {
    const modalEl = document.getElementById('loginModal');
    if (modalEl) {
      const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modal.hide();
    }
  }
}
