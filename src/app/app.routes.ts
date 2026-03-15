import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { NotFoundComponent } from './features/not-found/not-found.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent },
    {path: '**', component: NotFoundComponent}
];

