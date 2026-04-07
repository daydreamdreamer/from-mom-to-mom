import { Pipe, PipeTransform } from '@angular/core';
import { RecipeCategory } from '../interfaces/recipe';
import { RecipeCategoryLabels } from '../constants/recipe-category.map';

@Pipe({
  name: 'recipeCategory'
})

export class RecipeCategoryPipe implements PipeTransform {

   transform(value: RecipeCategory | null | undefined): string {
    if (value == null) return '';
    return RecipeCategoryLabels[value] ?? '';
  }

}
