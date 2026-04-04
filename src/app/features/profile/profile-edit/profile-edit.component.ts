import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User, UserProfileUpdate } from '../../../shared/interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent implements OnInit {
  private fb = inject(FormBuilder);

  @Input() user!: User | null;

  @Output() save = new EventEmitter<UserProfileUpdate>();
  @Output() cancel = new EventEmitter<void>();

  profileForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]],

  })

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: [this.user?.firstName],
      lastName: [this.user?.lastName],
      email: [this.user?.email],
      city: [this.user?.cityId],
      age: [this.user?.age]
    });
  }



  onSubmit() {
    this.save.emit(this.profileForm.value);
  }
}
