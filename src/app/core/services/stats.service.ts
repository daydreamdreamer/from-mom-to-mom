import { Injectable, signal, computed, inject } from '@angular/core';
import { Stats } from '../../shared/interfaces/stats';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/stats';

  private _stats = signal<Stats>({
    recipesCount: 0,
    usersCount: 0
  });

  stats = this._stats.asReadonly();

  recipesCount = computed(() => this._stats().recipesCount);
  usersCount = computed(() => this._stats().usersCount);

  loadStats() {
    return this.http.get<Stats>(this.apiUrl).pipe(
      tap(data => this._stats.set(data))
    );
  }

  sync() {
    this.loadStats().subscribe();
  }

  //optimistic updates
  incrementRecipes() {
    this._stats.update(s => ({
      ...s,
      recipesCount: s.recipesCount + 1
    }));
  }

  decrementRecipes() {
    this._stats.update(s => ({
      ...s,
      recipesCount: Math.max(0, s.recipesCount - 1)
    }));
  }

  incrementUsers() {
    this._stats.update(s => ({
      ...s,
      usersCount: s.usersCount + 1
    }));
  }

  decrementUsers() {
    this._stats.update(s => ({
      ...s,
      usersCount: Math.max(0, s.usersCount - 1)
    }));
  }

  onRecipeCreated(observable: any) {
    this.incrementRecipes();

    return observable.pipe(
      tap({
        error: () => {
          this.decrementRecipes(); // rollback
        }
      })
    );
  }

  onUserRegistered(observable: any) {
    this.incrementUsers();

    return observable.pipe(
      tap({
        error: () => {
          this.decrementUsers(); // rollback
        }
      })
    );
  }
}
