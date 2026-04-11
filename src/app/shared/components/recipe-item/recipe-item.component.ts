import { Component, computed, inject, Input } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes.service';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { CookingTimePipe } from '../../pipes/cooking-time.pipe';
import { RecipeCategoryLabels } from '../../../shared/constants/recipe-category.map';
import { CategoryImagePipe } from '../../pipes/category-image.pipe';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-recipe-item',
  imports: [RouterLink, CookingTimePipe, CategoryImagePipe],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input({ required: true }) recipe!: Recipe;
  authService = inject(AuthService);

  labels = RecipeCategoryLabels;

  isOwner = computed(() =>
    this.authService.isOwner(this.recipe?.author?._id)
  );
}
