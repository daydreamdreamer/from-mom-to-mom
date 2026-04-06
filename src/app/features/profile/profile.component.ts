import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { UserProfileUpdate } from '../../shared/interfaces/user';

@Component({
  selector: 'app-profile',
  imports: [ProfileEditComponent, ProfileViewComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private authService = inject(AuthService);

  user = this.authService.currentUser;
  isEditMode = signal(false);
  isLoading = signal(false);

  onEdit() {
     this.isEditMode.set(true);
  }

  onSave(updatedUser: UserProfileUpdate) {
    this.isEditMode.set(false);

    this.authService.updateProfile(updatedUser).subscribe({
      next: (user) => {
        this.authService.setSession(user);
        this.isLoading.set(false);
        this.isEditMode.set(false);
      },
      error: (err) => {
        this.isLoading.set(false);
        //this.errorMessage.set(err.error?.message || 'Failed to update profile');
      }
    })
  }

  onCancel() {
    this.isEditMode.set(false);
  }
}
