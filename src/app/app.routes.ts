import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { RecipeContentComponent } from './features/recipes/recipe-content/recipe-content.component';
import { ForUsComponent } from './features/for-us/for-us.component';
import { GeneralTermsComponent } from './features/general-terms/general-terms.component';
import { ProfileComponent } from './features/profile/profile.component';
import { AddRecipeComponent } from './features/recipes/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './features/recipes/edit-recipe/edit-recipe.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },

    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
    },

    /* {
        path: 'recipes',
        children: [
            { path: '', component: RecipesComponent },
            { path: 'mine', component: RecipesComponent, canActivate: [authGuard] },
            { path: 'favorites', component: RecipesComponent, canActivate: [authGuard] }
        ]
    }, */
    {
        path: 'recipes',
        children: [
            { path: '', component: RecipesComponent, data: { type: 'all' } },

            { path: 'mine', component: RecipesComponent, data: { type: 'mine' }, canActivate: [authGuard] },

            { path: 'favorites', component: RecipesComponent, data: { type: 'favorites' }, canActivate: [authGuard] },

            {
                path: 'add',
                loadComponent: () => import('./features/recipes/add-recipe/add-recipe.component')
                    .then(m => m.AddRecipeComponent),
                canActivate: [authGuard]
            },

            {
                path: ':recipeId/edit',
                loadComponent: () => import('./features/recipes/edit-recipe/edit-recipe.component')
                    .then(m => m.EditRecipeComponent),
                canActivate: [authGuard]
            },

            {
                path: ':recipeId',
                loadComponent: () => import('./features/recipes/recipe-content/recipe-content.component')
                    .then(m => m.RecipeContentComponent)
            }
        ]
    },

    {
        path: 'forus',
        loadComponent: () => import('./features/for-us/for-us.component').then(m => m.ForUsComponent)

    },
    {
        path: 'terms',
        loadComponent: () => import('./features/general-terms/general-terms.component').then(m => m.GeneralTermsComponent)

    },

    {
        path: "profile",
        loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent),
        canActivate: [authGuard]
    },

    { path: '**', component: NotFoundComponent }
];

