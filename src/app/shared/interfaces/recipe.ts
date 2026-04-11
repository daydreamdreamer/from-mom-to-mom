import { User } from "./user";

export interface Recipe {
  _id: string;
  recipeName: string;
  category: RecipeCategory;
  cookingTime: number;
  ingredients: string[];
  preparationDetails: string[];
  favorites?: number;
  created_at: string;
  author?: User
}

export interface RecipeCreateData {
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