import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { RecipeContentComponent } from './features/recipes/recipe-content/recipe-content.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'recipes', component: RecipesComponent },
    { path: 'recipes/:recipeId', component: RecipeContentComponent},

    {path: '**', component: NotFoundComponent}
];

