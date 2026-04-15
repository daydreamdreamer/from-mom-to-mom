import { Recipe } from "../interfaces/recipe";

export function isRecipeFavorited(recipe: Recipe, userId?: string): boolean {
  if (!userId) return false;
  return recipe.favorites?.includes(userId) ?? false;
}

export function getFavoritesCount(recipe: Recipe): number {
  return recipe.favorites?.length ?? 0;
}