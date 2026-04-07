import { RecipeCategory } from "../interfaces/recipe";

export const RecipeCategoryLabels: Record<RecipeCategory, string> = {
  [RecipeCategory.BreakfastAndBrunch]: 'Закуска & Брънч',
  [RecipeCategory.Desserts]: 'Десерти',
  [RecipeCategory.LunchAndDinner]: 'Обяд & Вечеря',
  [RecipeCategory.SavoryBakes]: 'Солени печива',
  [RecipeCategory.Snacks]: 'Снаксове',
  [RecipeCategory.Salads]: 'Салати',
  [RecipeCategory.SoupsAndAppetizers]: 'Супи & Предястия'
};