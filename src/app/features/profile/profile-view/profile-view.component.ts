import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { User } from '../../../shared/interfaces/user';
import { CityNamePipe } from '../../../shared/pipes/city-name.pipe';
import { FavoritesComponent } from '../../../shared/components/favorites/favorites.component';

@Component({
  selector: 'app-profile-view',
  imports: [CityNamePipe, FavoritesComponent],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css',
  providers: [CityNamePipe]
})
export class ProfileViewComponent {
  @Input() user!: User | null;
  @Output() edit = new EventEmitter<void>();

  cityName = inject(CityNamePipe);
}
