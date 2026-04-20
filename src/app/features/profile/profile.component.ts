import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { UserProfileUpdate } from '../../shared/interfaces/user';
import { RecipesService } from '../../core/services/recipes.service';

@Component({
  selector: 'app-profile',
  imports: [ProfileEditComponent, ProfileViewComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  private authService = inject(AuthService);
  private recipesService = inject(RecipesService);

  user = this.authService.currentUser;
  totalFavorites = 0;
  isEditMode = signal(false);
  isLoading = signal(false);

  onEdit() {
    this.isEditMode.set(true);
  }

  ngOnInit() {
    this.recipesService.getMyTotalFavorites()
      .subscribe(total => {
        this.totalFavorites = total;
      });
  }

  onSave(updatedUser: UserProfileUpdate) {
    this.isLoading.set(true);

    this.authService.updateProfile(updatedUser).subscribe({
      next: (user) => {
        this.authService.setSession(user);
        this.isLoading.set(false);
        this.isEditMode.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  onCancel() {
    this.isEditMode.set(false);
  }
}
