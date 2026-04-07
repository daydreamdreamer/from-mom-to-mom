import { Component, inject, OnInit, signal } from '@angular/core';
import { Recipe } from '../../shared/interfaces/recipe';
import { RecipeItemComponent } from '../../shared/components/recipe-item/recipe-item.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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

    /* this.recipes = [
      {
        _id: "1",
        recipeName: 'Паста с пилешко и сметана',
        image: '/images/food1.jpeg',
        category: 'Обяд, вечеря',
        favorites: 24,
        cookingTime: "40мин"
      },
      {
        _id: "2",
        recipeName: 'Домашна пица',
        image: '/images/food1.jpeg',
        category: 'Обяд, вечеря',
        favorites: 3,
         cookingTime: "1ч 10мин"
      },
      {
        _id: "4",
        recipeName: 'Домашна пица',
        image: '/images/food1.jpeg',
        category: 'Обяд, вечеря',
        favorites: 3,
         cookingTime: "20мин"
      },
      {
        _id: "5",
        recipeName: 'Домашна пица',
        image: '/images/food2.jpeg',
        category: 'Обяд, вечеря',
        favorites: 32,
         cookingTime: "1ч 40мин"
      }
    ]; */
  }

  loadAll() {
    // call service later
    console.log('all recipes');
  }

  loadMyRecipes() {
    console.log('my recipes');
  }

  loadFavorites() {
    console.log('favorite recipes');
  }
}
