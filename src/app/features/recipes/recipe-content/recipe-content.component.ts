import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Recipe } from '../../../shared/interfaces/recipe';
import { CookingTimePipe } from '../../../shared/pipes/cooking-time.pipe';
import { RecipeCategoryLabels } from '../../../shared/constants/recipe-category.map';
import { CategoryImagePipe } from '../../../shared/pipes/category-image.pipe';
import { RecipesService } from '../../../core/services/recipes.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-recipe-content',
  imports: [RouterLink, CookingTimePipe, CategoryImagePipe, DatePipe],
  templateUrl: './recipe-content.component.html',
  styleUrl: './recipe-content.component.css'
})
export class RecipeContentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  recipeService = inject(RecipesService);
  authService = inject(AuthService);

  recipe: Recipe | null = null;
  recipeId = '';

  labels = RecipeCategoryLabels;
  isOwner = computed(() =>
    this.authService.isOwner(this.recipe?.author?._id)
  );

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('recipeId');

      if (id) {
        this.recipeService.getRecipe(id).subscribe(recipe => {
          this.recipe = recipe;
        });
      }
    });
  }

  onDelete(event: Event) {
    event.stopPropagation();

    if (!this.recipe) return;

    const confirmed = confirm('Сигурен ли си, че искаш да изтриеш рецептата?');

    if (!confirmed) return;

    this.recipeService.deleteRecipe(this.recipe._id).subscribe({
      next: () => {
        this.router.navigate(['/recipes']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
