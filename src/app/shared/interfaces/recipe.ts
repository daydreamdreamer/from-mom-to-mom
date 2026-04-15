import { User } from "./user";

export interface Recipe {
  _id: string;
  recipeName: string;
  category: RecipeCategory;
  cookingTime: number;
  ingredients: string[];
  preparationDetails: string[];
  favorites: string[];
  created_at: string;
  author?: User
}

//Recipe Data transfer object
export interface RecipeDto {
  recipeName: string;
  category: RecipeCategory;
  cookingTime: number;
  ingredients: string[];
  preparationDetails: string[];
}

export enum RecipeCategory {
  BreakfastAndBrunch = 1,
  Desserts,
  LunchAndDinner,
  SavoryBakes,
  Snacks,
  Salads,
  SoupsAndAppetizers
}