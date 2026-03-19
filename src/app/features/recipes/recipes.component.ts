import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/interfaces/recipe';
import { RecipeItemComponent } from '../../shared/components/recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipes',
  imports: [RecipeItemComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.recipes = [
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
    ];
  }
}
