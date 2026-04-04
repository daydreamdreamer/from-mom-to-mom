import { Component, inject, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { CityNamePipe } from '../../pipes/city-name.pipe';
import { FavoritesComponent } from '../favorites/favorites.component';


@Component({
  selector: 'app-super-mamas-item',
  imports: [CityNamePipe, FavoritesComponent],
  templateUrl: './super-mamas-item.component.html',
  styleUrl: './super-mamas-item.component.css',
  providers: [CityNamePipe]
})
export class SuperMamasItemComponent {
  @Input({required: true}) user!: User;

  cityName = inject(CityNamePipe);
}
