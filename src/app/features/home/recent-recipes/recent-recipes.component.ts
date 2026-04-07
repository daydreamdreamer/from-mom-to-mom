import { Component, OnInit, signal } from '@angular/core';
import { Recipe, RecipeCategory } from '../../../shared/interfaces/recipe';
import { RecentRecipesItemComponent } from '../../../shared/components/recent-recipes-item/recent-recipes-item.component';

@Component({
  selector: 'app-recent-recipes',
  imports: [RecentRecipesItemComponent],
  templateUrl: './recent-recipes.component.html',
  styleUrl: './recent-recipes.component.css'
})

export class RecentRecipesComponent implements OnInit {
  latestRecipes: Recipe[] = [];

  ngOnInit(): void {
    //dummy data
    this.latestRecipes = [
      {
        _id: "123",
        image: '/images/food1.jpeg',
        recipeName: 'Кренвиршки',
        category: RecipeCategory.BreakfastAndBrunch,
        cookingTime: '1ч 20мин',
        created_at: '13 август 2025'
      },
      {
        _id: "325",
        image: '/images/food2.jpeg',
        recipeName: 'Oрзо със зеленяши',
        category: RecipeCategory.BreakfastAndBrunch,
        cookingTime: '50мин',
        created_at: '3 февруари 2026'
      }
    ];
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
