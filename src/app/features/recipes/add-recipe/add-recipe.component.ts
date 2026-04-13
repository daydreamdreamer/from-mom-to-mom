import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { RecipesService } from '../../../core/services/recipes.service';
import { RecipeDto } from '../../../shared/interfaces/recipe';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [RecipeFormComponent],
  templateUrl: './add-recipe.component.html'
})
export class AddRecipeComponent {
  private recipeService = inject(RecipesService);
  private router = inject(Router);

  onCreate(data: RecipeDto) {
    this.recipeService.createRecipe(data).subscribe({
      next: (recipe) => {
        this.router.navigate(['/recipes', recipe._id]);
      }
    });
  }
}