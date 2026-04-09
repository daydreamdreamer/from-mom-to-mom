import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe, RecipeCreateData } from '../../shared/interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';


  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes`);
  }
  
  getLatestRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes/latest?limit=5`);
  }

  getRecipe(recipeId: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/recipes/${recipeId}`);
  }

  createRecipe(data: RecipeCreateData): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiUrl}/recipes`, data, { withCredentials: true });
  }

  updateRecipe(recipeId: string, data: RecipeCreateData): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiUrl}/recipes/${recipeId}`, data, { withCredentials: true }
    );
  }

  deleteRecipe(recipeId: string): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/recipes/${recipeId}`, { withCredentials: true }
    );
  }
}
