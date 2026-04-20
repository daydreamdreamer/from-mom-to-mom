import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { emailValidator } from '../../../shared/validators/email.validator';
import { passwordsMatchValidator } from '../../../shared/validators/passwords-match.validator';
import { InputErrorDirective } from '../../../shared/directives/input-error.directive';
import { CitySelectComponent } from '../../../shared/components/city-select/city-select.component';
import { StatsService } from '../../../core/services/stats.service';
import { getErrorMessage } from '../../../shared/utils/error.util';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, InputErrorDirective, CitySelectComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private statsService = inject(StatsService);

  registerForm: FormGroup = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(2)]],
    lastName: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, emailValidator()]],
    city: [""],
    age: [""],
    passwords: this.fb.group(
      {
        password: ["", [Validators.required, Validators.minLength(5)]],
        rePassword: ["", [Validators.required, Validators.minLength(5)]],
      },
      { validators: passwordsMatchValidator })
  });

  isLoading = false;
  errorMessage = '';

  get passwordsGroup(): FormGroup {
    return this.registerForm.get('passwords') as FormGroup;
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const { firstName, lastName, email, city, age, passwords } = this.registerForm.value;

    const userData = {
      firstName,
      lastName,
      email,
      city,
      age,
      password: passwords.password
    };

    this.statsService
      .onUserRegistered(this.authService.register(userData))
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = getErrorMessage(err);
        }
      });
  }
}
