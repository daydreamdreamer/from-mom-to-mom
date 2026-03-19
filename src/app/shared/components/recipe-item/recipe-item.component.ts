import { Component, Input } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes.service';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe-item',
  imports: [RouterLink],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
   @Input({required: true}) recipe!: Recipe;
}
