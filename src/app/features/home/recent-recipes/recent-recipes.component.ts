import { Component, inject, OnInit, signal } from '@angular/core';
import { Recipe, RecipeCategory } from '../../../shared/interfaces/recipe';
import { RecentRecipesItemComponent } from '../../../shared/components/recent-recipes-item/recent-recipes-item.component';
import { RecipesService } from '../../../core/services/recipes.service';

@Component({
  selector: 'app-recent-recipes',
  imports: [RecentRecipesItemComponent],
  templateUrl: './recent-recipes.component.html',
  styleUrl: './recent-recipes.component.css'
})

export class RecentRecipesComponent implements OnInit {
  recipeService = inject(RecipesService);

  latestRecipes: Recipe[] = [];

  ngOnInit(): void {
    this.recipeService.getLatestRecipes().subscribe((recipes) => {
      this.latestRecipes = recipes;
    })
    
  }

  currentIndex = signal(0);

  next() {
    this.currentIndex.update(i => (i + 1) % this.latestRecipes.length);
  }

  prev() {
    this.currentIndex.update(i =>
      (i - 1 + this.latestRecipes.length) % this.latestRecipes.length
    );
  }
}
