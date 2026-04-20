import { Component, Input, Output, EventEmitter, inject, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User, UserProfileUpdate } from '../../../shared/interfaces/user';
import { CommonModule } from '@angular/common';
import { CitySelectComponent } from '../../../shared/components/city-select/city-select.component';

@Component({
  selector: 'app-profile-edit',
  imports: [CommonModule, ReactiveFormsModule, CitySelectComponent],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent implements OnChanges {
  private fb = inject(FormBuilder);

  @Input() user!: User | null;
  @Input() isLoading = false;

  @Output() save = new EventEmitter<UserProfileUpdate>();
  @Output() cancel = new EventEmitter<void>();

  profileForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: [{ value: '', disabled: true }],
    city: [''],
    age: ['']
  });

  ngOnChanges(): void {
    if (!this.user) return;

    this.profileForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      city: this.user.cityId,
      age: this.user.age
    });
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const { city, ...rest } = this.profileForm.getRawValue();

    const userProfileUpdateData: UserProfileUpdate = {
      ...rest,
      cityId: city
    };

    this.save.emit(userProfileUpdateData);
  }
}
