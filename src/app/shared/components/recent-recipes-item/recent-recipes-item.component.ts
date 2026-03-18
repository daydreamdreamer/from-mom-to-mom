import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recent-recipes-item',
  imports: [RouterLink],
  templateUrl: './recent-recipes-item.component.html',
  styleUrl: './recent-recipes-item.component.css'
})
export class RecentRecipesItemComponent {
  @Input({required: true}) recipe!: Recipe;
  @Input() active!: boolean;
}
