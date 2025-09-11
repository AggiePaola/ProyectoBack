import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

declare var bootstrap: any; // para usar Bootstrap Modal

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.modal.html'

})
export class LoginModalComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (email === 'admin@admin.com' && password === '123456') {
        alert('Login exitoso ✅');
        this.closeModal();
      } else {
        alert('Credenciales inválidas ❌');
      }
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
