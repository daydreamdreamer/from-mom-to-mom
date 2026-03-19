import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../shared/interfaces/recipe';

@Component({
  selector: 'app-recipe-content',
  imports: [],
  templateUrl: './recipe-content.component.html',
  styleUrl: './recipe-content.component.css'
})
export class RecipeContentComponent implements OnInit {
  private route = inject(ActivatedRoute);

  recipe: Recipe | null = null;
  recipeId = '';

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.params['recipeId'];

    this.recipe =
     {
        _id: "22",
        recipeName: 'Крекери с маслини и кимион',
        category: "Снакове",
        image: '/images/food2.jpeg',
        cookingTime: "1ч",
        //author: 'Мария',
        created_at: '12 март 2026',
        favorites: 34,
        ingredients: [
          '2 чаши брашно',
          '1/2 чаша зехтин',
          'маслини',
          'кимион',
          'сол'
        ],
        preparationDetails: [
          'Смесете всички съставки.',
          'Омесете тесто.',
          'Разточете тънко.',
          'Печете 20 минути на 180°C.'
        ]
      };
  }
}
