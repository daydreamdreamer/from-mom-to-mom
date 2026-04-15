import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe, RecipeDto } from '../../shared/interfaces/recipe';
import { TopUser } from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';


  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes`);
  }

  getMyRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes/mine`, { withCredentials: true });
  }

  getFavoriteRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes/favorites`, { withCredentials: true });
  }

  getLatestRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes/latest?limit=5`);
  }

  getRecipe(recipeId: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/recipes/${recipeId}`);
  }

  createRecipe(data: RecipeDto): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiUrl}/recipes`, data, { withCredentials: true });
  }

  updateRecipe(recipeId: string, data: RecipeDto): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiUrl}/recipes/${recipeId}`, data, { withCredentials: true });
  }

  deleteRecipe(recipeId: string): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/recipes/${recipeId}`, { withCredentials: true });
  }

  toggleFavorite(recipeId: string): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiUrl}/recipes/${recipeId}/favorite`, {}, { withCredentials: true });
  }

  getTopUsers(): Observable<TopUser[]> {
    return this.http.get<TopUser[]>(`${this.apiUrl}/recipes/top-users`);
  }

  getMyTotalFavorites(): Observable<number> {
  return this.http
    .get<{ totalFavorites: number }>(`${this.apiUrl}/recipes/my-total-favorites`, {
      withCredentials: true
    })
    .pipe(map(res => res.totalFavorites));
}
}
