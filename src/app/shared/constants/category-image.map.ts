import { RecipeCategory } from '../interfaces/recipe';

export const RecipeCategoryImages: Record<RecipeCategory, string> = {
  [RecipeCategory.BreakfastAndBrunch]: '/images/categories/BreakfastAndBrunch.png',
  [RecipeCategory.Desserts]: '/images/categories/Desserts.png',
  [RecipeCategory.LunchAndDinner]: '/images/categories/LunchAndDinner.png',
  [RecipeCategory.SavoryBakes]: '/images/categories/SavoryBakes.png',
  [RecipeCategory.Snacks]: '/images/categories/Snacks.png',
  [RecipeCategory.Salads]: '/images/categories/Salads.png',
  [RecipeCategory.SoupsAndAppetizers]: '/images/categories/SoupsAndAppetizers.png'
};