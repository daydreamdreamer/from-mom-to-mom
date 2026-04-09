import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { CookingTimePipe } from '../../pipes/cooking-time.pipe';
import { RecipeCategoryLabels } from '../../../shared/constants/recipe-category.map';
import { CategoryImagePipe } from '../../pipes/category-image.pipe';

@Component({
  selector: 'app-recent-recipes-item',
  imports: [RouterLink, CookingTimePipe, CategoryImagePipe],
  templateUrl: './recent-recipes-item.component.html',
  styleUrl: './recent-recipes-item.component.css'
})
export class RecentRecipesItemComponent {
  @Input({required: true}) recipe!: Recipe;
  @Input() active!: boolean;

  labels = RecipeCategoryLabels;
}
