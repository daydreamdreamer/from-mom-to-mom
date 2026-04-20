import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { InputErrorDirective } from '../../../shared/directives/input-error.directive';
import { emailValidator } from '../../../shared/validators/email.validator';
import { getErrorMessage } from '../../../shared/utils/error.util';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, InputErrorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  isLoading = false;
  errorMessage = '';

  onLogin(): void {
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;

    this.authService.login({ email, password }).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = getErrorMessage(err);
      }
    })
  }
}
