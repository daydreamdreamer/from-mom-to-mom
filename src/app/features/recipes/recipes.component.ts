import { Component, inject, OnInit, signal } from '@angular/core';
import { Recipe } from '../../shared/interfaces/recipe';
import { RecipeItemComponent } from '../../shared/components/recipe-item/recipe-item.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecipesService } from '../../core/services/recipes.service';
import { AuthService } from '../../core/services/auth.service';
import { StatsService } from '../../core/services/stats.service';

@Component({
  selector: 'app-recipes',
  imports: [RecipeItemComponent, RouterModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  activeTab = signal<'all' | 'mine' | 'favorites'>('all');

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  recipeService = inject(RecipesService);
  statsService = inject(StatsService);

  recipes: Recipe[] = [];

  ngOnInit(): void {

    this.route.url.subscribe(url => {
      const path = url[0]?.path;

      if (path === 'mine') {
        this.loadMyRecipes();
      } else if (path === 'favorites') {
        this.loadFavorites();
      } else {
        this.loadAll();
      }
    });

  }

  loadAll() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    })
  }

  loadMyRecipes() {
    this.recipeService.getMyRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  loadFavorites() {
    this.recipeService.getFavoriteRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  onDelete(recipeIdd: string) {
    this.statsService
      .onRecipeDeleted(this.recipeService.deleteRecipe(recipeIdd))
      .subscribe({
        next: () => {
          this.recipes = this.recipes.filter(r => r._id !== recipeIdd);
        },
        error: (err) => console.error(err)
      });
  }

  onFavoriteToggle(recipeId: string) {
    this.recipeService.toggleFavorite(recipeId)
      .subscribe(updated => {

        this.recipes = this.recipes.map(r =>
          r._id === updated._id ? updated : r
        );

      });
  }
}
