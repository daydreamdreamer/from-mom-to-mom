import { Component, inject, OnInit, signal } from '@angular/core';
import { Recipe } from '../../shared/interfaces/recipe';
import { RecipeItemComponent } from '../../shared/components/recipe-item/recipe-item.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecipesService } from '../../core/services/recipes.service';

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
    console.log('my recipes');
  }

  loadFavorites() {
    console.log('favorite recipes');
  }
}
