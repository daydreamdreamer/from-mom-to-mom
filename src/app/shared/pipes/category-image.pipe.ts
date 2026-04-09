import { Pipe, PipeTransform } from '@angular/core';
import { RecipeCategory } from '../interfaces/recipe';
import { RecipeCategoryImages } from '../constants/category-image.map';

@Pipe({
  name: 'categoryImage'
})
export class CategoryImagePipe implements PipeTransform {

  transform(category: RecipeCategory | null | undefined): string {
    return category ? RecipeCategoryImages[category] : '/images/categories.SavoryBakes.png'
  }

}
