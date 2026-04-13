import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../../../core/services/recipes.service';
import { Recipe, RecipeDto } from '../../../shared/interfaces/recipe';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [RecipeFormComponent],
  templateUrl: './edit-recipe.component.html'
})
export class EditRecipeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipesService);
  private router = inject(Router);

  recipe: Recipe | null = null;
  recipeId = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('recipeId');

      if (id) {
        this.recipeId = id;

        this.recipeService.getRecipe(id).subscribe(recipe => {
          this.recipe = recipe;
        });
      }
    });
  }

  onUpdate(data: RecipeDto) {
    this.recipeService.updateRecipe(this.recipeId, data).subscribe({
      next: (recipe) => {
        this.router.navigate(['/recipes', recipe._id]);
      }
    });
  }
}