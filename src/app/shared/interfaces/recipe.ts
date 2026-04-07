export interface Recipe {
  _id: string;
  recipeName: string;
  cookingTime?: string;
  ingredients?: string[];
  preparationDetails?: string[];
  category: RecipeCategory; 
  image: string;
  favorites?: number;
  created_at?: string;
  userId?: string; // ID на потребителя, който е създал рецептата
}

export interface RecipeCreate {
  recipeName: string;
  cookingTime: string;
  ingredients: string[];
  preparationDetails: string[];
  category: RecipeCategory; 
  image?: string;
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